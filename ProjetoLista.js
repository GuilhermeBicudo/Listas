// Function Buscar Lista
function BuscarLista() {
    // Ouvinte do input e da função res
    const listas = document.getElementById("txlista").value;
    const res = document.getElementById("res");

    // Array listas
    listasAescolha = ["Games", "Músicas", "Livros"];
    // Passando valores para as listas no array
    listasAescolha[0] = ["GTA-V", "MINECRAFT", "CS.GO", "VALORANT"];
    listasAescolha[1] = ["We Built This City-Starship", "Será-Legião Urbana", "Vamos Fugir-Skank"];
    listasAescolha[2] = ["Auto-desenvolvimento", "Literatura", "Romance", "Terror"];
    // Lógica do algoritmo. Usado estrutura de condições aninhadas
    if (listas == [0]) {
        res.innerHTML = `Lista de games:<br>`
        res.innerText += `${listasAescolha[0].join("\n")}`;
        res.style.color = `red`;
    } else if (listas == [1]) {
        res.innerHTML = `Lista de livros:<br>`;
        res.innerText += `${listasAescolha[2].join("\n")}`;
        res.style.color = `purple`;
    } else if (listas == [2]) {
        res.innerHTML = `Lista de música:<br>`;
        res.innerText += `${listasAescolha[1].join("\n")}`
        res.style.color = `rgb(242, 111, 17)`;
    } else {
        res.innerText = `Escolha os índices corretos para entrar em alguma lista!`;
        res.style.color = `darkblue`;
    }
}
// Ouvinte do button (resetar)
function Resetar() {
    const res = document.querySelector("div#res");
    res.innerText = "";
}

