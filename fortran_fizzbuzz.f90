program fizzbuzz
    
    implicit none   ! meaning vairables must be explicit
    integer :: i    ! decalres variable of type integer, of name i
   
    
    do i = 1, 100                        ! the do loop, specifying 1-100 inclusive
        if (mod(i, 3) == 0 .and. mod(i, 5) == 0) then  ! modulus function, checking zero remainder for 3 and 5
            print *, 'FizzBuzz'         ! print 'FizzBuzz', formatted as-is (because of the *) 
        else if (mod(i, 3) == 0) then   ! modulus for 3 condition
            print *, 'Fizz'             ! print 'Fizz' as is
        else if (mod(i, 5) == 0) then   ! modulus for the 5 condition
            print *, 'Buzz'             ! print 'Buzz' as is
        else                            ! else is else
            print *, i                  ! print again, as-is again
        end if                          ! explicitly end the if
    end do                              ! explicitly end the do loop 

end program fizzbuzz                    ! explicitly end the script


! if you don't want to install a compiler to run it, you could try this omline one: https://www.onlinegdb.com/online_fortran_compiler