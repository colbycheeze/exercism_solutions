class PrimeFactors
  def self.for(n)
    @primes = []
    compute_prime(2,n)
    return @primes
  end

  private
  def self.compute_prime(divisor,n)
    return if divisor > n

    sqrt_of_divisor = Math.sqrt(divisor)
    unless @primes.last.nil?
      return if @primes.last > sqrt_of_divisor
    end

    if n%divisor == 0
      @primes.push(divisor)
      compute_prime(divisor,n/divisor)
    else
      skip = divisor==2 ? 1 : 2
      compute_prime(skip+divisor, n)
    end
  end
end
