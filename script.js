const makeChange = (amountInCents) => {
  // your name here
	const quarterValue = 25;
    const dimeValue = 10;
    const nickelValue = 5;
    const pennyValue = 1;

    // Initialize the variables to store the number of each coin
    let q = 0; // quarters
    let d = 0; // dimes
    let n = 0; // nickels
    let p = 0; // pennies

    // Calculate the number of each coin
    while (amountInCents > 0) {
        if (amountInCents >= quarterValue) {
            q++;
            amountInCents -= quarterValue;
        } else if (amountInCents >= dimeValue) {
            d++;
            amountInCents -= dimeValue;
        } else if (amountInCents >= nickelValue) {
            n++;
            amountInCents -= nickelValue;
        } else {
            p++;
            amountInCents -= pennyValue;
        }
    }

    // Create and return the result object
    const result = { q, d, n, p };
    return result;

};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
