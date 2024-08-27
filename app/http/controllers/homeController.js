const Menu = require('../../models/menu')
function homeController() {
    return {
        async index(req, res) {
            const plants = await Menu.find().limit(8)
            return res.render('home', { plants: plants })
        }
    }
}

module.exports = homeController