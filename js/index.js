var all = document.getElementById("all");
var anima = document.getElementById("anima");
var tv = document.getElementById("tv");
var movie = document.getElementById("movie");
var music = document.getElementById("music");
var tec = document.getElementById("tec");
var pe = document.getElementById("pe");
var topnav = document.getElementById("topnav");
var btn = document.getElementById("btn");
var logbox = document.getElementById("logbox");
var topblank = document.getElementById("topblank");
var mid = document.getElementById("mid");
var rightbox = document.getElementById("rightbox");
var leftnav = document.getElementById("left-nav");
var mbtn = document.getElementById("mbtn");
var cancel = document.getElementById("cancel");
var pindaolog = document.getElementById("pindao-log")
var logmini = document.getElementById("log-mini");
var navbtn = document.getElementById("navbtn");
var sspindao = document.getElementById("sspindao");
var lnb = document.getElementById("left-nav-box1");
var lnbex = document.getElementById("left-nav-box2");
// mbtn.addEventListener("click", function () { 
//     mbtn.style.transform = "rotate(180deg)";
//     leftnav.style.transform = "translateX(-320px)";
// });
navbtn.addEventListener("click", function () { 
//  name duration timing-function delay iteration-count direction fill-mode;
    leftnav.style.animation = "navmove 1s ease 1 alternate forwards";
    sspindao.style.left = "-300px";
    lnbex.style.animation = "move 1s ease 1 alternate forwards";
   var ol = parent.document.getElementById("topnav");
      var b = getComputedStyle(ol).height;
    var c = parseInt(b.replace(/px/, ""));
    if (c == 60) {
        sspindao.style.opacity = "0";
    } else { 
        sspindao.style.opacity = "1";
    }
    //  leftnav.removeAttribute("animation");
    //  lnbex.removeAttribute("animation");

});

lnbex.addEventListener("click", function () {
    leftnav.style.animation = "navmove2 1s ease 1 forwards";
    sspindao.style.left = "20px";
    lnbex.style.animation = "move2 1s ease 1 forwards";
 
   
});
logmini.addEventListener("click", function () {
    pindaolog.style.display = "block";
});
cancel.addEventListener("click", function () {
    pindaolog.style.display = "none";
});
mid.addEventListener("mousewheel", (event) => {
    var a = document.getElementById("topnav");
    var b = getComputedStyle(a).height;
    var c =parseInt(b.replace(/px/, ""));
    // alert(c);
    var le = event.wheelDelta;
    topnav.style.height = (c + le / 6) + "px"; 
    // var d = rightbox.contentWindow.document.getElementById("main").style.height;
    // alert(d);
}, false);

btn.onclick = function () {
    logbox.style.display = "block";
};
topblank.onclick = function () { 
    logbox.style.display = "none";
};
all.onclick = function () { 
    all.style.backgroundColor = "#02a7f0";
    all.style.color = "#fff";
    anima.style.backgroundColor = "initial";
    anima.style.color = "black";
    tv.style.backgroundColor = "#fff";
    tv.style.color = "black";
    movie.style.backgroundColor = "#fff";
    movie.style.color = "black";
    music.style.backgroundColor = "#fff";
    music.style.color = "black";
    tec.style.backgroundColor = "#fff";
    tec.style.color = "black";
    pe.style.backgroundColor = "#fff";
    pe.style.color = "black";
}
anima.onclick = function () { 
    all.style.backgroundColor = "#fff";
    all.style.color = "black";
    anima.style.backgroundColor = "#02a7f0";
    anima.style.color = "#fff";
    tv.style.backgroundColor = "#fff";
    tv.style.color = "black";
    movie.style.backgroundColor = "#fff";
    movie.style.color = "black";
    music.style.backgroundColor = "#fff";
    music.style.color = "black";
    tec.style.backgroundColor = "#fff";
    tec.style.color = "black";
    pe.style.backgroundColor = "#fff";
    pe.style.color = "black";
}
tv.onclick = function () { 
    all.style.backgroundColor = "#fff";
    all.style.color = "black";
    anima.style.backgroundColor ="#fff";
    anima.style.color = "black";
    tv.style.backgroundColor = "#02a7f0";
    tv.style.color = "#fff";
    movie.style.backgroundColor = "#fff";
    movie.style.color = "black";
    music.style.backgroundColor = "#fff";
    music.style.color = "black";
    tec.style.backgroundColor = "#fff";
    tec.style.color = "black";
    pe.style.backgroundColor = "#fff";
    pe.style.color = "black";
}
movie.onclick = function () { 
    all.style.backgroundColor = "#fff";
    all.style.color = "black";
    anima.style.backgroundColor ="#fff";
    anima.style.color = "black";
    tv.style.backgroundColor = "#fff";
    tv.style.color = "black";
    movie.style.backgroundColor = "#02a7f0";
    movie.style.color = "#fff";
    music.style.backgroundColor = "#fff";
    music.style.color = "black";
    tec.style.backgroundColor = "#fff";
    tec.style.color = "black";
    pe.style.backgroundColor = "#fff";
    pe.style.color = "black";
}
music.onclick = function () { 
    all.style.backgroundColor = "#fff";
    all.style.color = "black";
    anima.style.backgroundColor ="#fff";
    anima.style.color = "black";
    tv.style.backgroundColor = "#fff";
    tv.style.color = "black";
    movie.style.backgroundColor = "#fff";
    movie.style.color = "black";
    music.style.backgroundColor = "#02a7f0";
    music.style.color = "#fff";
    tec.style.backgroundColor = "#fff";
    tec.style.color = "black";
    pe.style.backgroundColor = "#fff";
    pe.style.color = "black";
}
tec.onclick = function () { 
    all.style.backgroundColor = "#fff";
    all.style.color = "black";
    anima.style.backgroundColor ="#fff";
    anima.style.color = "black";
    tv.style.backgroundColor = "#fff";
    tv.style.color = "black";
    movie.style.backgroundColor = "#fff";
    movie.style.color = "black";
    music.style.backgroundColor = "#fff";
    music.style.color = "black";
    tec.style.backgroundColor = "#02a7f0";
    tec.style.color = "#fff";
    pe.style.backgroundColor = "#fff";
    pe.style.color = "black";
}
pe.onclick = function () { 
    all.style.backgroundColor = "#fff";
    all.style.color = "black";
    anima.style.backgroundColor ="#fff";
    anima.style.color = "black";
    tv.style.backgroundColor = "#fff";
    tv.style.color = "black";
    movie.style.backgroundColor = "#fff";
    movie.style.color = "black";
    music.style.backgroundColor = "#fff";
    music.style.color = "black";
    tec.style.backgroundColor = "#fff";
    tec.style.color = "black";
    pe.style.backgroundColor = "#02a7f0";
    pe.style.color = "#fff";
}
