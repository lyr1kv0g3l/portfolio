function menubarMobile(x) {
    //x.classList.toggle("change");
    document.getElementById("nav-menu-btn").classList.toggle("change")

    if (document.getElementById("nav-mobile").style.display === "block") {
        document.getElementById("nav-mobile").style.display = "none";
    } 
    else {
        document.getElementById("nav-mobile").style.display = "block";
    }
  }