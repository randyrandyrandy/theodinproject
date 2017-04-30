$(document).ready(function(){
    var numbers = [0];
    var pushedNum = "";
    var result = 0;
    var operatorList = [];
    var lastNum = 0;
    var lastOperator;
    var count = 0;


    $("body").on("click", ".num", function(){

        pushedNum += $(this).text();
        $(".display").text(pushedNum);

        numbers.push(pushedNum);
        lastNum = numbers.slice(-1);
        lastOperator = operatorList.slice(-1)[0];

        // Store first number to result.
        if (operatorList.length == 0) {
            result = lastNum;
        }


        switch (lastOperator) {
            case "+":
                result = add(parseFloat(result), parseFloat(lastNum));
                break;
            case "-":
                console.log("result is " + result);
                console.log("lastNum is " + lastNum);
                result = subtract(parseFloat(result), parseFloat(lastNum));
                break;
            case "*":
                result = multiply(parseFloat(result), parseFloat(lastNum));
                break;
            case "/":
                result = divide(parseFloat(result), parseFloat(lastNum));
                break;
        }
    });

    $(".operator").on("click", function() {
        operatorList.push($(this).text());
        pushedNum = "";
        if (count > 0){
            $(".display").text(result);
        }
        count++;
    });

    $("#equal").on("click", function() {
        $(".display").text(result);
        pushedNum = "";
    });

    $("#clear").on("click", function() {
        $(".display").text(0);
        pushedNum = "";
        numbers = [0];
        result = 0;
        operatorList = [];
        count = 0;
    });
});

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function equals(numbers){
    console.log("..." + numbers);
}