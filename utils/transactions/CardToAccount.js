'use strict';

const root = '/v1/transfer';

module.exports = {
    /**
     * transfer cash from a card to an account
     * @param firstname, lastname, phonenumber, email, recipient_bank, recipient_account_number, card_no, cvv, expiry_year,
     *        expiry_month, apiKey, amount, fee, redirecturl, medium
     */
    cardToAccountTransfer: {
        method: 'post',
        endpoint: root,
        params: ['firstname', 'lastname', 'phonenumber', 'email', 'recipient_bank', 'recipient_account_number', 'card_no', 'cvv', 
        'expiry_year', 'expiry_month', 'apiKey', 'amount', 'fee', 'redirecturl', 'medium']
    },

    validateAccountToAccount: {
        method: 'post',
        endpoint: [root, '/charge/auth/account'].join(''),
        params: ['transactionRef', 'authType', 'authValue']
    },

    validateVerveCardToAccount: {
        method: 'post',
        endpoint: [root, '/charge/auth/card'].join(''),
        params: ['transactionRef', 'otp']
    }
};