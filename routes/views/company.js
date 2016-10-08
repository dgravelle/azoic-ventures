const keystone = require('keystone');
const investments = require('../investments');

exports = module.exports = (req, res) => {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'investments';
    // locals.filter = {
    //     company: req.params.company
    // }


    locals.company = investments.find(company => {
        return company.name === req.params.company
    })

    console.log(locals.company);

    view.render('company');
}
