function changeColor(color)
{
    document.body.style.backgroundColor = color;

    document.querySelectorAll('span').forEach(function(item){
        item.classList.remove('active');
    })
    event.target.classList.add('active');
}