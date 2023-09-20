score = 0;
function updateScore(){
    score = score + 1;
    document.getElementById("score").innerHTML = "pontuação:" + score;
}

function saveScore(){
    localStorage.setItem("score",score);
}

function nextPage(){
    window.Location = "activity_2.html";
}