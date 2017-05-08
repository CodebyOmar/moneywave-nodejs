'use strict';

const root = '/v1/transfer/charge/tokenize/card';

module.exports = {
    /**
     * get token to use in intiating tranfers
     * @param card_no, expiry_year, expiry_month, cvv
     */
    tokenize: {
        method: 'post',
        endpoint: root,
        params: ['card_no', 'expiry_year', 'expiry_month', 'cvv']
    }
};