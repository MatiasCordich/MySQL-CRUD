
const handleMessageSucces = (res, data) => {
    res.status(200)
    res.send({data: data}
    )
}

const handleMessageFail = (res, message) => {
    res.status(404)
    res.send({msg: message})
}

module.exports = { handleMessageFail, handleMessageSucces}