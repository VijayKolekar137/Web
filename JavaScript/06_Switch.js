var grade = 'A';

document.write("Entering switch block<br />");

switch(grade)
{
    case 'A': document.write("Good Job <br />");
    break;
 
    case 'B': document.write("Preety Job <br />");
    break;

    case 'C': document.write("Passed<br />");
    break;

    case 'D': document.write("Not so good <br />");
    break;

    case 'F': document.write("Failed <br />");
    break;

    default: document.write("Exiting switch block<br />");
}

document.write("Exiting switch block");

document.write("<br /><br />----------------- Switch Example 2 --------------<br /><br />");
document.write("<br/>Switch Without using break<br /><br />")

switch(grade)
{
    case 'A': document.write("Good Job <br />");
    
    case 'B': document.write("Preety Job <br />");
    
    case 'C': document.write("Passed<br />");
    
    case 'D': document.write("Not so good <br />");
    
    case 'F': document.write("Failed <br />");
    
    default: document.write("Exiting switch block<br />");
}