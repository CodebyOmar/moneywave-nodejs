'use strict';

const root = '/v1/transfer/disburse/retry';

module.exports = {
    /**
     * retry a failed transaction
     * @params id, recipient_account_number, recipient_bank
     */
    retry: {
        method: 'post',
        endpoint: root,
        params: ['id', 'recipient_account_number', 'recipient_bank']
    }
};