const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended: true}))

// part 1 
router.get('/', (req, res) => {
    const message = {String: 'Hello'}
    console.log(message)
    res.render('index', {message: JSON.stringify(message)});
})

// part 2
router.post('/data', (req, res) => {
    keys = []
    values = []

    for (var k in req.body) {
        keys.push(k)
        values.push(req.body[k])
    }

    const message = {String: keys[0]}
    console.log(message)
    const length = {Number: keys[0].length}
    console.log(length)
    res.render('result', {
        message: JSON.stringify(message), 
        length: JSON.stringify(length)
    });
});
 
// part 3
router.get('/names/:name', (req, res) => {
    keys = []
    values = []
    // console.log(req.params)
    for (var k in req.params) {
        keys.push(k)
        values.push(req.params[k])
    }

    const message = {String: values[0]}
    console.log(message)
    res.render('index', {message: JSON.stringify(message)});
})
module.exports = router