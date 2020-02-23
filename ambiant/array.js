var l2 = [11, 22, 33, 44].map(function (x) {
    return x;
});
console.log("l2", l2);
var l3 = [11, 22, 33, 44].filter(function (x) {
    return x;
});
console.log("l3", l3);
var l4 = [11, 22, 33, 44].join(("-"));
console.log("l4", l4, typeof (l4));
function add(a, b) {
    return a + b;
}
console.log(add("Hello ", "Steve")); // returns "Hello Steve" 
console.log(add(10, 20));
