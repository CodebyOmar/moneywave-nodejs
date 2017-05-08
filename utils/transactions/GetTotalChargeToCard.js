'use strict';

const root = '/v1/get-charge';

module.exports = {
    /**
     * Get the total amount you will be charge for a transaction
     * @param amount, fee
     */
    getTotalCardCharge:{
        method: 'post',
        endpoint: root,
        params: ['amount', 'fee']
    }
};