def fizzbuzz(n)
    mappings = { 3 => 'fizz', 5 => 'buzz' }
    (1..n).each do |number|
      output = mappings.map { |divisor, word| number % divisor == 0 ? word : nil }.compact.join
      puts output.empty? ? number : output
    end
  end
  
  fizzbuzz(100)