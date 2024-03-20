10 FOR i TO 100
20 output$ = ""
30 IF i MOD 15 = 0 THEN output$ = 'Fizzbuzz'
40 IF i MOD 5 = 0 THEN output$ = 'Buzz'
50 IF i MOD 3 = 0 THEN output$ = 'Fizz'
60 IF output$ = "" THEN output$ = STR$(i)
70 PRINT output$
80 NEXT i