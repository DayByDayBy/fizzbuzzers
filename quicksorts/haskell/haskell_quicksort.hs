
quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
    let smallerSortedList = quicksort [a | a <- xs, a <= x]
        biggerSortedList = quicksort [a | a <- xs, a > x]
    in smallerSortedList ++ [x] ++ biggerSortedList

main :: IO ()
main =  