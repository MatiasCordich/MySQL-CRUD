const express = require('express')
const { getItems, getItemById, addItem, uptadeItem, deleteItem } = require('../controllers/itemController')

const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: "Api funcionando"})
})

router.get('/items', getItems)
router.get('/items/:id', getItemById)
router.post('/items', addItem)
router.put('/items/:id', uptadeItem)
router.delete('/items/:id', deleteItem)

module.exports = router