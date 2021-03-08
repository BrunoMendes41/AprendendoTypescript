"use strict";
var n1 = document.querySelector("#n1");
var n2 = document.querySelector("#n2");
var btn = document.querySelector("#btnSum");
function sum(a, b) {
    return a + b;
}
btn.addEventListener("click", function (event) {
    var res = sum(Number(n1.value), Number(n2.value));
    console.log(res);
});
