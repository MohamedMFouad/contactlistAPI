'use strict';

module.exports = function(Contact) {

    Contact.addContacts = function(obj, cb){
        let user = {
            firstName: obj.firstName,
            lastName: obj.lastName,
            email: obj.email,
            mobile: obj.mobile,
            id: obj.id,
            relationId: obj.id,
            accoutId: obj.id,
            userId:obj.id
        } 
    
      
    }
    Contact.remoteMethod('addContacts', {

        accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
        returns: { arg: 'addContacts', type: 'array' },
        http: { path: '/addContacts', verb: 'post' }
     });   
};
