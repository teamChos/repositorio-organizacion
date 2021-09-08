const { Router } = require('express');

const { 
    homeGet
} = require('../controllers/controllers')

const router = Router();

router.get('/', homeGet);

module.exports = router;