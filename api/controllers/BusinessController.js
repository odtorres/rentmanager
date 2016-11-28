/**
 * BusinessController
 *
 * @description :: Server-side logic for managing businesses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    findByName: function (req, res) {
        Business.find({ name: req.param('name') }).limit(12).exec(function callBack(err, results) {
            if (err) {
                return res.negotiate(err);
            }
            sails.log(results);
            res.json(results);
        });
    },

    index: function (req, res) {
        if (req.method === 'POST') {
            //

            /*Manager.find({id:req.param('user')}).populate('mybusiness').exec(function(err,r){
        		if (err) {
                	return res.negotiate(err);
                }
                console.log(r)	
				r[0].mybusiness.add(created.id);
				r[0].save(function(err,s){
					if (err) {
                		return res.negotiate(err);
                	}
					console.log("s");
					console.log(s);
				});	
        	});  */

            Business.create({
                name: req.param('name'),
                description: req.param('description'),
                type: req.param('type'),
                address: req.param('address'),
                city: req.param('city'),
                country: req.param('country'),
                owner: req.param('user')
            }).exec(function createCB(err, created) {
                if (err) {
                    return res.negotiate(err);
                }
                console.log(created)
                console.log(req.param('user'))

                if (created) {

                }
                res.redirect("http://localhost:1337/#!/manager/" + req.param('user'));
            });
        }
    }
};

