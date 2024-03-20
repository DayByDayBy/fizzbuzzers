DROP TABLE numbers;
DROP DATABASE fizzbuzz_sql_db;
CREATE DATABASE fizzbuzz_sql_db;
\c fizzbuzz_sql_db;
CREATE TABLE IF NOT EXISTS numbers (
    id SERIAL PRIMARY KEY,
    n INTEGER 
);

INSERT INTO numbers (n)
SELECT generate_series(1,100);

SELECT
    CASE
        WHEN n % 15 = 0 THEN 'FizzBuzz'
        WHEN n % 3 = 0 THEN 'Fizz'
        WHEN n % 5 = 0 THEN 'Buzz'
        ELSE CAST(n AS VARCHAR(3))
    END as fizzbuzz_output
FROM 
    numbers
LIMIT 100;



--  probably the most annoying one yet, lol - mainly because of database 
--  connections, and the slightly different way different management systems 
--  work, eg i forgot that 'IF NOT EXISTS' doesnt work in postgres the way
--  it does in MySQL and SQLite

