function docLoaded(fn) {
    if(document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function Menu(name, kcal, gluten, lactose, alcohol, image) {
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.alcohol = alcohol;
    this.image = image;
    function calories() {
        return this.name + ' ' + this.kcal;
    }
}

function displayItems() {

var order1 = new Menu("Turbo Grande", "400kcal", "gluten", "laktosfri", "0", "0");
var order2 = new Menu("Gränges", "200kcal", "glutenfri", "laktosfri", "4.8", "0");
var order3 = new Menu("Il Diablo", "400kcal", "glutenfri", "laktosfri", "0", "0");
var order4 = new Menu("Glögg", "50kcal", "glutenfri", "laktosfri", "4.0", "0");
var order5 = new Menu("Macho Nacho Deluxe", "400", "gluten", "laktosfri", "0", "0");
var order = [order1, order2, order3, order4, order5];

var d = document.createElement('div');
var pa = document.createElement('p');
d.appendChild(pa);
d.setAttribute('id', 'hd');
//document.getElementById("wtf").appendChild(d);

for (i = 0; i < order.length; i++) {
    var a = document.createTextNode(order[i].name + ' ');
    var b = order[i].gluten == "gluten" ? document.createTextNode(order[i].gluten + ' ') : document.createTextNode("");
    var c = document.createTextNode(order[i].kcal + ' ');
    var e = order[i].lactose == "laktos" ? order[i].createTextNode(order[i].lactose + ' ') : document.createTextNode("");
    var f = order[i].alcohol != "0" ? document.createTextNode(order[i].alcohol + '%') : document.createTextNode("");
    var hr = document.createElement('hr');
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.setAttribute("name", "check");
    x.setAttribute("value", order[i].name);
    d.appendChild(hr);
    d.appendChild(a);
    d.appendChild(b);
    d.appendChild(c);
    d.appendChild(e);
    d.appendChild(f);
    d.appendChild(x);
    }
}

function indexPageLoaded() {
    displayItems();
}

function addToOrder(name) {
    if (document.getElementById('bestallningar') == null) {
        var table = document.createElement(table);
        table.setAttribute('id', 'bestallningar');
        var btn = document.getElementById('btn');
        var section = document.getElementById('best');
        section.insertBefore(table, btn);
        }
    var row = document.getElementById(name);
    if (row == null) createRow(name);
    else {
    document.getElementById(name + "amount").textContent++;
    }
}

function createRow(name) {

    var table = document.getElementById('bestallningar');
    var row = document.createElement("tr");
    var tdName = document.createElement("td");
    var tdAmount = document.createElement("td");
    tdAmount.setAttribute("id", name + "amount");
    var tdButton = document.createElement("td");

    var amount = 1;
    //var textName = document.createTextNode(name);
    var textAmount = document.createTextNode(amount);
    var textButton = document.createTextNode("-");
    var textName = document.createElement("INPUT");

    textName.setAttribute("name", "itemName");
    textName.setAttribute("value", name);
    textName.setAttribute("readonly", "");
    var minusButton = document.createElement('button');

    minusButton.addEventListener("click", function(){
        removeFromOrder(name);
    });
    //minusButton.setAttribute('height', '25%');
    //minusButton.setAttribute('width', 'auto');

    tdName.appendChild(textName);
    tdAmount.appendChild(textAmount);
    tdButton.appendChild(minusButton);
    minusButton.appendChild(textButton);

    table.appendChild(row);
    row.appendChild(tdName);
    row.appendChild(tdAmount);
    row.appendChild(tdButton);
    row.setAttribute('id', name);
}

function deleteRow(name) {
    var table = document.getElementById("bestallningar");
    var row = document.getElementById(name);
    table.removeChild(row);
}

function removeFromOrder(name) {
    var row = document.getElementById(name);
    if (document.getElementById(name + "amount").textContent == "1") deleteRow(name);
    else {
    document.getElementById(name + "amount").textContent--;
    }
}