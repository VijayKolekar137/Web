// Arithmetic Operators (+,-,*,/,%,++,--)
// Comparison Operators (==, !=, > , <, >= , <= )
// Logical Operators    (&&, ||, !)
// Bitwise Operators (&, |, ^, ~, <<, >>, >>>)
// Assigenment Operators (=, +=, -=, *=, /=, %=)
// Conditional Operators (?:)


// Arithmetic Operators

var a = 6;
var b = 74;
var c = "Test";
var linebreak = "<br />";

document.write("a + b = ");
result = a + b;
document.write(result);
document.write(linebreak);

document.write("a - b = ");
result = a - b;
document.write(result);
document.write(linebreak);

document.write("a * b = ");
result = a * b;
document.write(result);
document.write(linebreak);

document.write("a % b = ");
result = a % b;
document.write(result);
document.write(linebreak);

document.write("a + b + c = ");
result = a + b + c;
document.write(result);
document.write(linebreak);

a = a++;
document.write("a++ = ");
result = a++;
document.write(result);
document.write(linebreak);

b = b--;
document.write("b-- = ");
result = b--;
document.write(result);
document.write(linebreak);


// Comparison Operators
document.write(linebreak);
document.write("Comparison Operator");
document.write(linebreak);

document.write("(a == b) = ");
result = (a == b);
document.write(result);
document.write(linebreak);

document.write("(a < b) = ");
result = (a < b);
document.write(result);
document.write(linebreak);

document.write("(a > b) = ");
result = (a > b);
document.write(result);
document.write(linebreak);

document.write("(a != b) = ");
result = (a != b);
document.write(result);
document.write(linebreak);

document.write("(a >= b) = ");
result = (a >= b);
document.write(result);
document.write(linebreak);

document.write("(a <= b) = ");
result = (a <= b);
document.write(result);
document.write(linebreak);

//Logical Operator
document.write(linebreak);

a = true;
b = false;

document.write("(a && b) = ");
result = (a && b);
document.write(result);
document.write(linebreak);

document.write("(a || b) = ");
result = (a || b);
document.write(result);
document.write(linebreak);

document.write("(!(a && b)) = ");
result = (!(a && b));
document.write(result);
document.write(linebreak);


//Bitwise Operators
document.write(linebreak);
document.write("Bitwise Operator")
document.write(linebreak);

a = 2;
b = 3;

document.write("a & b = ");
result = a & b;
document.write(result);
document.write(linebreak);

document.write("a | b = ");
result = a | b;
document.write(result);
document.write(linebreak);

document.write("a ^ b = ");
result = a ^ b;
document.write(result);
document.write(linebreak);

document.write("a << b = ");
result = a << b;
document.write(result);
document.write(linebreak);

document.write("a >> b = ");
result = a >> b;
document.write(result);
document.write(linebreak);

document.write("~b = ");
result = ~b;
document.write(result);
document.write(linebreak);

document.write(linebreak);
document.write("Assignement Operators");
document.write(linebreak);

a = 5;
b = 74;

document.write("a = b = ");
result = a = b;
document.write(result);
document.write(linebreak);

document.write("a += b = ");
result = a += b;
document.write(result);
document.write(linebreak);

document.write("a -= b = ");
result = a -= b;
document.write(result);
document.write(linebreak);

document.write("a *= b = ");
result = a *= b;
document.write(result);
document.write(linebreak);

document.write("a /= b = ");
result = a /= b;
document.write(result);
document.write(linebreak);

document.write("a %= b = ");
result = a %= b;
document.write(result);
document.write(linebreak);

//Conditional Operator

document.write(linebreak);
document.write("Conditional Operators");
document.write(linebreak);

a = 10;
b = 20;

document.write("((a > b) ? 100 : 200) =>");

result = (a > b ) ? 100 : 200 ;
document.write(result);
document.write(linebreak);


document.write("((a < b) ? 100 : 200) =>");

result = (a < b ) ? 100 : 200 ;
document.write(result);
document.write(linebreak);