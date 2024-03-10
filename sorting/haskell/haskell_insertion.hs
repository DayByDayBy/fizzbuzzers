import System.IO
import Data.List.Split(splitOn)

readDataFromFile :: FilePath -> IO [Int]
readDataFromFile filename = do
    contents <- readFile filename
    let dataList = map readInt (splitOn "," contents)
    return dataList

-- readInt :: String -> Int
-- readInt s = read s

-- insertionSort :: (Ord a) => [a] -> [a]
-- insertionSort = [] = []
