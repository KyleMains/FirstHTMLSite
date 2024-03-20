let selectedColors = ['red', 'blue', 'green', 'yellow'];
let answer = null;

function alertTest(){
    if (answer != null){
        alert(answer);
    }
    else
    alert("press prompt");
}
function popupTest(){
    answer = prompt("type something");
}
function colorList(){
    for(let i = 0; i < selectedColors.length; i++){
        document.write("<br>")
        document.write(selectedColors[i]);
    }
}
