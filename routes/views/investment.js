const keystone = require('keystone');
// const investments = require('../investments');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'investments';
    locals.filter = {
        company: req.params.company
    }


    // locals.company = investments.find(company => {
    //     return company.name === req.params.company
    // })

    view.on('init', function (next) {
        console.log(locals.filter.company);
        var q = keystone.list('Investment').model.findOne({
            // state: 'published',
            title: locals.filter.company
        }).populate('author');

        q.exec(function (err, result) {
            console.log(result);
            locals.company = result;
            next(err);
        });
    });

    view.render('investment');
}
