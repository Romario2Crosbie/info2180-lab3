window.onload = function() {
    let grid = document.getElementById("board");
    const player_1 = "X"
    const player_2 = "O"
    let currentPlayer = player_1
    let winComb = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    
    
    grid.childNodes.forEach(element => {
        element.className = "square"
    });

    grid.childNodes.forEach(function(grd){
        grd.addEventListener('click' , function(){
            if (grd.innerText.trim() != "")return
            grd.innerText = currentPlayer
            if(currentPlayer == player_1){
                grd.classList.add("X")
            } else {
                grd.classList.add("O")
            }
            currentPlayer = currentPlayer == player_1 ? player_2 : player_1
           })

        grd.addEventListener("mouseover", function handleMouseOver(){
            grd.classList.add("hover")
        })

        grd.addEventListener("mouseout" , function handleMouseOut(){
            grd.classList.remove("hover")
        }) 

        
    })
  

    
}
