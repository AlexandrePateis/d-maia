var contadorCliques = 0; // variável de controle
function moverBotao() {
    var botao = document.getElementById("botao");
    var div = document.getElementsByClassName("botao-div")[0].getBoundingClientRect();
  
    botao.style.position = "absolute";
    botao.style.top = Math.floor(Math.random() * (div.bottom - div.top - botao.clientHeight)) + div.top + "px";
    botao.style.left = Math.floor(Math.random() * (div.right - div.left - botao.clientWidth)) + div.left + "px";
    if (contadorCliques === 1) {
        contadorCliques++;
      } else {
        botao.innerText = "É aqui ó!!!";
         // Adicionar evento de clique para a transição suave para a próxima página
         botao.onclick = function() {
            $(botao).fadeOut(1000); // Esconde o botão em 1 segundo
            document.querySelector('.hearder').style.display = 'none';
            document.querySelector('.init-game').style.display = 'none';
            document.querySelector('.animation-text').style.display = 'none';
            document.querySelector('.botao-div').style.display = 'none';
            document.querySelector('#perguntas').style.display = 'block';
      }
  }
  
}
function selecionarAluna(id, perguntaAtual, proximaPergunta) {
    // Altera a cor do botão clicado para verde
    var botao = document.getElementById(id);
    botao.classList.remove('btn-warning');
    botao.classList.add('btn-success');
    document.querySelector('#acerto').classList.remove('d-none');
    setTimeout(() => {
        // Oculta a pergunta atual
        document.querySelector(perguntaAtual).classList.add('d-none');
        // Mostra a próxima pergunta
        document.querySelector(proximaPergunta).classList.remove('d-none');
    }, 2000);
}

var clickCount = 0;
var buttonNames = ["Vamos lá, você consegue", "Não vai desistir tão fácil né?", "Sou o último botão", "Ala, acreditou kkk", "Agora é sério"];

function moveButton5times() {
    var button = document.getElementById("botao-final");
    var div = document.getElementById("outra-pergunta");
  
    clickCount++;
  
    if (clickCount <= 5) {
      var buttonWidth = button.offsetWidth;
      var buttonHeight = button.offsetHeight;
      var divWidth = div.offsetWidth;
      var divHeight = div.offsetHeight;
      var xPos = Math.floor(Math.random() * (divWidth - buttonWidth));
      var yPos = Math.floor(Math.random() * (divHeight - buttonHeight));
      button.style.transform = "translate(" + xPos + "px, " + yPos + "px)";
      button.innerText = buttonNames[clickCount - 1];
    } else {
      document.getElementById("outra-pergunta").classList.add('d-none');
      document.getElementById("ultima-div").classList.remove('d-none');
    }
  }
  



