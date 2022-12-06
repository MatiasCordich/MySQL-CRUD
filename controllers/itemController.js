const { getAll, getById, create, update, erase } = require('../models/itemModel')
const { handleMessageFail, handleMessageSucces } = require('../utils/handleMessages')

const getItems = async (req, res) => {

    try {

        const response = await getAll()

        handleMessageSucces(res, response)

        return
    } catch (error) {

        handleMessageFail(res, "ERROR_GET_ITEMS")

    }
}

const getItemById = async (req, res) => {

    try {
        const { id } = req.params

        const response = await getById(id)

        handleMessageSucces(res, response)

        return

    } catch (error) {

        handleMessageFail(res, "ERROR_GET_ITEM")

    }

}

const addItem = async (req, res) => {

    try {
        const { name, price } = req.body

        const response = await create(name, price)

        handleMessageSucces(res, response)

        return

    } catch (error) {

        handleMessageFail(res, "ERROR_CREATING_ITEM")

    }

}

const uptadeItem = async (req, res) => {

    try {

        const { name, price } = req.body
        const { id } = req.params

        const response = await update(name, price, id)

        handleMessageSucces(res, response)

        return

    } catch (error) {

        handleMessageFail(res, "ERROR_UPDATING_ITEM")

    }
}

const deleteItem = async (req, res) => {

    try {

        const { id } = req.params

        const response = await erase(id)

        handleMessageSucces(res, "Item borrado")

        return

    } catch (error) {

        handleMessageFail(res, "ERROR_UPDATING_ITEM")

    }
}

module.exports = { getItems, getItemById, addItem, uptadeItem, deleteItem }