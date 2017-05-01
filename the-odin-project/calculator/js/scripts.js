$(document).ready(function(){

    var numbers = [0],
         pushedNum = "",
         result = 0,
         operatorList = [],
         lastNum = 0,
         lastOperator,
         isExpression = false;

    console.log("not the init.");

    // Displays clicked numbers in display area.
    $("body").on("click", ".num", function(){
        pushedNum += $(this).text();
        $(".display").text(pushedNum);
    });

    $(".operator").on("click", function() {

        /* Cannot make pushedNum 0 as that would display a 0 in the display area.
        This prevents calculator from breaking if an operator is clicked before any operands are clicked.
        */
        if (pushedNum == "") {
            pushedNum = 0;
        }

        operatorList.push($(this).text());
        numbers.push(pushedNum);
        lastNum = numbers.slice(-1);
        lastOperator = operatorList.slice(-2)[0];

        switch (lastOperator) {
            case "+":
                // Forces calculation to wait until two operands are clicked. Otherwise, the operator would run on one operand which would provide incorrect results.
                isExpression ? result = add(parseFloat(result), parseFloat(lastNum)) : result = pushedNum;
                break;
            case "-":
                isExpression ? result = subtract(parseFloat(result), parseFloat(lastNum)) : result = pushedNum;
                break;
            case "*":
                isExpression ? result = multiply(parseFloat(result), parseFloat(lastNum)) : result = pushedNum;
                break;
            case "/":
                isExpression ? result = divide(parseFloat(result), parseFloat(lastNum)) : result = pushedNum;
                break;
        }

        $(".display").text(Math.round(parseFloat(result) * 100000) / 100000); // Round to nearest .00000th place

        isExpression = true;
        pushedNum = "";
    });

    $("#equal").on("click", function() {
        numbers.push(pushedNum);
        lastNum = $(".display").text();
        lastOperator = operatorList.slice(-1)[0]; // Pull last operator in the operatorList array

        if (lastOperator) {
            switch (lastOperator) {
                case "+":
                    // Forces calculation to wait until two operands are clicked. Otherwise, the operator would run on one operand which would provide incorrect results.
                    isExpression ? result = add(parseFloat(result), parseFloat(lastNum)) : result = pushedNum;
                    break;
                case "-":
                    // Forces calculation to wait until two operands are clicked. Otherwise, the operator would run on one operand which would provide incorrect results.
                    isExpression ? result = subtract(parseFloat(result), parseFloat(lastNum)) : result = pushedNum;
                    break;
                case "*":
                    // Forces calculation to wait until two operands are clicked. Otherwise, the operator would run on one operand which would provide incorrect results.
                    isExpression ? result = multiply(parseFloat(result), parseFloat(lastNum)) : result = pushedNum;
                    break;
                case "/":
                    // Forces calculation to wait until two operands are clicked. Otherwise, the operator would run on one operand which would provide incorrect results.
                    isExpression ? result = divide(parseFloat(result), parseFloat(lastNum)) : result = pushedNum;
                    break;
                case "=":
                    break;
            }

            $(".display").text(Math.round(parseFloat(result) * 100000) / 100000); // Round to nearest .00000th place
            pushedNum = "";
        }
    });

    $("#clear").on("click", function() {
        clear();
        console.log("result is " + result);
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
    function clear(){
        $(".display").text(0);
        numbers = [0];
        pushedNum = "";
        result = 0;
        operatorList = [];
        lastNum = 0;
        lastOperator = "";
        isExpression = false;
        console.log("is this running?");
    }

});
