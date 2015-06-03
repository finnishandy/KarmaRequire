/**
 * Created by Sakari.Ruoho on 06/05/2015.
 */
define(['./db-adapter', 'dexie'], function(DBAdapter) {

    // dbModule should be replaced by dbAdapter which provides the actual
    // implementation details and "interfaces".
    // this module can wrap the promises and be a abstraction module for queries
    var DexieAdapter = function () {
        DBAdapter.call(this);
        this.wrapper = Dexie;
        this.dbImpl = "Dexie 1.04"
    }

    DexieAdapter.prototype = Object.create(DBAdapter.prototype);
    DexieAdapter.prototype.constructor = DexieAdapter;
    DexieAdapter.prototype.getByField = function() {

    };

    DexieAdapter.prototype.setDbName = function(dbname) {
        this.dbname = dbname;
    };

    DexieAdapter.prototype.getDbName = function() {
        return this.dbname;
    };

    DexieAdapter.prototype.open = function(dbname) {
        if (!this.database) {
            this.database = new Dexie(dbname || this.getDbName());
        }
        this.database.version(this.version).stores(this.schema);
        return this.database.open();
    };

    DexieAdapter.prototype.setVersion = function(version) {
        this.version = version;
        return this;
    };

    DexieAdapter.prototype.setSchema = function(schema) {
        this.schema = schema;
        return this;
    };

    DexieAdapter.prototype.deleteDatabase = function(dbname) {
        var db = new Dexie(dbname);
        return db.delete();
    };

    DexieAdapter.prototype.addObject = function(tablename, object, index) {
        return this.database.table(tablename).add(object, index);
    };

    DexieAdapter.prototype.getAll = function(tablename) {
        return this.database.table(tablename).toArray();
    };

    return DexieAdapter;
});

