function funcionNavBar(){
    var x = document.getElementById("myTopnav");
    if(x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function vermas(){
    document.getElementById("oculto").classList.toggle("show");
  }
