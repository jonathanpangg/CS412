const express = require('express')
const routes = require('./ps2');
const app = express();
const port = 3000

app.set('view engine', 'pug');
app.use('/', routes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});