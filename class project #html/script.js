let cores = ["lightblue", "lightgreen", "pink", "lightyellow", "white"];
let posicao = 0;
 

function mudarCor() {
  document.body.style.backgroundColor = cores[posicao];
 
  posicao = posicao + 1;
  if (posicao == cores.length) {
    posicao = 0;  
  }
}