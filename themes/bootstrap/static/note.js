var floatRight = function(){
    var elements = document.getElementsByTagName('r');
    for(var i = 0; i < elements.length; i++){
        elements[i].innerHTML = '<span class="block margin-div-outer"> <span class="block margin-div-inner">' + elements[i].innerHTML + '</span></span>';
    }
};

var mathReplace = function(){
    var elements = document.getElementsByTagName('m');
    for(var i = 0; i < elements.length; i++){
        var s = document.createElement("script");
        s.type = "math/tex";
        s.innerHTML = elements[i].innerHTML;
        elements[i].innerHTML = "";
        elements[i].style.fontSize = "150%";
        elements[i].appendChild(s);
    }
};

floatRight();
mathReplace();
