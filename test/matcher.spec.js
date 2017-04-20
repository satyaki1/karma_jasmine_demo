describe("jasmine.any", function () {
    it("matches any value", function () {
        expect({}).toEqual(jasmine.any(Object));
        expect(12).toEqual(jasmine.any(Number));
    });
});

describe("jasmine.objectContaining", function () {
    var foo;

    beforeEach(function () {
        foo = {
            a: 1,
            b: 2,
            bar: "baz"
        };
    });

    it("matches objects with the expect key/value pairs", function () {
        expect(foo).toEqual(jasmine.objectContaining({
            bar: "baz"
        }));
    });

    it('can match nested partial objects', function () {
        var joc = jasmine.objectContaining;
        var actualObj = {
            a: {
                x: 1,
                y: 2
            },
            b: 'hi'
        };
        expect(actualObj).toEqual(joc({
            a: joc({
                x: 1
            })
        }));
    });
});

describe("Different Methods of Expect Block", function () {
    var dummyObj, qidc;
    beforeEach(function () {
        dummyObj = {
            currentVal: 0,
            name: "qidc",
            name1: qidc
        };
    });

    it("The  Example of toContain() method", function () {
        expect([1, 2, 3, 4]).toContain(3);
    });

    it("Example of toBeCloseTo()", function () {
        expect(12.34).toBeCloseTo(12.3, 1);
    });

    it("Example of toMatch()", function () {
        expect("Jasmine tutorial in tutorials.com").toMatch(/com/);
    });

    it("Example of toBeNaN()", function () {
        expect(0 / 0).toBeNaN();
    });

});