const isBalancedBrackets = (input) => {
    const bracketPairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    let bracket = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "[" || input[i] === "{" || input[i] === "(") {
            bracket.push(input[[i]]);
        } else if (input[i] === "]" || input[i] === "}" || input[i] === ")") {
            if (bracket.length === 0 || bracket[bracket.length - 1] !== bracketPairs[input[i]]) {
                return "NO";
            }
            bracket.pop();
        }
    }
    if (bracket.length > 0) {
        return "NO";
    }
    return "YES";
};

let input = " {[(])}";
let input2 = "{({{{[]}}})}";
let input3 = "{({{{[[[]]}}})}";
console.log(`Input ${input} \n Output: ${isBalancedBrackets(input)}`);
console.log(`Input ${input2} \n Output: ${isBalancedBrackets(input2)}`);
console.log(`Input ${input3} \n Output: ${isBalancedBrackets(input3)}`);
