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
        
        var aposInicializado = function(){
            atualizaDados();
            $(".undo").on("click", undo);
            $(".remove-item").on("click" , removeItem);
        }
        $(aposInicializado);
        