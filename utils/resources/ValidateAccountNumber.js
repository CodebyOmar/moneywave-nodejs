'use strict';

const root = "/v1/resolve/account";

module.exports = {
    /**
     * validate account number
     * @param account_number, bank_code
     */
    validate: {
        method: 'post',
        endpoint: root,
        params: ['account_number', 'bank_code']
    }   
};