class SumOfMultiples

  def initialize(*tests)
    @tests = tests
  end

  def to(limit)
    (0...limit).select { |x| !is_a_multiple?(x) }
               .inject(:+)
  end

  def self.to(limit)
    self.new(3,5).to(limit)
  end

  private
    def is_a_multiple?(number)
      @tests.each { |test| return false if number % test == 0 }
      true
    end
end