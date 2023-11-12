import Big from "big.js";

function peek<T = any>(arr: T[]): T {
  return arr[arr.length - 1];
}

function yard(infix: string[]): string[] {
  const ops = { "+": 1, "-": 1, "*": 2, "/": 2 };
  const stack = [];

  return infix
    .reduce((output, token) => {
      if (!isNaN(parseFloat(token))) {
        output.push(token);
      }

      if (token in ops) {
        while (peek(stack) in ops && ops[token] <= ops[peek(stack)]) {
          output.push(stack.pop());
        }

        stack.push(token);
      }

      if (token == "(") {
        stack.push(token);
      }

      if (token == ")") {
        while (peek(stack) != "(") {
          output.push(stack.pop());
        }

        stack.pop();
      }

      return output;
    }, [])
    .concat(stack.reverse());
}

function isOperator(token: string): boolean {
  return (
    token === "-" ||
    token === "+" ||
    token === "*" ||
    token === "/" ||
    token === "(" ||
    token === ")"
  );
}

function rpn(tokens): Big {
  const stack: Big[] = [];

  try {
    tokens.forEach(token => {
      if (!isOperator(token)) {
        stack.push(Big(token));
      } else {
        const val2 = stack.pop();
        const val1 = stack.pop();

        if (!val1) {
          throw new Error("Syntax error.");
        }

        switch (token) {
          case "+":
            stack.push(val1.add(val2));
            break;
          case "*":
            stack.push(val1.mul(val2));
            break;
          case "/":
            if (val2.eq(0)) {
              throw new Error("Division by zero.");
            }

            stack.push(val1.div(val2));
            break;
          case "-":
            stack.push(val1.minus(val2));
            break;
        }
      }
    });
  } catch (e) {
    return e.message;
  }

  return stack[0].toFixed();
}

function tokenize(expression: string): string[] {
  return expression
    .split("")
    .filter(char => char !== " ")
    .reduce((tokens, char) => {
      const lastToken = tokens[tokens.length - 1];
      const newToken =
        tokens.length === 0 || isOperator(char) !== isOperator(lastToken);

      if (newToken) {
        tokens.push(char);
      } else {
        tokens[tokens.length - 1] = lastToken + char;
      }
      return tokens;
    }, []);
}

export function calculate(expression: string): number {
  return rpn(yard(tokenize(expression)));
}
