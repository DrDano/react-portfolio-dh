const router = require('express').Router();
const apiRoutes = require('./API/apiData.js');

router.use('/api', apiRoutes);

module.exports = router;