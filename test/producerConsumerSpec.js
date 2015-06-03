/**
 * Created by Sakari.Ruoho on 09/12/2014.
 */
define(['crud-consumer', 'crud-producer', 'jasmine-jquery'],
    function(CrudConsumer, CrudProducer) {


    describe('Producer & Consumer', function() {
        //window.$ = $j;
        var consumer = new CrudConsumer();
        var producer = new CrudProducer();
        var fixture;
        //jasmine.getFixtures().fixturesPath = '/base/test/fixtures';
        //loadFixtures('delete-button.html')

        beforeEach(function() {
            $('body').append("<div id='deleteRecord'>Feck</div>");
            //jQuery(document).append("<input type='button' id='deleteRecord'>");
            //var button = jQuery.find("#deleteRecord");
            //set("<input type='button' id='deleteRecord'>");
            //console.log(jasmine.getFixtures().fixturesPath);

        });

        it('Should have promise on init..', function(done) {
            var button = $('#deleteRecord');
            consumer.initialize().then(function() {
                spyEvent = spyOnEvent('#deleteRecord', 'click');
                producer.initialize().then(function() {
                    button.click();
                    setTimeout(function() {
                        expect(consumer.getFoo()).toEqual("foo");
                        done();
                    }, 500);
                });
            });
        });

        it('Should have publish event on delete click..', function(done) {
            var button = $('#deleteRecord');
            spyEvent = spyOnEvent('#deleteRecord', 'click');
            producer.initialize().then(function() {

                done();
            });
            button.click();
            expect('click').toHaveBeenTriggeredOn('#deleteRecord');
            //expect(true).toBeTruthy();

        });


    });

});
