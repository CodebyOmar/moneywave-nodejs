'use strict';

const root = "/v1/transfer";

module.exports = {
    /**
     * tranfer funds from card to wallet
     * @param firstname, lastname, phonenumber, email, recipient, card_no, cvv, expiry_year,
     *        expiry_month, apiKey, amount, fee, redirecturl, medium
     */
    transfer: {
        method: 'post',
        endpoint: root,
        params: ['firstname', 'lastname', 'phonenumber', 'email', 'recipient', 'card_no', 'cvv', 'expiry_year', 
          'expiry_month', 'apiKey', 'amount', 'fee', 'redirecturl', 'medium']
    }
};