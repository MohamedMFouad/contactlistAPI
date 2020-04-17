'use strict';

module.exports = function(Contact) {
    Contact.remoteMethod('addcontacts', {
        accepts: {
            arg: 'data',
            type: {
                "id": "string",
                "userId": "string",
                "user": {},
                "totalScore": 0,
                "tags": []
            },
            http: {
                source: 'body'
            }
        },
        returns: {
            arg: 'score',
            type: 'Challenge'
        },
        http: {
            path: '/addcontacts',
            verb: 'post'
        }
    });

   
};
