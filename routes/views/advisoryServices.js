const keystone = require('keystone');

exports = module.exports = (req, res) => {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'advisory';
    locals.title = 'Advisory Services | Azoic Ventures';

    view.on('init', function (next) {

        var q = keystone.list('Advisory').model.find().where('state', 'published').sort('order');


        q.exec(function (err, results) {
            locals.investments = results;
            next(err);
        });
    });

    view.render('advisoryServices');
}
