let carrinho = [];
let total = 0;

function adicionar(nome, preco){

    carrinho.push({
        nome,
        preco
    });

    total += preco;

    atualizar();
}

function atualizar(){

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    carrinho.forEach(item => {

        lista.innerHTML += `
        <li>
        ${item.nome} - R$ ${item.preco}
        </li>
        `;

    });

    document.getElementById("total")
    .innerText = total.toFixed(2);
}

function enviarWhats(){

    let texto = "Pedido Distribuidora Resenha's%0A";

    carrinho.forEach(item => {
        texto += `${item.nome}%0A`;
    });

    texto += `%0ATotal: R$ ${total}`;

    window.open(
    `https://wa.me/5543999999999?text=${texto}`
    );
}