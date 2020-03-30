# cardOptionJs

createCards = function () {
  var valueIIBB = $("#IdCondicionIngresosBrutos").val();

  var cardsIIBB = new cardOptions("divIIBB");
  condicionesIngresosBrutosService.obtenerTodos().done(function (data) {
      cardsIIBB.create(data, {
          idData: "idCondicionIngresosBrutos",
          descriptionData: "descripcionCondicionIngresosBrutos",
          valueFor: "IdCondicionIngresosBrutos",
          showCardDefault: true,
          cardDefault: {
              id: "",
              description: "Omitir Condición Ingresos Brutos",
              value: ""
          },
          valueToSelect: valueIIBB
      });
  });

  //var devs = [{ dev: "Fede2", skill: "Gorrear" }, { dev: "Emi", skill: "Romper pantalones meneando" }, { dev: "Hector", skill: "Maxima fertilidad" }, { dev: "Amo", skill: "Dios de todos" }, { dev: "Diegui", skill: "Dev ultra instinct" }];
  //var cards = new cardOptions("desa");
  //cards.create(devs, {
  //    idData: "skill",
  //    descriptionData: "dev",
  //    valueFor: "valuefor",
  //    valueToSelect: "Maxima fertilidad"
  //});

}
