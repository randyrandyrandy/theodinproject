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
    });

    $(".operator").on("click", function() {

        if (pushedNum == "") {
            pushedNum = 0;
        }
            operatorList.push($(this).text());
            numbers.push(pushedNum);
            lastNum = numbers.slice(-1);
            lastOperator = operatorList.slice(-2)[0];

            console.log("lastNum is " + lastNum);
            console.log("lastOperator is " + lastOperator);
            console.log("numbers is " + numbers);
            console.log("operatorList is " + operatorList);

            console.log(parseFloat(result) + " ... " + parseFloat(lastNum));


            switch (lastOperator) {
                case "+":
                    result = add(parseFloat(result), parseFloat(lastNum));
                    break;
                case "-":
                    if (count > 0) {
                        result = subtract(parseFloat(result), parseFloat(lastNum));
                    } else {
                        result = pushedNum;
                    }
                    break;
                case "*":
                    if (count > 0) {
                        result = multiply(parseFloat(result), parseFloat(lastNum));
                    } else {
                        result = pushedNum;
                    }
                    break;
                case "/":
                    if (count > 0) {
                        result = divide(parseFloat(result), parseFloat(lastNum));
                    } else {
                        result = pushedNum;
                    }
                    break;
            }

            console.log("result is " + result);

            console.log("");
            if (count > 0) {
                $(".display").text(result);
            };

            count++;

        pushedNum = "";
    });

    $("#equal").on("click", function() {
        numbers.push(pushedNum);
        lastNum = $(".display").text();
        lastOperator = operatorList.slice(-1)[0];

        switch (lastOperator) {
            case "+":
                if (count > 0) {
                    result = add(parseFloat(result), parseFloat(lastNum));
                    console.log("it was a plus!!");
                }
                break;
            case "-":
                if (count > 0) {
                    result = subtract(parseFloat(result), parseFloat(lastNum));
                }
                break;
            case "*":
                result = multiply(parseFloat(result), parseFloat(lastNum));
                break;
            case "/":
                result = divide(parseFloat(result), parseFloat(lastNum));
                break;
        }

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