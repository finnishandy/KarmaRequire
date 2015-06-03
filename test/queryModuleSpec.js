/**
 * Created by Sakari.Ruoho on 09/12/2014.
 * Import promise polyfill for PhantomJS2 **Promises not supported**
 * https://github.com/taylorhakes/promise-polyfill/blob/master/Promise.js
 */
define(['db-module', 'query-module', 'promise'],
    function(DBModule, QueryModule) {


    describe('Query Module', function() {

        var queryModule = new QueryModule();

        beforeEach(function() {
            /*
            queryModule.getByField("foo").then(function(val){
                console.log("promise val: " + val);
                done();
            });
            */
        });

        it('Should do something', function(done) {
            var dbModule = new DBModule("test-db");

            queryModule.uses(dbModule);
            //expect(dbModule.getDb().toBeDefined());
            queryModule.getByField("foo").then(function(results){
                //expect(results).toBeGreaterThan(0);

                done();
            });
            expect(true).toBeTruthy();
        });


    });

});
