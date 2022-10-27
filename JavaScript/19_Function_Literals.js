// JavaScript 1.2 introduces the concept of function literal which is another new way of defining function. A function literal is an expression that defines an unnamed function.


// Syntax:

// var variablename = function(Argument List)
// {
//     Function Body
// };


var func = function(x,y){
    return x*y;
}

function secondFunction()
{
    var result;
    result = func(10,20);
    document.write(result);
}