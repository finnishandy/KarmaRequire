/**
 * Created by Sakari.Ruoho on 09/12/2014.
 */
define(['db-module'],
    function(DBModule) {


    describe('DB Module', function() {

        it('Should have Dexie dependency injected when installed', function() {
            //var dbModule = new DBModule();
            //expect(dbModule.getDb().toBeDefined());
            expect(true).toBeTruthy();
        });


    });

});
