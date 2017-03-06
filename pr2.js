var s = 0;

$(document).ready(function () {
    $(".imp").on("click", function () {
        var tab = $(".Table").find("table");
        var name = $(this);
        var price = name.next();
        s += Number(price.text());
        tab.append(
            $("<tr/>")
                .append(
                    $("<td/>")
                        .addClass("cell")
                        .text(name.text())
                )
                .append(
                    $("<td/>")
                        .addClass("cell")
                        .append(price.text())
                )
        );
        $(".cell").bind("mouseover", function () {
            this.style.backgroundColor = 'white';
        })
            .bind("mouseout", function () {
                this.style.backgroundColor = 'greenyellow';
            })
    });

    $("#add").on("click", function () {
        var tab = $(".Table").find("table");
        var name = $("#Input").find("[ name = Name ]");
        var price = $("#Input").find("[ name = Price ]");
        if ((name.val() === "") || (price.val() === ""))
            alert("Пожалуйста, запоните все поля!");
        else {
            s += Number(price.val());
            tab.append(
                $("<tr/>")
                    .append(
                        $("<td/>")
                            .addClass("cell")
                            .text(name.val())
                    )
                    .append(
                        $("<td/>")
                            .addClass("cell")
                            .append(price.val())
                    )
            )
            $(".cell").bind("mouseover", function () {
                this.style.backgroundColor = 'white';
            })
                .bind("mouseout", function () {
                    this.style.backgroundColor = 'greenyellow';
                })
            name.val("");
            price.val("");
        }
    })

    $("#cost").on("click", function () {
        $("#result").html("Стоимость товара: " + s);
    })
})