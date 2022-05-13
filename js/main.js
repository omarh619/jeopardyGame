 //initialize the game board on load
 initBoard()
 initCatRow()

 document.querySelector('button').addEventListener('click', buildCategories)


 function initCatRow(){
  let catRow = document.getElementById('categoryRow')

  for(let i = 0; i < 6; i++){
    let box = document.createElement('div')
    box.className = 'clueBox categoryBox'
    catRow.appendChild(box)
  }
 }
//create clue board

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
  
 }
 //call api
 function randInt(){
   return Math.floor(Math.random() * (18418) + 1)
 }

 let catArray = []

 function buildCategories(){
   const fetchReq1 = fetch(
     `http://jservice.io/api/category?&id=${randInt()}`
   ).then((res)=> res.json());
  
   const fetchReq2 = fetch(
    `http://jservice.io/api/category?&id=${randInt()}`
  ).then((res)=> res.json());

  const fetchReq3 = fetch(
    `http://jservice.io/api/category?&id=${randInt()}`
  ).then((res)=> res.json());

  const fetchReq4 = fetch(
    `http://jservice.io/api/category?&id=${randInt()}`
  ).then((res)=> res.json());

  const fetchReq5 = fetch(
    `http://jservice.io/api/category?&id=${randInt()}`
  ).then((res)=> res.json());

  const fetchReq6 = fetch(
    `http://jservice.io/api/category?&id=${randInt()}`
  ).then((res)=> res.json());

  const allData = Promise.all([fetchReq1, fetchReq2, fetchReq3, fetchReq4, fetchReq5, fetchReq6])
  allData.then((res)=> {
    console.log(res)
    catArray = res
    setCatagories(catArray)
  })
 }
//load categories to the board
 function setCatagories(catArray){
  let element = document.getElementById('categoryRow')
    let children = element.children;
    for(let i = 0; i < children.length; i++){
      children[i].innerHTML = catArray[i].title
    }
 }

 function getClue(event){
   let child = event.currentTarget
   child.classList.add('clickedBOX')
   let boxValue = child.innerHTML.slice(1)
   let parent = child.parentNode
   let index = Array.prototype.findIndex.call(parent.children, (c)=> c === child)
   let cluesList = catArray[index].clues
   let clue = cluesList.find(obj => {
     return obj.value == boxValue
   })
   console.log(clue)
 }


