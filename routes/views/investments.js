const keystone = require('keystone');

exports = module.exports = (req, res) => {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'investments';
    locals.title = 'Investments | Azoic Ventures';

    view.on('init', function (next) {

        var q = keystone.list('Investment').model.find().where('state', 'published').sort('-publishedDate');


        q.exec(function (err, results) {
            console.log(results);
            locals.investments = results;
            next(err);
        });
    });

    view.render('investments');
}
