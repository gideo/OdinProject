var clearUp = function(name) {
    document.getElementById(name).value = "";
}
/* Euler Project #1 */

var div3and5 = function() {
    "use strict";
    var arr = [];
    var num = document.getElementById("input1").value;
    document.getElementById("txtDiv").value = "";
    for(var i = 3; i < num; i+= 1) {
        if(i % 3 === 0 || i % 5 === 0) {
            arr.push(i);
            document.getElementById("txtDiv").value += i + "\t";
        }
    }
    answer1.innerHTML = arr.reduce( (a, b) => a + b);
}

/* Euler Project #2 */

var fibbSum = function() {
    "use strict";
    var arr = [0, 1];
    var num = document.getElementById("input2").value;
    document.getElementById("txtFib").value = "";
    for(var i = 1; arr[i-1] + arr[i] < num-1; i++) {
        arr.push(arr[i-1] + arr[i]);
        document.getElementById("txtFib").value += arr[i-1] + arr[i] + "\t\t";
    }
    answer2.innerHTML = arr.filter( (a) => a % 2 === 0).reduce( (p, v) => p + v);
}

/* Euler Project #3 */

function isPrime(num) {
    if(num === 2) { return true; }

    for(var i = 3; i <= Math.sqrt(num); i+=2) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeFactor() {
    "use strict";
    var factor, num = document.getElementById("input3").value;
    var primeArr = [2];
    document.getElementById("txtPrime").value = "";
    for(var x = 3; x < 10000; x+=2) {
        if(isPrime(x)){
            primeArr.push(x);
        }
    }

    for(var i = primeArr.length; i > 0; i--) {
        if(num % primeArr[i] === 0) {
            factor = primeArr[i];
            answer3.innerHTML = primeArr[i];
            break;
        }
    }

    for(var n = 0; primeArr[n] <= factor; n++) {
        document.getElementById("txtPrime").value += primeArr[n] + "\t";
    }
}