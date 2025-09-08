const TURN = [1,2]
function createBoard() {
  const tiles = {}
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      const div = document.createElement('div')
      div.style.backgroundColor = 'lightblue'
      div.style.width = 'auto'
      div.style.height = 'auto'
      div.style.border = '1px solid black'
      
      const board = document.getElementById('board')

      const tile = {
        x,
        y,
        isEmpty: true,
        isCircle: false,
        isCross: false
      }
      tiles[`${x},${y}`] = tile;      
      div.addEventListener('click', () => {

        if (tile.isCircle || tile.isCross) {
          return
        }

        // Changes position of the 2 turns
        [TURN[0], TURN[1]] = [TURN[1], TURN[0]];

        if (TURN[0] === 1 && div.style.backgroundColor !== 'red') {
          div.style.backgroundColor = 'black'
          tile.isCircle = true
        } else {
          div.style.backgroundColor ='red'
          tile.isCross = true
        }
      })
      
      board.appendChild(div)
    }
  }
}

createBoard()
