const prisma = require('../utils/client')


const getAll = async () => {

    try {

        const items = await prisma.product.findMany()

        return items

    } catch (error) {

        throw new Error("ERROR_GET_ITEMS")

    }
}

const getById= async (id) => {

    try {

        const item = await prisma.product.findUnique({
            where: {
                id: Number(id)
            }
        })

        return item

    } catch (error) {

        throw new Error("ERROR_GET_ITEM")

    }
}

const create = async (name, price) => {
  
    try {

        const newItem = await prisma.product.create({
            data:{
                name: name,
                price: price
            }
        })

        return newItem

    } catch (error) {

        throw new Error("ERROR_CREATING_ITEM")

    }
}

const update = async (name, price, id) => {
  
    try {

        const updatedItem = await prisma.product.update({
            where: {
                id: Number(id)
            },
            data:{
                name: name,
                price: price
            }
        })

        return updatedItem

    } catch (error) {

        throw new Error("ERROR_CREATING_ITEM")

    }
}

const erase = async (id) => {
  
    try {

        const deletedItem = await prisma.product.delete({
            where: {
                id: Number(id)
            }
        })

        return deletedItem

    } catch (error) {

        throw new Error("ERROR_DELETING_ITEM")

    }
}


module.exports = { getAll, getById, create, update, erase }