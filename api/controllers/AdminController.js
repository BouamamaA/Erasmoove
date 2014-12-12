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
		  Admin.create(req.params.all(), function adminCreated(err, admin){
       	  if(err){
            req.session.flash = {
              err: 1,   // General error
              message: "Veuillez vérifier que tous les champs ont bien été remplis et que l'email n'ait pas déjà été utilisé."
             }
             console.log(err);
       	    return res.redirect('/admin/new');          
          }
          if(req.param('password')!=req.param('rePassword')){
             req.session.flash = {
              err : 1,
              message: "Les mots de passes de concordent pas."
             }
             return res.redirect('/admin/new');   //TODO Add delete user
          }
       	  req.session.flash = {};
       	  res.redirect('/');
	    });
   },

   profil :function(req, res, next){
     if(req.session.user){
     Admin.findOne(req.param('id'), function adminFound(err, admin){
      if(err) return next(err);
      if(!admin) return next();
      res.view({ admin: admin});
     });
     }
    else{
      res.redirect('session/new');
    } 
   }
};

