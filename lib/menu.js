$("#contenedor").load("inicio.html");

//----- Menu -----

$("#btnAbout").click(function () {
    $("#contenedor").load("about.html");
});

$("#btnContact").click(function () {
    $("#contenedor").load("support.html", "#contact");
});

$("#accountBtn").click(function () {
    $("#contenedor").load("login.html");
});

$("#shopBtn").click(function () {
    $("#contenedor").load("cart.html");
});

$(".sMenuBox").click(function () {
    $("#contenedor").load("products.html");
});

$("#btnCarrito").click(function () {
    $("#contenedor").load("cart.html");
});

$("#btnCuenta").click(function () {
    $("#contenedor").load("login.html");
});


// ----- Menu Lateral -----
function wMatch(x) {
    if (x.matches) {
        var dropdown = document.getElementsByClassName("menuBox");
        var i;


        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                var dropContent = this.nextElementSibling;

                if (dropContent.style.display === "block") {
                    dropContent.style.display = "none";
                } else {
                    dropContent.style.display = "block";
                }
            });
        }

    }
}

const mObj = window.matchMedia("(max-width: 950px)")


wMatch(mObj);

mObj.addListener(wMatch);


// ------ Footer -----
$("#btnAboutF").click(function () {
    $("#contenedor").load("about.html");
});

$("#btnContactF").click(function () {
    $("#contenedor").load("support.html", "#contact");
});

$("#btnSupport").click(function () {
    $("#contenedor").load("support.html");
});

$("#btnFAQ").click(function () {
    $("#contenedor").load("support.html", "#faq");
});

$("#btnAccount").click(function () {
    $("#contenedor").load("account.html");
});

$("#btnCreate").click(function () {
    $("#contenedor").load("login.html");
});

$("#btnOrders").click(function () {
    $("#contenedor").load("account.html", "#orders");
});

$("#btnCart").click(function () {
    $("#contenedor").load("cart.html");
});



function showPrivacyPolicy() {
    document.getElementById("privacy").style.display = "block";
    document.getElementById("policy-shadow").style.display = "block";
}

function showReturnRefund() {
    document.getElementById("return-refund").style.display = "block";
    document.getElementById("policy-shadow").style.display = "block";
}

function showShipping() {
    document.getElementById("shipping").style.display = "block";
    document.getElementById("policy-shadow").style.display = "block";
}

function showTerms() {
    document.getElementById("terms-conditions").style.display = "block";
    document.getElementById("policy-shadow").style.display = "block";
}

function hidePolicy() {
    const collection = document.getElementsByClassName("policy");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "none";
    }

    document.getElementById("policy-shadow").style.display = "none";
}
