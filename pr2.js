var s = 0;

function Add()
{
    var tab = $("#Table").find("table");
    var name = $("#Input").find("[ name = Name ]");
    var price = $("#Input").find("[ name = Price ]");
    if ((name.val() === "") || (price.val() === ""))
        alert("Пожалуйста, запоните все поля!");
    else {
        s += Number(price.val());
        tab.append("<tr><td onmouseover='Over(this)' onmouseout='Out(this)'>" + name.val() +
            "</td><td onmouseover='Over(this)' onmouseout='Out(this)'>" + price.val() + "</td></tr>");
        name.val("");
        price.val("");
    }
}

function Cost()
{
    $("#result").html("Стоимость товара: " + s);
}

function Over(cell)
{
    cell.style.backgroundColor = 'white';
}

function Out(cell) {
    cell.style.backgroundColor = 'greenyellow';
}

$(document).ready(function () {
    $(".imp").on("click", function () {
        var tab = $("#Table").find("table");
        var name = $(this);
        var price = name.next();
        s += Number(price.text());
        tab.append("<tr><td onmouseover='Over(this)' onmouseout='Out(this)'>" + name.text() +
            "</td><td onmouseover='Over(this)' onmouseout='Out(this)'>" + price.text() + "</td></tr>");
    })
})