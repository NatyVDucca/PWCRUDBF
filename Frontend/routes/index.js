const router = require('express').Router();
const path = require('path');

const camioneroRouter = require('./camioneros.routes')

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
})

router.use('/camionero',camioneroRouter)




module.exports = router;