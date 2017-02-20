function doButton() {
    var v = document.getElementById("dricka").value;
    console.log(v);
    var x = document.querySelector('input[name="alktype"]:checked').value;
    console.log(x);
    var y = document.querySelector('input[id="check"]:checked');
    if (y != null) console.log(y.value);
}

var vm = new Vue({
el: '#btn',
methods: {
    onClick: doButton
}
})