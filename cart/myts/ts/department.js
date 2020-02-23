var Department = /** @class */ (function () {
    function Department() {
        this.detcode = "CS10";
        this.name = "CSE";
        this.no_of_employee = 10;
    }
    Department.prototype.showData = function () {
        console.log("CODE==", this.detcode);
        console.log("NAME==", this.name);
        console.log("NO EMP==", this.no_of_employee);
    };
    return Department;
}());
var d = new Department();
console.log(d.name);
d.showData();
