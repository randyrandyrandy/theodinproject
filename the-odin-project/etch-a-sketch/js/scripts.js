$(document).ready(function(){

    createGrid(25, 25);
    draw("000000");


    $("#create-grid").on('click', function(e) {
        var row = $(".row").val();
        var col = $(".column").val();
        $('.etch-screen').empty();
        createGrid(row, col);
        hidePopup($(this).closest(".popup"));
    });

    $("#change-color").on('click', function(e) {
        changeColor();
    });

    $("#clear-btn").on('click', function(){
        var answer = confirm("Are you sure you want to clear the grid?");
        if (answer) {
            $('.etch-screen .box').css("opacity", 0);
        }
    });

    $(".row, .column").keyup(function(){
        if ($(".row").val().match(/^\d+$/) && $(".column").val().match(/^\d+$/)) {
            $("#create-grid").prop('disabled', false);
        } else {
            $("#create-grid").prop('disabled', true);
        }
    });
});

function createGrid(row, col){
    for (y=0; y<row; y++){
        $(".etch-screen").append("<div class='row-" + y + "'>");
        for (x=0;  x<col; x++) {
            $(".row-" + y).append("<div class='box box-" + x + "'></div>");
        }
    }
    var etchWidth = $(".etch-screen").width();
    var boxWidth = etchWidth / col;

    $(".box").each(function() {
        $(this).width(boxWidth).height(boxWidth);
    })
}


function draw(bgcolor, count) {
    var count = 0;

    $(".etch-screen").on("mouseover", "div", function () {
        if ($(this).is(".box")) {
            $(this).css("background-color", "#" + bgcolor);
            var opacity = parseFloat($(this).css("opacity"));
            opacity = opacity + .25;

            $(this).css("opacity", opacity);
        }
    });
}

function changeColor(){

    var hexChars = "012345679abcdef".split("");
    var newHex  = "";

    for (var i=0; i<6; i++){
        newHex += hexChars[Math.floor(Math.random() * hexChars.length)];
    }

    $(".etch-screen").on("mouseover", "div", function () {
        if ($(this).is(".box")) {
            $(this).css("background-color", "#" + newHex);
        }
    })
}