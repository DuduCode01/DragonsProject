// Aqui vamos pegar o elemento HTML dos botões//

const buttonscarrosel = document.querySelectorAll(".botao");//Pega todos os botoes que tem a classe "Button". E o "const" indica que a var é constante (Não pode ser alterada).//
const imagens = document.querySelectorAll(".imagem");
const informations = document.querySelectorAll(".informations")


buttonscarrosel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // "ForEach" significa: "Para cada" que é basicamente adicionar o clique para todos os botoes.//
        desativarBotaoSelecionado();

        marcarBotaoSelecionado(botao); // Nesses dois, basicamente removeu a classe "selecionado" do botao que o User clicar. E logo depois adicionado a classe "selecionado" novamente do outro botao que o User clicar.//

        esconderAImagem(); //Aqui é parecido com antes, só que está indo na classe da imagem "ativa" onde aparece o dragão e estamos escondendo ela, quando o usuário clicar no botão.//

        imagens[indice].classList.add("ativa"); // Descobrimos por meio do "indice"(O indíce nos indica a posição que estamos clicando no momento), a numerção de cada elemento das imagens.Com isso adicionamos a classe "ativa" para os botões dos dragões respectivos.//

        esconderAsInformacoesAtivas(); // Pegamos a classe de "Active informations" e colocamos para selecionar ao clicar nos botões. Também irá remover a classe "active" da respectiva imagem, assim, tirando as informções do dragão.//

        MostrarAsInformacoesDoDragãoRespectivo(indice);

    });
});


function esconderAImagem() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function MostrarAsInformacoesDoDragãoRespectivo(indice) {
    informations[indice].classList.add("active");
}

function esconderAsInformacoesAtivas() {
    const activeInformations = document.querySelector(".active.informations");
    activeInformations.classList.remove("active");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

