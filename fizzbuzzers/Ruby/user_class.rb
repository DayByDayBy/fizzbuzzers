class User
    attr_accessor :name, :email
  
    def initialize(name, email)
      @name = name
      @email = email
    end
  
    def display_info
      puts "Name: #{@name}, Email: #{@email}"
    end
  
    def valid_email?
      @email =~ URI::MailTo::EMAIL_REGEXP
    end
  end
  
  user = User.new("Alice", "alice@example.com")
  user.display_info