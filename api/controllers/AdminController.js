/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	'new': function(req, res){
		res.locals.flash = _.clone(req.session.flash);
        res.view();
        req.session.flash = {};
	},

	create: function(req, res, next){
		  Admin.create(req.params.all(), function adminCreated(err, user){
       	  if(err){
            req.session.flash = {
              err: 1,   // General error
              message: "Veuillez vérifier que tous les champs ont bien été remplis et que l'email n'ait pas déjà été utilisé."
             }
       	    return res.redirect('/admin/new');          
          }
       	  req.session.flash = {};
       	  res.redirect('/');
	    });
   }
};

