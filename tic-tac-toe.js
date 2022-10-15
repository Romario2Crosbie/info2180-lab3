window.onload = function() {
    let grid = document.getElementById("board");
    let stat = document.getElementById("status")
    const player_1 = "X"
    const player_2 = "O"
    let currentPlayer = player_1

    let winComb = [
        [1,3,5],
        [7,9,11],
        [13,14,17],
        [1,7,13],
        [3,9,15],
        [5,11,17],
        [1,9,17],
        [5,9,13]
    ]
    function playerWon(){
        for (const condition of winComb){
            let [a,b,c] = condition
            if (NodeList[a] && (NodeList[a] == NodeList[b] && NodeList[a] == NodeList[c])) {
                return [a,b,c]
            }
            
        }
        return false
        
    

    }
    console.log(playerWon())

    
    
    grid.childNodes.forEach(element => {
        element.className = "square"
    });
    if (playerWon() !==false){
        
    }
    console.log(grid.childNodes)

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

            if (playerWon() !==false){
                stat = '{$currentPlayer} has won'
                console.log(playerWon())
            }
           })

        grd.addEventListener("mouseover", function handleMouseOver(){
            grd.classList.add("hover")
        })

        grd.addEventListener("mouseout" , function handleMouseOut(){
            grd.classList.remove("hover")
        }) 

        /*function playerWon(){
            for (const condition of winComb){
                let [a,b,c] = condition
                if (grid.childNodes.item(a) && (grid.childNodes.item(a) == grid.childNodes.item(b) && grid.childNodes.item(a) == grid.childNodes.item(c))) {
                    return [a,b,c]
                }
            }
            return false
        }*/

        
    })
  

    
}
