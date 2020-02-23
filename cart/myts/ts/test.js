var nums = [1, 3, 3];
var numss = ["1", "2", "3"];
var n = "3";
console.log(nums[0]);
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var i = nums_1[_i];
    console.log(i);
}
for (var _a = 0, numss_1 = numss; _a < numss_1.length; _a++) {
    var i = numss_1[_a];
    if (i == n) {
        console.log("found");
    }
    else {
        console.log("notfound");
    }
    console.log(i);
}
