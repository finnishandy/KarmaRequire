/**
 * Created by Sakari.Ruoho on 20/02/2015.
 */
define(['jquery', 'pubsub'], function($, PubSub) {

    var CrudProducer = function() {
        var pub = {};


        pub.initialize = function() {
            return new Promise(function(resolve, reject) {
                $("#deleteRecord").on('click', function() {
                    PubSub.publish('DELETE', 'foo');
                });
                resolve();
            });
        }

        return pub;
    };

    return CrudProducer;
});
