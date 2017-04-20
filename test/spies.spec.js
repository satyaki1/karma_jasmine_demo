describe("Example Of jasmine Spy using spyOn()", function () {

    it('uses the dictionary to say "hello world"', function () {
        var dictionary = new Dictionary;
        var person = new Person;

        spyOn(dictionary, "hello"); // replace hello function with a spy 
        spyOn(dictionary, "world"); // replace world function with another spy 

        person.sayHelloWorld(dictionary);
        expect(dictionary.hello).toHaveBeenCalled();

        expect(dictionary.world).toHaveBeenCalled();
    });

});

describe("A spy, when configured to call through", function () {
    var person, fetchedHeights;

    beforeEach(function () {
        person = new Person;
//  spyOn will assert the method was called with the argument . So by default the spy doesn’t actually call the method, if you want it to call the actual method and just count the call as it does it you will do something like this -
//      By chaining the spy with and.callThrough, the spy will still track all calls to it but in addition it will delegate to the actual implementation.
        spyOn(person, "getHeights").and.callThrough();

        person.setHeights(5.5);
        fetchedHeights = person.getHeights();
    });

    it("tracks that the spy was called", function () {
        expect(person.getHeights).toHaveBeenCalled();
    });

    it("should fetch the correct value", function () {
        expect(fetchedHeights).toEqual(5.5);
    });
    
     
    it('tracking calls to spy', function () {
        // calls property returns true if the function is called at all otherwise false
        expect(person.getHeights.calls.any()).toEqual(true);
        // number of times the function has been called
        expect(person.getHeights.calls.count()).toEqual(1);
    });

});


describe("A spy, when configured to call fake", function () {
    var person, fetchedHeights;

    beforeEach(function () {
        person = new Person;
//      By chaining the spy with and.callFake, all calls to the spy will delegate to the supplied function.
        spyOn(person, "setHeights").and.callFake(function (val) {
            return val * .01;
        });

        person.setHeights(5.5);
        fetchedHeights = person.setHeights(5.5);
    });

    it("should fetch the faked value", function () {
        expect(fetchedHeights).toEqual(5.5 * 0.01);
    });

});