local limit = 4000000


function fibonacci_even_sum(limit)
    local a, b = 1, 2
    local total = 0
      
    while a <= limit do
        if a % 2 == 0 then
            total = total + a
        end        
        a, b = b, a + b 
        end
    return total
    end

local result = fibonacci_even_sum(limit)

print("the sum is: ", result)


-- main differences between lua and python: 
-- 'function' not 'def', lua requires 'local' flag for variables, 
-- while/if require 'do' and 'then', and 'end' pieces,
--  no '+=', requires 'total = total + a' instead 