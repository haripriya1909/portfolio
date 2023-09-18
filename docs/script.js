function toggleMenu()
{
    var x = document.getElementsByClassName("hamburger");
    if(x.style.display == "flex"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
}