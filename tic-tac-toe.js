window.onload = function() {
    let grid = document.getElementById("board");
    const player_1 = "X"
    const player_2 = "O"
    let currentPlayer = player_1
    
    
    grid.childNodes.forEach(element => {
        element.className = "square"
    });

    grid.childNodes.forEach(function(grd){
        grd.addEventListener('click' , function(){
            if (grd.innerText.trim() != "")return
            grd.innerText = currentPlayer
            if(currentPlayer == player_1){
                grd.classList.add("X")
                console.log(grd)
            } else {
                grd.classList.add("O")
            }
            currentPlayer = currentPlayer == player_1 ? player_2 : player_1
           

        })
    })
  

    
}
