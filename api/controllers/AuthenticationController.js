
module.exports = {
    login: function (req, res) {
        //return res.send("Hi there!");        
        var values = req.allParams();
        Manager.find({ id: values.username, password: values.password }).exec(function (err, users) {
            if (err) {
                return res.negotiate(err);
            }
            if (users.length == 1) {
                req.session.authenticated = true;
                req.session.username = values.username;
                req.session.firstName = users[0].firstName;
                req.session.lastName = users[0].lastName;
                req.session.email = users[0].email;
                req.session.country = users[0].country;
                req.session.gender = users[0].gender;

                //sails.log('There are %d users. Check it out:', users.length, users[0].id);
                return res.redirect("http://localhost:1337/#!/manager/"+users[0].id);
            } else {
                req.session.authenticated = false;
                return res.redirect("http://localhost:1337/");
            }
        });
        /*Manager.find({ user: values.username}).exec(function (err, user) {
            if (err) {
                return res.negotiate(err);
            }
            req.login(user, function (err) {
                if (err) {
                    sails.log.warn(err);
                    return negotiateError(err);
                }

                req.session.authenticated = true;

                // Upon successful login, optionally redirect the user if there is a
                // `next` query param
                if (req.query.next) {
                    var url = sails.services.authservice.buildCallbackNextUrl(req);
                    res.status(302).set('Location', url);
                }

                sails.log.info('user', user, 'authenticated successfully');
                return res.json(user);
            });
        });*/
    },
    signout: function (req, res) {

        req.session.authenticated = false;
        req.session.firstName = undefined;
        req.session.lastName = undefined;
        req.session.email = undefined;
        req.session.country = undefined;
        req.session.gender = undefined;
        return res.redirect("http://localhost:1337/");
    }
};