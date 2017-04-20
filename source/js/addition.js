var Calculator = {
    currentVal: 0,

    add: function (num1) {
        this.currentVal += num1;
        return this.currentVal;
    },

    addAny: function () {
        this.currentVal = 0;
        var sum = this.currentVal;

        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }

        this.currentVal = sum;
        return this.currentVal;
    }
}