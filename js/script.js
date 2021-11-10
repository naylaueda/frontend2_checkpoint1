
let btnCard = document.getElementById("btnCard");
btnCard.addEventListener("click", () => {
    let inPersonagem = document.getElementById("inPersonagem").value;
    let inEspecie = document.getElementById("inEspecie").value;
    let inPlaneta = document.getElementById("inPlaneta").value;
    let inImagem = document.getElementById("inImagem").value;
    let card = document.getElementById("card");
    let assistiu = document.querySelector('input[type=\'checkbox\']')
    let filmes = document.querySelectorAll('input[type=\'radio\']')

    if (inPersonagem == "") {
        alert("Perai, esqueceu de colocar o nome...")
    }
    else if (inEspecie == "") {
        alert("Humano! Faça a coisa certa")
    }
    else if (inPlaneta == "") {
        alert("Em que planeta você está?")
    }
    else if (inImagem == "") {
        alert("Cadê a  imagem?")
    }
    else {
        let img = document.createElement("img");
        img.setAttribute("src", inImagem);
        img.setAttribute("id", "imagem");
        card.appendChild(img);

        let filme;
        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].checked) {
                filme = filmes[i].value;
                break;
            }
        }

        let assitiuResposta;
        assistiu.checked ? assitiuResposta = 'Sim' : assitiuResposta = 'Não';

        let h3 = document.createElement("h3");
        h3.setAttribute("id", "frase")
        h3.innerText = `Personagem: ${inPersonagem[0].toUpperCase()+inPersonagem.substr(1)}
        Espécie: ${inEspecie[0].toUpperCase()+inEspecie.substr(1)} 
        Planeta natal: ${inPlaneta[0].toUpperCase()+inPlaneta.substr(1)} 
        Imagem do filme: ${filme} 
        Já assistiu o filme? ${assitiuResposta}`
        card.appendChild(h3);

    }
})

let btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", () => {
    location.reload();
})

