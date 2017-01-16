// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1328401130538593', // your App ID
        'clientSecret'    : 'b727e076b51e257e3a2b84e6f881abee', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'OvEPzX389GfjtGvMCF7u3rzEc',
        'consumerSecret'     : 'ARqaEkg6hKBfOa54cbmZ1QpLsbfB5fTkcpLbmL0kcPLO3ex4o3',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '702898820845-9gglronmpocvhn24mb4061k6l1252u7l.apps.googleusercontent.com',
        'clientSecret'     : 'RIbzWsJREe_bKA_wqINY5qH5',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
