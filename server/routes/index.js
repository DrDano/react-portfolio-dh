const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./API/apiData.js');

router.use('./API/apiData.js', apiRoutes);

// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;