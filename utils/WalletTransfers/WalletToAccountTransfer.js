'use strict';

const root = '/v1/disburse';

module.exports = {
    /**
     * transfer from wallet to a single account
     * @params lock, amount, bankcode, accountNumber, currency, senderName, ref
     */
    transfer: {
        method: 'post',
        endpoint: root,
        params: ['lock', 'amount', 'bankcode', 'accountNumber', 'currency', 'senderName', 'ref']
    }
};