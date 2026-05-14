$(document).ready(function () {
  $("#tituloHero").hide();

  $("#tituloHero").fadeIn(2000);
});

$(".filtro").click(function () {
  let categoria = $(this).data("categoria");

  if (categoria == "todos") {
    $(".destino").show();
  } else {
    $(".destino").hide();

    $("." + categoria).show();
  }
});

$("#formulario").submit(function (e) {
  e.preventDefault();

  let nombre = $("#nombre").val();
  let email = $("#email").val();
  let mensaje = $("#mensaje").val();

  if (nombre == "" || email == "" || mensaje == "") {
    alert("Completar todos los campos");

    return;
  }

  $("#spinner").removeClass("d-none");

  setTimeout(function () {
    $("#spinner").addClass("d-none");

    let modal = new bootstrap.Modal(document.getElementById("modalExito"));

    modal.show();

    $("#formulario")[0].reset();
  }, 2000);
});
