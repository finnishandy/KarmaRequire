/**
 * Created by Sakari.Ruoho on 09/12/2014.
 * TODO: Could cache Dexie collections with id created from a query?
 */
define(['dexie-adapter'],
    function(DexieAdapter) {


    describe('DexieAdapter Module', function() {

        var adapter = new DexieAdapter();
        var DB_NAME = "SAMPLE_DB";
        var DEFAULT_TABLE = 'friends'

        beforeEach(function() {
            adapter.setDbName(DB_NAME);
            adapter.setVersion(1);
            adapter.setSchema({
                friends: "++id,name,age",
                pets: "++id,name,kind"
            });
        });

        it('Should do get correct implementation details', function() {
            expect(adapter.getDbImplDetails()).toEqual("Dexie 1.04");
        });

        it('Should do get correct db name', function() {
            adapter.setDbName("SAMPLE_DB");
            expect(adapter.getDbName()).toEqual(DB_NAME);
        });

        it('Should open a db given a name', function(done) {
            adapter.open().then(function(result) {
                expect(true).toBeTruthy();
                done();
            }).catch(function(err) {
                console.log(err);
                expect(false).toBeTruthy();
                done();
            });
        });

        it('Should add record to a database', function(done) {
            adapter.open().then(function() {
                adapter.addObject(DEFAULT_TABLE, {name: 'bar', age: 'foo'}).then(function() {
                    adapter.getAll(DEFAULT_TABLE).then(function(results) {
                        expect(results[0].name).toEqual('bar');
                        done();
                    });
                });
            }).catch(function(err) {
                console.log(err);
                expect(false).toBeTruthy();
                done();
            });
        });


        afterEach(function(done) {
            adapter.deleteDatabase(DB_NAME).then(function() {
                done();
            });
        })
    });

});
