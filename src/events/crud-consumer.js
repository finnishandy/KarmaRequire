/**
 * Created by Sakari.Ruoho on 20/02/2015.
 */
define(['jquery', 'pubsub'], function($, PubSub) {

   var CrudConsumer = function() {

       var pub = {};


       pub.initialize = function() {
           return new Promise(function(resolve, reject) {
               PubSub.subscribe('DELETE', pub.deleteRecord);
               resolve();
           });
       };

       pub.deleteRecord = function(topic, message)  {
            pub.foo = "foo";
       };

       pub.getFoo = function() {
           return pub.foo;
       }

       return pub;
   };

   return CrudConsumer;
});
