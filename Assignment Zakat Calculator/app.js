function calculateZakat() {

    var money = parseFloat(document.getElementById("cashInput").value);
    var gold = parseFloat(document.getElementById("goldInput").value);
    var silver = parseFloat(document.getElementById("silverInput").value);
    var money;

    gold = gold * 681.75 * 283.75;
    silver = silver * 2470;

    var money = money + silver + gold;
    var zakat = money / 40;
    zakat = zakat.toFixed(2)
    document.getElementById("final").innerHTML = "Your Zakat is :" + zakat + "Rs";

}
