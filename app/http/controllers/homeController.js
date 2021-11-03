const Menu = require('../../models/menu')
function homeController() {
    return {
        async index(req, res) {
            const plants = await Menu.find()
            return res.render('home', { plants: plants })
        }
    }
}

module.exports = homeController