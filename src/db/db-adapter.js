/**
 * Created by Sakari.Ruoho on 06/05/2015.
 */
define(function() {

    // Super class for different db implementations
    var DBAdapter = function (DBWrapper) {
        this.wrapper = DBWrapper;
        this.dbImpl = "Not defined"
        this.dbImplDefined = false;
    }

    DBAdapter.prototype = {
        getByField: function () {
            if (!this.dbImplDefined) throw new Error("No db implementation defined");
        },
        getDbImplDetails: function() {
            return this.dbImpl;
        },
        uses: function(DBWrapper) {
            this.wrapper = DBWrapper;
        }
    }

    return DBAdapter;
});

