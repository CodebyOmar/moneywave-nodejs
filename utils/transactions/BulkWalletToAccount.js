'use strict';

const root = '/v1/disburse/bulk';

module.exports = {
    /**
     * transfer funds from wallet to more than one bank acount
     * @param lock, amount, recipients[], currency, senderName, ref
     */
    transfer: {
        method: 'post',
        endpoint: root,
        params: ['lock', 'amount', 'recipients', 'currency', 'senderName', 'ref']
    }
};