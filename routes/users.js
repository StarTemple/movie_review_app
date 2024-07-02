const express = require('express');
const router = express.Router();

// GET route example
router.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

module.exports = router;