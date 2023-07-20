const sloane = (input) => {
    let output = [];
    for (let i = 0; i < input; i++) {
        if (i === 0) {
            output.push(i + 1);
        } else {
            output.push(i + output[i - 1]);
        }
    }
    return output.join("-");
};

console.log(`Input : 9 \nOutput : ${sloane(9)}`);
console.log(`Input : 9 \nOutput : ${sloane(11)}`);
console.log(`Input : 9 \nOutput : ${sloane(3)}`);
