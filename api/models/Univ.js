/**
* Univ.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	name:{
  		type:'string',
  		required: true
  	},

  	shortDes:{   //Short description
        type:'string'
  	},

  	pics:{  // Array of links to pictures, first one is the profile
  		type: 'array',
  		defaultsTo: []  
  	},
    
    profilPic:{  // Link to the profil pic
    	type: 'string'
    },

    setProfilPic: function(pic){
    	pic = profilPic;
    },

    addPic: function(pic){
        pics.push(pic);
    },

    moyenne:{
    	type: 'string' // Moyenne des étudiants qui partent
    },
    
    scores:{
    	type: 'string' // Score TOEFL/entretien de langue
    }.

    

  }
};

