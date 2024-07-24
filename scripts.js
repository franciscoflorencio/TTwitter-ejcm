function togglePassword(index) {
  const senhaCampos = document.querySelectorAll('.password');
  const senhaCampo = senhaCampos[index];
  if (senhaCampo.type === 'password') {
    senhaCampo.type = 'text';
  } else {
    senhaCampo.type = 'password';
  }
}


function xDate(){
  const date = document.getElementById("date")

  date.type="date"
}

function changePage(){
  window.location.href="home.html";
}

function addTTweet() {
    const container = document.querySelector("section.timeline");
    const imagem = document.getElementById('btn-1').files[0];

    const input = document.getElementById("post-text");
    const textoObtido = input.value;

    if (textoObtido.length === 0 && imagem === undefined) {
        window.alert("ESCREVA ALGO!");
        return;
    }

    const publicacao = document.getElementById("template-post");
    const publicacaoPostar = publicacao.cloneNode(true);
    publicacaoPostar.removeAttribute("id");

    if (imagem !== undefined) {
        const imagemPostar = publicacaoPostar.querySelector(".post-pic");
        imagemPostar.src = URL.createObjectURL(imagem);
    } else {
        publicacaoPostar.classList.add("imageless");
        const imagemElement = publicacaoPostar.querySelector(".post-pic");
        if (imagemElement) {
            imagemElement.remove();
        }
    }

    const textoPublicar = publicacaoPostar.querySelector(".default-text");
    textoPublicar.innerHTML = textoObtido;

    container.insertAdjacentElement('afterbegin', publicacaoPostar);
}

input = "";
imagem = "";
