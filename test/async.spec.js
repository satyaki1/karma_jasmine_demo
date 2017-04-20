describe("Asynchronous specs", function () {
    var value;
    beforeEach(function (done) {
        setTimeout(function () {
            value = 0;
            done();
        }, 1);
    });

    it("should support async execution of test preparation and expectations", function (done) {
        value++;
        expect(value).toBeGreaterThan(0);
        done();
    });

    xdescribe("long asynchronous specs", function () {
        var originalTimeout;
        beforeEach(function () {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL; //Default value:: 5sec.
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; // If we omit this line the spec will throw error as it contains a timeout of 9sec. Incase of that, it will consider that done() was called and continue other spec execution !
        });
        
        afterEach(function () {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });

        it("takes a long time", function (done) {
            setTimeout(function () {
                done();
            }, 9000);
        });
        
    });
});