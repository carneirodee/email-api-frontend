var bar = document.getElementById("barra");

document.getElementById("cor1").addEventListener('click', function(e){
   bar.style.backgroundColor = "tomato";
   document.body.style.backgroundColor ="#ffe2dd";
   localStorage.setItem("background",  "#ffe2dd");
   localStorage.setItem("barra", "tomato")
});

document.getElementById("cor2").addEventListener('click', function(e){
    bar.style.backgroundColor = "orange";
    document.body.style.backgroundColor ="#ffeed0";
    localStorage.setItem("background",  "#ffeed0");
    localStorage.setItem("barra", "orange")
});

document.getElementById("cor3").addEventListener('click', function(e){
    bar.style.backgroundColor = "dodgerblue";
    document.body.style.backgroundColor ="#d6eaff";
    localStorage.setItem("background",  "#d6eaff");
    localStorage.setItem("barra", "dodgerblue")
});

document.getElementById("cor4").addEventListener('click', function(e){
    bar.style.backgroundColor= "mediumseagreen";
    document.body.style.backgroundColor ="#dbf1e5";
    localStorage.setItem("background",  "#dbf1e5");
    localStorage.setItem("barra", "mediumseagreen")
});

document.getElementById("cor5").addEventListener('click', function(e){
    bar.style.backgroundColor = "gray";
    document.body.style.backgroundColor ="Gainsboro";
    localStorage.setItem("background",  "Gainsboro");
    localStorage.setItem("barra", "gray")
});

document.getElementById("cor6").addEventListener('click', function(e){
    bar.style.backgroundColor = "slateblue";
    document.body.style.backgroundColor ="#e3e1f5";
    localStorage.setItem("background",  "#e3e1f5");
    localStorage.setItem("barra", "slateblue")
});

document.getElementById("cor7").addEventListener('click', function(e){
    bar.style.backgroundColor = "violet";
    document.body.style.backgroundColor ="#fbe8fb";
    localStorage.setItem("background",  "#fbe8fb");
    localStorage.setItem("barra", "violet")
});

document.getElementById("cor8").addEventListener('click', function(e){
    bar.style.backgroundColor = "lightgray";
    document.body.style.backgroundColor ="#f7f7f7";
    localStorage.setItem("background",  "#f7f7f7");
    localStorage.setItem("barra", "lightgray")
});



