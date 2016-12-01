const keystone = require('keystone');

exports = module.exports = (req, res) => {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'boards';
    locals.title = 'Boards | Azoic Ventures';

    view.on('init', function (next) {

        var q = keystone.list('Board').model.find().where('state', 'published').sort('order');


        q.exec(function (err, results) {
            locals.investments = results;
            next(err);
        });
    });

    view.render('boards');
}
