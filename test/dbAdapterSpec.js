/**
 * Created by Sakari.Ruoho on 09/12/2014.
 */
define(['db-adapter'],
    function(DBAdapter) {


    describe('Adapter Module', function() {

        var adapter = new DBAdapter();

        beforeEach(function() {
            /*
            queryModule.getByField("foo").then(function(val){
                console.log("promise val: " + val);
                done();
            });
            */
        });

        it('Should get dbimpl not defined', function() {
            expect(adapter.getDbImplDetails()).toBeTruthy("Not defined");
        });

        it('Should throw an exception if dbimpl is not defined', function() {
            expect(adapter.getByField).toThrow(new Error("No db implementation defined"));
        });


    });

});
