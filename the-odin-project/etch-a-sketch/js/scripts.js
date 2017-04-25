$(document).ready(function(){

    createGrid(25, 25);
    draw();

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

function draw(bgcolor, opacity) {
    console.log("bgcolor is... " + bgcolor);
    var currentOpacity = opacity;
    console.log("currentOpacity is : " + currentOpacity);

    /*if (currentOpacity == 0){
        console.log("Turtle");
    } else {*/
        $(".etch-screen").on("mouseover", "div", function () {
            if ($(this).is(".box")) {
                $(this).css("background-color", "#" + bgcolor);
                var opacity = parseFloat($(this).css("opacity"));
                console.log("before opacity is " + currentOpacity);
                opacity = opacity + .25;
                console.log("after opacity is " + currentOpacity);
                $(this).css("opacity", opacity);
                console.log("");
            }
        });
    /*}*/
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

    /*draw(newHex, 0);*/
}