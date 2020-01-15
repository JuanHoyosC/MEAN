const express = require('express');
const router = express.Router();

const clientCtrl = require('../controllers/client.controller')

router.get('/', clientCtrl.getClients)
router.post('/', clientCtrl.createClient)
router.get('/:id', clientCtrl.getClient)
router.put('/:id', clientCtrl.updateClient)
router.delete('/:id', clientCtrl.deleteClient)

module.exports = router