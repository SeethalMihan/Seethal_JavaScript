# JavaScript Variables and Scope

This guide explains `var`, `let`, and `const`, and where variables declared
with them can be used.

## What is scope?

Scope is the part of a program where a variable can be used.

- **Function scope:** a variable declared with `var` inside a function can be
  used throughout that function.
- **Block scope:** a variable declared with `let` or `const` inside `{ }` can
  only be used inside those braces.

## `var` and function scope

In [Var and FunctionScope.js](./Var%20and%20FunctionScope.js), `status` is
declared with `var` inside an `if` block. Because `var` is not block-scoped,
the variable is also available after the block:

```js
var status = "Pending";

if (true) {
    var status = "Completed";
    console.log("Inside block:", status);
}

console.log("Outside block:", status);
```

Both lines print `Completed`. The `var` inside the block refers to the same
function-scoped variable.

When `var` is declared inside a function, it is available within that function:

```js
function testVar() {
    var message = "Hello from function";
    console.log(message);
}

testVar();
```

## `var` example

In [Var_Example.js](./Var_Example.js), `city` is declared and then changed.
The example also declares `city` again with `var`:

```js
var city = "New York";
city = "Chicago";
var city = "Dallas";

console.log(city);
```

The output is `Dallas`. Although `var` allows redeclaring a variable, this can
make code harder to follow.

## `let` and block scope

In [Let and Block Scope.js](./Let%20and%20Block%20Scope.js), `executionTime`
is declared inside blocks. Each `let` variable can only be used within its own
block:

```js
if (true) {
    let executionTime = 2000;
    console.log(executionTime);
}

{
    let executionTime = 5000;
    console.log(executionTime);
}
```

Both variables can use the name `executionTime` because they belong to
different blocks. Trying to use either variable outside its block causes an
error.

## Comparing `var`, `let`, and `const`

| Keyword | Scope | Can change its value? | Can redeclare in the same scope? |
|---------|-------|-----------------------|----------------------------------|
| `var` | Function (or global) | Yes | Yes |
| `let` | Block | Yes | No |
| `const` | Block | No | No |

In [Var_Let_Const.js](./Var_Let_Const.js), the `city` example shows that a
`var` value can be changed and its variable redeclared.

Here is a small example of all three declarations:

```js
var name = "John";
let age = 25;
const country = "USA";

name = "David"; // var can be changed
age = 26;       // let can be changed
// country = "Canada"; // Error: a const variable cannot be reassigned

console.log(name);
console.log(age);
console.log(country);
```

Use `const` when you do not need to reassign a variable. Use `let` when you do.
In modern JavaScript, prefer these over `var` for clearer, block-scoped code.

## Running the examples

Open a terminal in this folder and run a file with Node.js, for example:

```bash
node "Let and Block Scope.js"
```
