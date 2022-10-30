module.exports = function (app) {
    app.use('/', require('./all'));
    app.use('/all', require('./all'));
    app.use('/skill', require('./skill'));
    app.use('/work', require('./work'));
    app.use('/about', require('./about'));
    app.use('/connect', require('./connect'));
    };