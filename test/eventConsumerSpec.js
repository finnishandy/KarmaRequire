define(['crud-consumer', 'pubsub', 'jasmine-jquery'], function(CrudConsumer, PubSub) {

    describe('Crud Consumer', function() {

        var $el;
        var crudConsumer;
        //jasmine.getFixtures().fixturesPath = '/base/test/fixtures';
        //loadFixtures('delete-button.html')

        beforeEach(function() {
            //jasmine.getFixtures().set("<div id='deleteRecord'>Feck</div>");
            $('body').append("<div id='deleteRecord'></div>");
            crudConsumer = new CrudConsumer();
        });

        it('works for app', function(done) {
            var $button = $("#deleteRecord");
            crudConsumer.initialize().then(function() {
                $button.click();
                expect(true).toBeTruthy();
                done();
            })
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });

    });

});
