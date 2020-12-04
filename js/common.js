var loading = document.getElementById("loading");
document.onreadystatechange = function () { 
    if (document.readyState == "complete") { 
        loading.style.display = "none";
    }
}
var main = document.getElementById("main");
main.addEventListener("mousewheel", (event) => {
    var ol = parent.document.getElementById("topnav");
      var b = getComputedStyle(ol).height;
    var c =parseInt(b.replace(/px/, ""));
    // alert(c);
    var le = event.wheelDelta;
    // alert(le);
    if (le < 0) { 
        ol.style.height = c + le / 3 + "px";
        if (c > 60) { 
             main.style.position = "fixed";
        }    
        else { 
             main.style.position = "static";
    }
    }
});
var mousetop = document.getElementById("top-mouse");
mousetop.addEventListener("mousewheel", (event) => { 
      var ol = parent.document.getElementById("topnav");
      var b = getComputedStyle(ol).height;
    var c =parseInt(b.replace(/px/, ""));
    // alert(c);
    var le = event.wheelDelta;
    if (le > 0) { 
          ol.style.height = c + le / 3 + "px";
    }
});