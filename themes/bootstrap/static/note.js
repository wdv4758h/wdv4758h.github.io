var floatRight = function(){
    var elements = document.getElementsByTagName('r');
    for(var i = 0; i < elements.length; i++){
        elements[i].innerHTML = '<span class="margin-note-marker"><sup>' +
            (i+1) + '</sup></span>' +
            '<span class="block margin-div-outer"> <span class="block margin-div-inner"><span class="margin-note-marker">' +
            (i+1) + '</span>' + elements[i].innerHTML + '</span></span>';
    }
};

var labelLeft = function(){
    var elements = document.getElementsByTagName('l');
    for(var i = 0; i < elements.length; i++){
        elements[i].innerHTML = '<div class="label-anchor"><a class="label-anchor"><span>' + elements[i].innerHTML + ' »</span></a><div>';
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

var headerlink = function(){
    var elements = document.getElementsByTagName('h2');
    for(var i = 0; i < elements.length; i++){
        var link = document.createElement("a");
        link.innerText = '¶';
        link.className = 'headerlink';
        link.href = '#' + elements[i].innerText.replace(/ /g, '-');
        elements[i].id = elements[i].innerText.replace(/ /g, '-');
        elements[i].appendChild(link);
    }
};

var colorBlock = function(tag, name){
    var elements = document.getElementsByTagName(tag);
    for(var i = 0; i < elements.length; i++){
        elements[i].parentElement.nextElementSibling.className = name;
        elements[i].parentElement.remove();
    }
}

var indent = function(){
    var elements = document.getElementsByClassName('indent')[0].childNodes;
    var tmp = 'h1';
    for(var i = 0; i < elements.length; i++){
        if(elements[i].tagName == 'H2')
            tmp = 'h2';
        else if(elements[i].tagName == 'H3')
            tmp = 'h3';
        else if(elements[i].tagName == 'H4')
            tmp = 'h4';
        else
            elements[i].className += ' ' + tmp;
    }
}

floatRight();
labelLeft();
headerlink();
mathReplace();
indent();
//colorBlock('def', 'def-block');
