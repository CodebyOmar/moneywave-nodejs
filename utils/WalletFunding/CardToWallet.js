'use strict';

const root = "/v1/transfer";

module.exports = {
    /**
     * tranfer funds from card to wallet
     * @params firstname, lastname, phonenumber, email, recipient, card_no, cvv, expiry_year, pin
     * expiry_month, charge_auth, apiKey, amount, fee, redirecturl, medium
     */
    charge: {
        method: 'post',
        endpoint: root,
        params: ['firstname', 'lastname', 'phonenumber', 'email', 'recipient', 'card_no', 'cvv', 'expiry_year', 
          'expiry_month', 'apiKey', 'amount', 'fee', 'redirecturl', 'medium']
    },

    chargeLocalCard: {
        method: 'post',
        endpoint: root,
        params: ['firstname', 'lastname', 'phonenumber', 'email', 'recipient', 'card_no', 'cvv', 'pin','expiry_year', 
          'expiry_month', 'charge_auth','apiKey', 'amount', 'fee', 'redirecturl', 'medium']
    }
};