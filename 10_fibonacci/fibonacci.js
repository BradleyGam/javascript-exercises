const fibonacci = function(number) {
    const sequence = parseInt(number);
    if (number < 0) {
        return "OOPS";
    }
    if (sequence < 3) {
        return 1;
    }

    let previous = 1;
    let current = 1;

    for (let i = 3; i <= sequence; i++) {
        const next = previous + current;
        previous = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
