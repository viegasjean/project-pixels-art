const body = document.querySelector('body') // Seleciona body

// Cria e Adiciona Title
const title =  document.createElement('h1')
title.innerText = 'Paleta de Cores'
title.id = 'title'
body.appendChild(title);

// Cria e Adiciona Sessão Paleta
const pallete = document.createElement('section')
pallete.id = 'color-palette'
body.appendChild(pallete)

//Cria botão limpar
const clearBoard =  document.createElement('button')
clearBoard.id = 'clear-board'
clearBoard.innerText = 'Limpar'
clearBoard.addEventListener('click', paintWhite)
body.appendChild(clearBoard)

// Cria e Adiciona Sessão Quadro de Pixels
const pixelBoard = document.createElement('section');
pixelBoard.id = 'pixel-board'
body.appendChild(pixelBoard)



const n = 5; // Tamanho do Quadro de Pixels
const colors = ["black", 'red', 'orange', 'pink'] // Define cores da Paleta
let selectedColor = colors[0] // cor inicial

// Prennche Paleta
function fillPalette(){
  for(let color of colors){
    const palleteColor = document.createElement('span')
    palleteColor.className = 'color'
    palleteColor.addEventListener('click', selectColor)
    palleteColor.style.backgroundColor = color;
    pallete.appendChild(palleteColor)
  }
  pallete.firstChild.className = 'color selected'
}
fillPalette()

// Seleciona cor
function selectColor(e){
  selectedColor = e.target.style.backgroundColor;
  const palleteColors = document.querySelector(".selected")
  palleteColors.className = 'color'
  e.target.className = 'color selected'
}

// Cria pixel
function createPixel(){
  const pixel = document.createElement('span');
  pixel.className = 'pixel'
  pixel.addEventListener('click', paintColor)
  return pixel
}

function paintColor(e){
  e.target.style.backgroundColor = selectedColor
}

// Cria linha
function createLine(){
  const pixelLine = document.createElement('div')
  pixelLine.className = 'line'
  return pixelLine
}

// insere linha
for(let i = 1; i <= n; i += 1){
  pixelBoard.appendChild(createLine())
}

// insere pixel na linha
function insertPixel(){
  
  const lines = document.querySelectorAll('.line')
  for(let line of lines){
    for(let i = 1; i <= n; i += 1){
      line.appendChild(createPixel())
    }
  }
}
insertPixel()

function paintWhite(){
  const pixels = document.querySelectorAll('.pixel')
  for (let pixel of pixels){
    pixel.style.backgroundColor = 'white'
  }
}
