const Menu = require('../../models/menu')
function searchController() {
    return {
        async index(req, res) {
            console.log(req.body)
            // console.log(req.body.search)
            let plant =await Menu.find({'name':req.body.search})
            console.log(plant[0])
            return res.render('search' , {plant:plant[0]})
        }
    }
}

module.exports = searchController