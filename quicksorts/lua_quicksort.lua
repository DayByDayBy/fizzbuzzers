function quicksort(data)

-- length checking in lua is achieved with "#table_name" syntax.
--  lua is all tables, so it works for what would be lists/arrays/etc in other languages
--  list/table of 1 is alreadcy sorted, so "return data"

    if #data <= 1 then     
        return data       
    else
        local pivot = data[1]       -- lua is 1-indexed, hence not data[0] here
        local left = {}             -- empty table initalized
        local right = {}            -- empty table initalized
        for i = 2, #data do         -- second item (because 1-indexed), #data is length value 
            if data[i] < pivot then     -- standard quicksort comparison
                table.insert(left, data[i])     -- table.insert() takes a destination table, index, and new value
            else
                table.insert(right, data[i])
            end
        end


        local sorted_left = quicksort(left)   -- recursive call on left sub-table
        local sorted_right = quicksort(right) -- recursive call on right sub-table
        table.insert(sorted_left, pivot)      -- inserting left list and pivot (pivot will be next largest, and will be reassigned on next iteration)
        for _, value in ipairs(sorted_right) do  -- ipairs is a built-in, iterates over tables with consecutive integer keys, ie index and value pairs
            table.insert(sorted_left, value)
        end
        return sorted_left
    end
end

local file = io.open("data.txt")
local content = file:read("*all")
file:close()

local data = {}
for num in content:gmatch("%d+") do
    table.insert(data, tonumber(num))
end

local sorted_data = quicksort(data)

for _, value in ipairs(sorted_data) do
    print(value)
end
