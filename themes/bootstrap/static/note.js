var floatRight = function(){
    var elements = document.getElementsByTagName('r');
    for(var i = 0; i < elements.length; i++){
        elements[i].innerHTML = '<span class="block margin-div-outer"> <span class="block margin-div-inner">' + elements[i].innerHTML + '</span></span>';
    }
};
floatRight()
