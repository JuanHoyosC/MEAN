const Client = require('../models/client');

const clientCtrl = {};

clientCtrl.getClients = async (req, res) => {
    const clients = await Client.find()
    res.json(clients)
}

clientCtrl.getClient = async (req, res) => {
    const client = await Client.findById(req.params.id)

    res.json(client)
}

clientCtrl.createClient =  async (req, res) => {
    const client = new Client(req.body)
    await client.save()
    res.json({
        'Status': 'Cliente guardado'
    })
}

clientCtrl.updateClient =  async (req, res) => {
    const client = {
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password
    }
    await Client.findByIdAndUpdate(req.params.id, {$set: client}, {new: true})
    res.json({
        'Status ': 'Cliente actualizado'
    })

}

clientCtrl.deleteClient =  async (req, res) => {
    await Client.findByIdAndRemove(req.params.id)
    res.json({
        'Status ': 'Cliente eliminado' 
    })
} 

module.exports = clientCtrl