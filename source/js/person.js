var height = 0;
var Person = function () {};

Person.prototype.sayHelloWorld = function (dict) {
    return dict.hello() + " " + dict.world();
};

Person.prototype.setHeights = function (val) {
    this.height = val;
};

Person.prototype.getHeights = function () {
    return this.height;
};

var Dictionary = function () {};

Dictionary.prototype.hello = function () {
    return "hello";
};

Dictionary.prototype.world = function () {
    return "world";
};