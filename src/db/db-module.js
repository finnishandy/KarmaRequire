/**
 * Created by Sakari.Ruoho on 06/05/2015.
 */
// Actually this will enforce dependency to Dexie..
define(function() {

    var DBModule = function (dbname) {
        this.dbname = dbname;
        //this.db = new Dexie(this.dbname);
    }

    DBModule.prototype = {
        getDbName: function () {
            return this.dbname;
        },
        getTable: function(table) {
            return this.db[table];
        },
        getDb: function() {
            return this.db;
        },
        dbReady: function(func) {
            this.db.on("ready", func);
        },
        dbDelete: function(func) {
            this.db.delete().then(func);
        }
    }

    return DBModule;
});