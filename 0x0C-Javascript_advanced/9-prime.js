// Prime numbers & timing execution


function countPrimeNumbers(){
    let primes=4; 
    for (let counter = 2; counter <= 100; counter++)
    {
        let isPrime = 0;

        if(counter % 2 == 0 || counter % 3 == 0 || counter % 5 == 0 || counter % 7 == 0)isPrime=0; 
        else {
            primes++;
        }
    }


    return primes
}

const t0 = performance.now()
console.log(countPrimeNumbers())
const t1 = performance.now()

console.log("Execution time of printing countPrimeNumbers was " + (t1 - t0) + " milliseconds.")