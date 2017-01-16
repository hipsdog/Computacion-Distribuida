// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1328401130538593', // your App ID
        'clientSecret'    : 'Aqui va el secret', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'OvEPzX389GfjtGvMCF7u3rzEc',
        'consumerSecret'     : 'Aqui va el secret',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '702898820845-9gglronmpocvhn24mb4061k6l1252u7l.apps.googleusercontent.com',
        'clientSecret'     : 'Aqui va el secret',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
