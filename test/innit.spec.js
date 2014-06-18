import {Innit} from '../src/innit';

describe('something', function() {
    var app;

    beforeEach(function() {
        app = new Innit();
    });

    it('should work', function() {
        expect(app).toBeDefined();
    });

    it('should fail', function() {
        //app();
    });
});