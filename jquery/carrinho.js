var umaPropaganda = function(){
    var propagandas = ["O que acha de comprar uma motocicleta?",
               "O que acha de comprar uma lancha?",
               "O que acha de comprar uma bicicleta?",
               "O que acha de comprar uma carro?"
               ];
    var posicao = Math.floor(propagandas.length * Math.random());
    var texto = propagandas[posicao];
    var tr = $("<tr>").addClass("propaganda td").append($("<td>"));
    tr.find("td").attr("colspan" , 6).text(texto);
    return tr;
}

var atualizaDados = function(){
     var carrinhos = $(".carrinho");
     carrinhos.each(function(){
         var carrinho = $(this);
         var total = 0;
         var itens = carrinho.find(".item-total:visible");
         for (i = 0; i < itens.length; i++){
            var item = $(itens[i]).text();
            var valor = parseFloat(item);
            total += valor;     
         }
         carrinho.find(".valor-total").text(total);
         carrinho.find(".quantidade-de-itens").text(itens.length);
     });
}

var removeItem = function(event){
    event.preventDefault();
    var quantidadestr = $(".quantidade-de-itens").text();
    var atual = parseInt(quantidadestr);
    var novaquantidade = atual - 1;
    $(".quantidade-de-itens").text(novaquantidade);
    var self = $(this);
    self.closest("tr").hide();
    atualizaDados();
}

var undo = function(){
    var carrinho = $(this).closest(".carrinho");
    carrinho.find("tr:visible").removeClass("recuperado");
    carrinho.find("tr:hidden").show().addClass("recuperado");
    atualizaDados();
}

var daDestaque = function() {
    $(this).addClass("hovering");
}
var tiraDestaque = function() {
    $(this).removeClass("hovering");
}

var escondePropagandas = function() {
    $(".propaganda").fadeOut();
    event.preventDefault();
}
var mostraPropagandas = function() {
    $(".propaganda").fadeIn();
    event.preventDefault();
}

var aposInicializado = function(){
    $("#esconde-propagandas").on("click", escondePropagandas);
    $("#mostra-propagandas").on("click", mostraPropagandas);
    
    atualizaDados();
    $("tbody tr").hover(daDestaque, tiraDestaque);
    $(".undo").on("click", undo);
    $(".remove-item").on("click" , removeItem);
    $(".carrinho").each(function(){
        $(this).find("tr:nth-child(3n),tr:last").each(function(){
            umaPropaganda().insertAfter($(this));
        });
    });
}
$(aposInicializado);
