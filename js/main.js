 //initialize the game board on load
 initBoard()
 initCatRow()

 function initCatRow(){
  let catRow = document.getElementById('categoryRow')

  for(let i = 0; i < 6; i++){
    let box = document.createElement('div')
    box.className = 'clueBox categoryBox'
    catRow.appendChild(box)
  }
 }

 function initBoard(){
  let board = document.getElementById('clueBoard')

  // generate 5 rows then place 6 boxes each row
  for(let i = 0; i < 5; i++){
    let row = document.createElement('div')
    let boxValue = 200 * (i + 1)
    row.className = 'clueRow'

    for(let j = 0; j < 6; j++){
      let box = document.createElement('div')
      box.className = 'clueBox'
      box.textContent = '$' + boxValue
      box.addEventListener('click', getClue, false)
      row.appendChild(box)
    }

    board.appendChild(row)
  }
  function getClue(){
    console.log('yay')
  }
 }
/* document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://tasty.p.rapidapi.com/recipes/auto-complete`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

 
 */