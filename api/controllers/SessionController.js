/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {

     'new': function(req,res){
        if(!req.session.authenticated){
            res.locals.flash = _.clone(req.session.flash);
            res.view();
            req.session.flash = {};
        }
        else{
            res.redirect('admin/profil'+req.session.user.id);
        }
    },

    login: function(req,res,next){
        if(!req.session.authenticated){
            Admin.findOneByName(req.param('name'), function(err, admin){
               if (err) return next(err);
               if(!admin) {
                  req.session.flash = {
                     err: 1,
                     message: "Utilisateur non existant"
                 }
                 res.redirect('session/new');    	
             }
             else if(admin.password!=req.param('password')){
              req.session.flash = {
               err: 1,
               message: "Mot de passe incorrect"
           }
           res.redirect('session/new'); 
       }
       else{
        req.session.user = admin;
        req.session.authenticated = true;
        res.redirect('admin/profil'+admin.id);
    }
});
        }
        else{
            res.redirect('admin/profil'+req.session.user.id);
        }
    },
    logout: function(req,res){
       req.session.user = {};
       req.session.authenticated = false;
       res.redirect('/');
   }

};

