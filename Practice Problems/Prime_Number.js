function PrimeNumber(range) {

    for (let number = 1; number < range; number++) {

        if (number % 2 == 0 || number % 3 == 0) {
            // console.log(`Not Prime Number ${number}`);
        }
        else {
            console.log(`Prime number ${number}`);
        }
    }
}
PrimeNumber(20);