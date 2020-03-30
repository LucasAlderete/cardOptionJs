function setOptions (option) {
    var _options = {
        idData: null,
        descriptionData: null,
        valueFor: null,
        cssClass: {
            container: "container-options",
            card: "card-options box-effect4",
            cardSelected: "selected",
            text: "text-option"
        },
        valueToSelect: null,
        showCardDefault: false,
        cardDefault: {
            id: null,
            value: "",
            description: "",
            first: function () {
                return !(parent.last === true);
            },
            last: false
        }
    };
    return $.extend(true, _options, option);
};

function cardOptions(idContainer) {
    this.idContainer = idContainer; 
};

cardOptions.prototype.clear = function () {
    $("#" + this.idContainer).html("");
};
cardOptions.prototype.unselectAll = function () {
    var opt = this.options;
    //saco el seleccionado de todas las cards
    $(this.selector).removeClass(opt.cssClass.cardSelected); //selector esta definido en "create()"
    //seteo en "" el valor seleccionado
    $("#" + opt.valueFor).val("");
};
cardOptions.prototype.create = function (dataArray, options) {
    this.options = setOptions(options);
    var opt = this.options;
    this.selector = "#" + this.idContainer + "." + opt.cssClass.container + " ." + opt.cssClass.card.split(" ").join(".");
    this.dataArray = dataArray;
    var idContainer = this.idContainer;

    var ctrlContainer = $("#" + idContainer);
    ctrlContainer.addClass(opt.cssClass.container);

    //vacia container
    this.clear();
    
    //setea card default
    var cardDefault, textDefault, context = this;
    if (opt.showCardDefault === true) {
        //creo un card por default sin valores
        cardDefault = $("<div>").addClass(opt.cssClass.card);
        cardDefault.attr("data-id", opt.cardDefault.id);
        cardDefault.attr("data-descripcion", opt.cardDefault.description);
        textDefault = "";
        textDefault = $("<div>").addClass(opt.cssClass.text);
        textDefault.html(opt.cardDefault.description);
        cardDefault.append(textDefault);
        cardDefault.click(function () {
            context.unselectAll();
            //agrego clase al color seleccionado
            $(this).addClass(opt.cssClass.cardSelected);
            //seleteo el valor seleccionado al control
            $("#" + opt.valueFor).val(this.dataset.id);
        });

    }

    //si tengo un default y lo muestro al principio se hace aca:
    if (opt.showCardDefault === true && opt.cardDefault.first() === true) {
        ctrlContainer.append(cardDefault);
    }
    for (idx in dataArray) {
        var data = dataArray[idx],
            id = data[opt.idData],
            description = data[opt.descriptionData];

        var card = $("<div>").addClass(opt.cssClass.card);
        card.attr("data-id", id);
        card.attr("data-descripcion", description);
        var text = "";
        text = $("<div>").addClass(opt.cssClass.text);
        text.html(description);
        card.append(text);
        
        card.click(function (){
            context.unselectAll();
            //agrego clase al color seleccionado
            $(this).addClass(opt.cssClass.cardSelected);
            //seleteo el valor seleccionado al control
            $("#" + opt.valueFor).val(this.dataset.id);
        });

        card.append(text);
        ctrlContainer.append(card);

    }

    //si tengo que poner el card default al final lo hago aca:
    if (opt.showCardDefault === true && opt.cardDefault.last === true) {
        ctrlContainer.append(cardDefault);
    }

    if (opt.valueToSelect !== null) {
        $(context.selector + "[data-id='" + opt.valueToSelect + "']").click();
    }

};