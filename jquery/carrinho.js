var atualizaDados = function(){
             var total = 0;
             var itens = $(".item-total");
             for (i = 0; i < itens.length; i++){
                var item = $(itens[i]).text();
                var valor = parseFloat(item);
                total += valor;
             }
             $("#valor-total").text(total);
             $("#quantidade-de-itens").text(itens.length);
        }
        
        var removeItem = function(event){
            event.preventDefault();
            var quantidadestr = $("#quantidade-de-itens").text();
            var atual = parseInt(quantidadestr);
            var novaquantidade = atual - 1;
            $("#quantidade-de-itens").text(novaquantidade);
            var self = $(this);
            self.closest("tr").hide();
            atualizaDados();
        }
        
        var undo = function(){
            $("tr:hidden").show();
        }
        
        var aposInicializado = function(){
            atualizaDados();
            $("#undo").on("click", undo);
            $(".remove-item").on("click" , removeItem);
        }
        $(aposInicializado);
        