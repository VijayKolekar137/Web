function hypotenuse(a, b)
{
    function square(x) { return x*x;}

    return Math.sqrt(square(a),square(b));
}

function sFunc()
{
    var result;
    result = hypotenuse(4,6);
    document.write(result);
}