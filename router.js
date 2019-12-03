const router = require('express').Router();

router.use('/mascots', require('./controllers/mascots'));
router.use('/schools', require('./controllers/schools'));
router.use('/api', require('./controllers/api'));
router.get('/', (req, res) => res.render('mascots/index'));

module.exports = router;
