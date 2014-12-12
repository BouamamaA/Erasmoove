/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	'new': function(req,res){
        res.locals.flash = _.clone(req.session.flash);
		res.view();
		req.session.flash = {};
	},

	login: function(req,res,next){
        User.findOneByEmail(req.param('email'), function(err, user){
        	if (err) return next(err);
        	if(!user) {
        		req.session.flash = {
        			err: 1,
        			message: "Utilisateur non existant"
        		}
                res.redirect('session/new');    	
        	}
        	else if(user.password===req.param('password')){
        		req.session.flash = {
        			err: 1,
        			message: "Mot de passe incorrect"
        		}
                res.redirect('session/new'); 
        	   }
        	else{
                req.session.user = user;
                res.redirect('admin/profil'+user.id);
        	}
        	});
	}
	
};

