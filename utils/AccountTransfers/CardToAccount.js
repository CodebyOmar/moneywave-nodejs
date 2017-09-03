'use strict';

const root = '/v1/transfer';

module.exports = {
    /**
     * transfer cash from a card to a bank account
     * @params firstname, lastname, phonenumber, email, recipient_bank, recipient_account_number, 
     * card_no, cvv, pin(optional required when using VERVE card), expiry_year, expiry_month, 
     * charge_auth(optional required where card is a local Mastercard), apiKey, amount, fee, 
     * narration(optional), redirecturl, medium
     */
    charge: {
        method: 'post',
        endpoint: root,
        params: ['firstname', 'lastname', 'phonenumber', 'email', 'recipient_bank', 'recipient_account_number', 'card_no', 'cvv', 
        'expiry_year', 'expiry_month', 'apiKey', 'amount', 'fee', 'redirecturl', 'medium']
    },

    chargeLocalCard: {
        method: 'post',
        endpoint: root,
        params: ['firstname', 'lastname', 'phonenumber', 'email', 'recipient_bank', 'recipient_account_number', 'card_no', 'cvv', 
        'expiry_year', 'pin', 'charge_auth', 'expiry_month', 'apiKey', 'amount', 'fee', 'redirecturl', 'medium']
    },

    validate: {
        method: 'post',
        endpoint: [root, '/charge/auth/card'].join(''),
        params: ['transactionRef', 'otp']
    }
};