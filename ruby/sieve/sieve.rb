class Sieve
  attr_reader :primes

  def initialize(n)
    @primes = (2..n).to_a
    @current_index = 0
    mark(@primes.at(@current_index))
  end

  private
    def mark(prime)
      return if prime >= @primes.last

      multiple = prime
      while (multiple += prime) <= @primes.last
        @primes.delete(multiple)
      end

      @current_index += 1
      mark(@primes.at(@current_index))

    end

end