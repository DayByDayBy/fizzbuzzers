IDENTIFICATION DIVISION.       *> indicates identifying info to follow  
PROGRAM-ID. FIZZBUZZ.          *> the identifying information
DATA DIVISION.                 *> indicates data to follow
WORKING-STORAGE SECTION.       *> indicates working storage
    01 I PIC 9(3) VALUE 1.     *> in order: hierarchy level (01=top), var name (I), PIC indicates data pictire to follow, '9' indicates numberic data, 3 indicates length of same, 1 indicates default value for I  
PROCEDURE DIVISION.            *> indicates procedure to follow
MAIN-LOGIC.                    *> main logic is the function/procedure in question 
    PERFORM UNTIL I > 100      *> self-explanatory, the loop - not PERFORM rather than for, do, etc 
        IF I MOD 15 = 0        
            DISPLAY "FizzBuzz"
        ELSE IF I MOD 3 = 0
            DISPLAY "Fizz"
        ELSE IF I MOD 5 = 0
            DISPLAY "Buzz"
        ELSE
            DISPLAY I
        END-IF                 *> note explicit END-IF
        ADD 1 TO I             *> iteration counter here rather than, eg, in 'for' condition
    END-PERFORM.               *> explicit end of loop
    STOP RUN.                  *> explicit end of function/procedure



    *> compiler errors.... not sure what the issue is, will check compiler 
    *> later, as it says i do not have access to MOD, and when i try FUNCTION REMAINDER 
    *>  it says i don't have that either:   
    *>         "cobol_fizzbuzz.cob:11: error: FUNCTION 'REMAINDER' unknown"
