// Marcar como prontos, elementos específicos ao serem clicados
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Clicar no 'X' para deletar elemento
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  // checando se input === 'ENTER'
  if(event.which === 13){
    // pegando texto para novo ToDo
    var todoText = $(this).val();
    $(this).val("");
    // criando novo li e adicionando ao ul na pagina
    $("ul").append("<li><span id='clicavel'><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

// altera icone de "+" para "-" e vice-versa
$(".fa-minus").click(function(){
  $("input[type='text']").fadeToggle("fast", function(){
    if ($(this).is(":visible")) {
        $("#trocaIcone").fadeOut(100, "swing", function(){
          $("#trocaIcone").toggleClass("fa-plus fa-minus");
          $("#trocaIcone").fadeIn(100);
        });
    } else {
        $("#trocaIcone").fadeOut(100, "swing", function(){
          $("#trocaIcone").toggleClass("fa-plus fa-minus");
          $("#trocaIcone").fadeIn(100);
        });
    }
  });
});

$("#themeBtn").on("click", function(){
  $(document.body).toggleClass("darkMode");
})
