const regex = /\d+|\+|\-|\*|\/|\(|\)/g;

const tokenizeExpression = (expression: string): string[] => {
    return expression.match(regex) || [];
};

const infixToPostfix = (tokens: string[]): string[] => {
    const precedence: { [key: string]: number } = { '+': 1, '-': 1, '*': 2, '/': 2 };
    const output: string[] = [];
    const operators: string[] = [];

    tokens.forEach(token => {
        if (/\d/.test(token)) {
            output.push(token);
        } else if (token in precedence) {
            while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
                output.push(operators.pop()!);
            }
            operators.push(token);
        } else if (token === '(') {
            operators.push(token);
        } else if (token === ')') {
            while (operators.length && operators[operators.length - 1] !== '(') {
                output.push(operators.pop()!);
            }
            operators.pop();
        }
    });

    while (operators.length) {
        output.push(operators.pop()!);
    }

    return output;
};


const evaluatePostfix = (postfixTokens: string[]): number => {
    const stack: number[] = [];

    postfixTokens.forEach(token => {
        if (/\d/.test(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop()!;
            const a = stack.pop()!;
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
            }
        }
    });

    return stack[0];
};

const parseExpression = (expression: string): number => {
    const tokens = tokenizeExpression(expression);
    const postfix = infixToPostfix(tokens);
    return evaluatePostfix(postfix);
};

export default parseExpression;