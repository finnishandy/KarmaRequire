/**
 * Created by Sakari.Ruoho on 06/05/2015.
 */
define(function() {

    // dbModule should be replaced by dbAdapter which provides the actual
    // implementation details and "interfaces".
    // this module can wrap the promises and be a abstraction module for querys
    var QueryModule = function (dbModule, defaultTable) {
        this.dbModule = dbModule;
        this.defaultTable = defaultTable;
    }

    QueryModule.prototype = {
        getByField: function () {
            //var indexes = this.dbModule.getTable().getIndexes();
            //var qb = new QueryBuilder(table);
            //var query = qb.build(indexes,"ID");
            //return executeQuery(query);
            return new Promise(function(resolve, reject) {
                resolve("woo");
                /*
                dbAdapter.qetByField(function(results) {

                });
                */
            });
        },
        executeQuery: function(query, context) {
            var table = this.dbModule.getTable(this.defaultTable);
            var string = "table.where('" + indexes[0].name + "').startsWithIgnoreCase('" + val + "')";
            for (x = 1; x < indexes.length; x++) {
                string += ".or('" + indexes[x].name + "').startsWithIgnoreCase('" + val + "')";
            }

            string += ";";
            console.log(string);
            var collection = eval(string);
            collection.toArray(func);
            return true;
        },
        uses: function(dbimpl) {
            this.dbModule = dbimpl;
        }
    }

    return QueryModule;
});

