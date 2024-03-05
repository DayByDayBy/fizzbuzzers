#include <stdio.h>
#include <stdlib.h>
void quicksort(int data[], int left, int right)
{
    if (left >= right)
    {
        return;
    }
    int pivot = data[left];
    int i = left + 1;
    int j = right;
    while (i <= j)
    {
        if (data[i] > pivot && data[j] < pivot)
        {
            int temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i++;
            j--;
        }
        else
        {
            if (data[i] <= pivot)
                i++;
            if (data[j] >= pivot)
                j--;
        }
    }
    int temp = data[left];
    data[left] = data[j];
    data[j] = temp;
    quicksort(data, left, j - 1);
    quicksort(data, j + 1, right);
}
int main()
{
    FILE *file = fopen("../data.txt", "r");
    if (!file)
    {
        fprintf(stderr, "error opening file\n");
        return 1;
    }
    int data[1000];
    int num, count = 0;
    while (fscanf(file, "%d,", &num) == 1)
    {
        data[count++] = num;
    }
    fclose(file);
    quicksort(data, 0, count - 1);
    for (int i = 0; i < count; i++)
    {
        printf("%d ", data[i]);
    }
    printf("\n");

    return 0;
}