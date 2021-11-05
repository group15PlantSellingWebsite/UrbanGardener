
const Menu = require('../../models/menu')
function specificPlantController() {
    return {
        async index(req, res) {
            const plant = await Menu.find({'name':req.params.name})
            return res.render('search' , {plant:plant[0]})
        }
    }
}

module.exports = specificPlantController



