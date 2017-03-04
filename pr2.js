var s = 0;

$(".cell").hover(
    function () {
        console.log($(this)[0]);
        $(this)[0].style.backgroundColor = 'white';
    },
    function () {
        console.log($(this)[0]);
        $(this)[0].style.backgroundColor = 'greenyellow';
    }
)

$(document).ready(function () {
    $(".imp").on("click", function () {
        var tab = $(".Table").find("table");
        var name = $(this);
        var price = name.next();
        s += Number(price.text());
        tab.append("<tr></tr>");
        var line = tab.find("tr").last();
        line.append("<td></td>");
        var cell = line.find("td").last();
        cell.addClass("cell");
        cell.text(name.text());
        line.append("<td></td>");
        cell = line.find("td").last();
        cell.addClass("cell");
        cell.append(price.text());
    });

    $("#add").on("click", function () {
        var tab = $(".Table").find("table");
        var name = $("#Input").find("[ name = Name ]");
        var price = $("#Input").find("[ name = Price ]");
        if ((name.val() === "") || (price.val() === ""))
            alert("Пожалуйста, запоните все поля!");
        else {
            s += Number(price.val());
            tab.append("<tr></tr>");
            var line = tab.find("tr").last();
            line.append("<td></td>");
            var cell = line.find("td").last();
            cell.addClass("cell");
            cell.text(name.text());
            line.append("<td></td>");
            cell = line.find("td").last();
            cell.addClass("cell");
            cell.append(price.text());
            name.val("");
            price.val("");
        }
    })

    $("#cost").on("click", function () {
        $("#result").html("Стоимость товара: " + s);
    })

    $(".cell").hover(
        function () {
            console.log($(this)[0]);
            $(this)[0].style.backgroundColor = 'white';
        },
        function () {
            console.log($(this)[0]);
            $(this)[0].style.backgroundColor = 'greenyellow';
        }
    )
})