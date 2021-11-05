const Menu = require('../../models/menu')


function specificPlantController() {
    return {
        async index(req, res) {
            // let plant = req.params.name
            // console.log(plant)
            // let obj = JSON.parse(plant)
            console.log(req.params.name)
            const plant = await Menu.find({'name':req.params.name})
            console.log(plant[0].image)
            return res.render('search' , {plant:plant[0]})
        }
    }
}

module.exports = specificPlantController