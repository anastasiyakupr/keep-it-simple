const config = require('./webpack.config');
const webpack = require('webpack');

config.devtool = 'cheap-module-eval-source-map';
config.entry.hot = 'webpack-hot-middleware/client';
config.output.filename = 'js/[name].js';
config.plugins.push(new webpack.HotModuleReplacementPlugin());

const app = new (require('express'))();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {noInfo: true}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/css/app.css', function(req, res) {
    res.sendFile(__dirname + '/src/css/app.css');
});

app.listen(8080, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.warn('Visit http://localhost:8080/');
    }
});
