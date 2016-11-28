/**
* ManagerController
*
* @description :: Server-side logic for managing managers
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {

    info: function (req, res) {
        return res.json(req.session);
    },

    index: function (req, res) {
        var values = req.allParams();
        //console.log(values);
        if (req.method === 'GET') {
            Manager.find({ id: values.id })
                .populate('mybusiness')
                .exec(function (err, users) {
                    if (err) {
                        return res.negotiate(err);
                    }
                    if (users.length == 1) {
                        return res.json({
                            "firstName": users[0].firstName,
                            "lastName": users[0].lastName,
                            "email": users[0].email,
                            "country": users[0].country,
                            "gender": users[0].gender,
                            "mybusiness": users[0].mybusiness
                        });
                    }
                });
        }
        if (req.method === 'POST') {
            //
            Manager.create({
                firstName: values.firstName,
                lastName: values.lastName,
                gender: values.gender,
                email: values.email,
                id: values.user,
                password: values.password,
                cellphone: values.cellphone,
                country: values.country,
                avatarUrl:"",
                avatarFd:""
            }).exec(function createCB(err, created) {
                if (err) {
                    return res.negotiate(err);
                }
                res.redirect("http://localhost:1337/#!/manager/" + values.user);
            });
        }
        if (req.method === 'DELETE') {
            //do nothing
            return res.json("");
        }
    },

    /**
     * Upload avatar for currently logged-in user
     *
     * (POST /manager/avatar)
     */
    uploadAvatar: function (req, res) {

        req.file('avatar').upload({
            // don't allow the total upload size to exceed ~10MB
            maxBytes: 10000000
        }, function whenDone(err, uploadedFiles) {
            if (err) {
                return res.negotiate(err);
            }

            // If no files were uploaded, respond with an error.
            if (uploadedFiles.length === 0) {
                return res.badRequest('No file was uploaded');
            }


            // Save the "fd" and the url where the avatar for a user can be accessed
            Manager.update(req.session.username, {

                // Generate a unique URL where the avatar can be downloaded.
                avatarUrl: require('util').format('%s/user/avatar/%s', sails.getBaseUrl(), req.session.username),

                // Grab the first file and use it's `fd` (file descriptor)
                avatarFd: uploadedFiles[0].fd
            })
                .exec(function (err) {
                    if (err) return res.negotiate(err);
                    return  res.redirect("http://localhost:1337/#!/manager/" + req.session.username);//res.ok();
                });
        });
    },


    /**
     * Download avatar of the user with the specified id
     *
     * (GET /manager/avatar/:id)
     */
    getAvatar: function (req, res) {

        req.validate({
            id: 'string'
        });

        Manager.findOne(req.param('id')).exec(function (err, user) {
            if (err) return res.negotiate(err);
            if (!user) return res.notFound();

            // User has no avatar image uploaded.
            // (should have never have hit this endpoint and used the default image)
            if (!user.avatarFd) {
                return res.notFound();
            }

            var SkipperDisk = require('skipper-disk');
            var fileAdapter = SkipperDisk(/* optional opts */);

            // Stream the file down
            fileAdapter.read(user.avatarFd)
                .on('error', function (err) {
                    return res.serverError(err);
                })
                .pipe(res);
        });
    }


};

