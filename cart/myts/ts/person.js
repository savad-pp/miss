var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.view = function () {
        console.log(this.name, this.age, this.address);
    };
    Person.pid = 1;
    return Person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, address, rollno, marks) {
        var _this = _super.call(this, name, age, address) //for calling create parent(person) object
         || this;
        _this.roll_no = rollno;
        _this.marks = marks;
        return _this;
    }
    student.prototype.view = function () {
        console.log(this.name, this.age, this.address, this.marks, this.roll_no);
        _super.prototype.view.call(this);
    };
    return student;
}(Person));
var obj = new student("savad", "23", "pp", 11, [10, 20, 14]);
obj.view();
