import System.IO
import Data.List.Split(splitOn)

readDataFromFile :: FilePath -> IO [Int]
readDataFromFile filename = do
    contents <- readFile filename
    let dataList = map readInt (splitOn "," contents)
    return dataList

readInt :: String -> Int
readInt s = read s

quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
    let smallerSortedList = quicksort [a | a <- xs, a <= x]
        biggerSortedList = quicksort [a | a <- xs, a > x]
    in smallerSortedList ++ [x] ++ biggerSortedList
    
main :: IO ()
main =  do 
    let filename = "../data.txt"
    dataList <- readDataFromFile filename
    let sortedList = quicksort dataList

    putStrLn "sorted: "
    print sortedList




    -- main pain points for ths one were figuring out how to get split 
    -- to work (dependency issues, needed to install split despite having split)
    -- and figuring out how to do list comprehension in haskell - tbh it's more 
    -- straightforeward than i had assumed, i think i overcomplicated it at first
    -- 
    -- quite like "quicksort [] = []" as a way to skip empty lists, also 
    -- getting quite into how the syntax is written, eg how cleanly the list 
    -- comprehension stuff is done
