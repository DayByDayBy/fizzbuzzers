(defvar n 100)

(defun fizzbuzz ()
  (loop for i from 1 to n do
    (cond ((and (zerop (mod i 3)) (zerop (mod i 5)))
            (format t "FizzBuzz~%"))
          ((zerop (mod i 3))
            (format t "Fizz~%"))
          ((zerop (mod i 5))
            (format t "Buzz~%"))
          (t
            (format t "~d~%" i)))))

(fizzbuzz)


;; ran it with sbcl
;; also have clojure installed, but wanted to go classic
