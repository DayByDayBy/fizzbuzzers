local file, errorMsg = io.open("../data.txt", "r")
if not file then
    print("Error opening file:", errorMsg)
    return nil
end
local content = file:read("*all") 
file:close()  
local data = {}
for num in content:gmatch("%d+") do
    table.insert(data, tonumber(num))
end

function insertion_sort(data)
    if #data <= 1 then
        return data
    else
        for i = 2, #data do
            local j = i - 1
            while j >= 1 and data[j] > data[j + 1] do
                data[j], data[j + 1] = data[j + 1], data[j]
                j = j - 1
            end
        end
        return data
    end
end

local sorted_data = insertion_sort(data)
print(sorted_data)




