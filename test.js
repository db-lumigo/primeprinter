// javascript
const lumigo = require("@lumigo/opentelemetry");

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimesUpTo(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

printPrimesUpTo(1000);
