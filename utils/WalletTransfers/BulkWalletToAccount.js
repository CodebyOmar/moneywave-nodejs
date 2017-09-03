'use strict';

const root = '/v1/disburse/queue';

module.exports = {
    /**
     * transfer funds from wallet to more than one bank acount
     * @params lock, instantQueue, recipients[], name , currency, senderName, ref
     */
    transfer: {
        method: 'post',
        endpoint: root,
        params: ['lock', 'recipients', 'currency', 'senderName', 'ref', 'name', 'instantQueue']
    }
};