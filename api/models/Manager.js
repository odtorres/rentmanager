/**
 * Manager.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        firstName: {
            type: 'string',
            required: true
        },
        lastName: {
            type: 'string'
        },
        gender: {
            type: 'string',
            enum: ['female', 'male'],
            defaultsTo: 'female'
        },
        email: {
            type: 'string',
            required: true,
            unique: true
        },
       id: {
            type: 'string',
            required: true,
            unique: true,
            primaryKey: true
        },
        password: {
            type: 'string',
            required: true
        },
        cellphone: {
            type: 'string',
            required: true,
            unique: true
        },
        country: {
            type: 'string'
        },
        avatarUrl: {
            type: 'string'
        },
        avatarFd: {
            type: 'string'
        },

        // Add a reference to Pets
        mybusiness: {
            collection: 'business',
            via: 'owner'
        }
    }

};
