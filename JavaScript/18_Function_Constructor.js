// Function Constructor

// Syntax:

// var variablename = new Function(arg1, arg2...AbortController.apply.apply,"Function Body");


var func = new Function("x","y","return x*y;");

function secondFunction()
{
    var result;
    result = func(10,40);
    document.write(result);
}