describe("A spec (with setup and tear-down)", function () {
    var foo;

    beforeEach(function () {
        foo = 0;
        foo += 1;
    });

    afterEach(function () {
        foo = 0;
    });

    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(foo).not.toEqual(2);
    });
});
// Disable a suit using 'x' before describe and it
describe("A spec", function () {
    var foo;

    beforeEach(function () {
        foo = 0;
        foo += 1;
    });

    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });

    xit("can be declared 'xit'", function () {
        expect(true).toBe(false);
    });
    
    xdescribe('pending spec',function(){
        
        it('expect not to run',function(){
            expect(true).toBeTruthy();
        })
    })
});