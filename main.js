function addUser(){
    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("player1Name",player1Name);
    localStorage.setItem("player2Name",player2Name);
    window.location ="game_page.html";
}

function back(){
    window.location ="activity_1.html";
}

function getScore(){
    Score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>pontuação:" + Score + "</h1>"; 
}