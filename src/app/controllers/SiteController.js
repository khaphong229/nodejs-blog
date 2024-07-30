const Course = require('../models/Course');

class SiteController {
    //[get] /
    async index(req, res) {
        try{
            const courses = await Course.find({});
            res.json(courses);
        }catch(error){
            console.log(error);
        }
        
    }
    //[get] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
