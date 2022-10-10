window.onload = function() {
    let grid = document.getElementById("board");
    console.log(grid.childNodes);
    grid.childNodes.forEach(element => {
        element.className = "square";
    });
        
    const O_TEXT = "O"
    const X_TEXT = "X"

    const startGame = () => {
        grid.childNodes.forEach(grd => grd.addEventListener('click', boxClicked))
    }

    function boxClicked(e){
        console.log(e.target)
    }

    startGame()

    
}
