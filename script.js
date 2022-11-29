
function div(){
    for(i=1;i<=16;i++){
        document.getElementById("playground").innerHTML += '<div id="box'+i+'"" class="box"></div>';
        for(j=1;j<=16;j++){
        document.getElementById('box'+i+'').innerHTML += '<div class="block" id="block"></div>';
    }
}
}

div();