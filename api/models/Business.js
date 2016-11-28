/**
 * Business.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true      
    },
    description: {
      type: 'string',
    },
    type: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    offers:{
      collection: 'Offer'
    },

    // Add a reference to Manager
    owner: {
      model: 'manager'
    }
  }
};
