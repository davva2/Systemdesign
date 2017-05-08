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
var totalCost = 0;
function addToOrder(name, price, tosend) {
    if (document.getElementById('bestallningar') == null) {
        var table = document.createElement(table);
        table.setAttribute('id', 'bestallningar');
        var btn = document.getElementById('btn');
        var section = document.getElementById('rows');
        section.appendChild(table);
        totalCost = 0;
        }
    var row = document.getElementById(name);
    if (row == null) createRow(name, tosend);
    else {
    document.getElementById(name + "amount").textContent++;
    }
    totalCost += price;
    console.log(totalCost);
}

function createRow(name, tosend) {

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
    var textButton2 = document.createTextNode("+");
    var textButton3 = document.createTextNode("edit");
    var textName = document.createElement("INPUT");
    if (tosend == 'yes'){
	textName.setAttribute("name", "itemName");
    }
    textName.setAttribute("value", name);
    textName.setAttribute("readonly", "");
    
    var minusButton = document.createElement('button');
    minusButton.addEventListener("click", function(){
        removeFromOrder(name);
    });

    var plusButton = document.createElement('button');
    plusButton.addEventListener("click", function(){
        addToOrder(name); // L�gger inte till kostnad
    });

     var editButton = document.createElement('button');

    tdName.appendChild(textName);
    tdAmount.appendChild(textAmount);
    tdButton.appendChild(minusButton);
    minusButton.appendChild(textButton);
    tdButton.appendChild(plusButton);
    plusButton.appendChild(textButton2);
    tdButton.appendChild(editButton);
    editButton.appendChild(textButton3);

    table.appendChild(row);
    row.appendChild(tdName);
    row.appendChild(tdAmount);
    row.appendChild(tdButton);
    row.setAttribute('id', name);
    row.setAttribute('class', 'line');
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

function goToPage(id) {
/*
    var x = document.getElementById(id);
    console.log(x.style.display);
    if (x.style.display == "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
*/
    var udiv = document.getElementsByClassName('page');
        for (var i = 0; i < udiv.length; ++i) {
            var it = udiv[i];
            it.style.display = 'none';
    }
    var idiv = document.getElementsByClassName(id);
    for (var i = 0; i < idiv.length; ++i) {
        var item = idiv[i];
        item.style.display = 'block';
    }
}