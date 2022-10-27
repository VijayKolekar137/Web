var a = 0;

document.write("Entering into the loop <br/>");

while(a < 20)
{
    a = a + 1;
    if(a == 5)
    {
        continue;
    }
    document.write(a + "<br />");
}

document.write("Exiting the loop <br />");