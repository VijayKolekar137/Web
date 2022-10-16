var count = 0;

document.write("Entering the loop <br />");

while(count < 20)
{
    if(count == 5)
    {
        break;
    }

    count = count + 1;
    document.write(count +  "<br />");
}

document.write("Exiting the loop");