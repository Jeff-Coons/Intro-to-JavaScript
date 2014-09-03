document.getElementById("update-button").onclick = function () {

    var thimbles = document.getElementById("thimbles").value;
    var swords = document.getElementById("swords").value;

    var x = Number(thimbles);
    var y = Number(swords);
    var sum = x * 1 + y * 37;
    var total = sum + "monies";

    document.getElementById("the-total").textContent = total;
};
