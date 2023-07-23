const express = require('express');

const app = express();

app.set('views', './views')
app.set('view engine', 'pug');

app
    .get('/', (req, res) => {
        res.set('Content-Type', 'text/html');

        res.render('index');
    });

app.listen(3000);

function getBuffer(html) {
    return Buffer.from(html);
}
