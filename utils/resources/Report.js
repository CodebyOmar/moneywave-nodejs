'use strict'

const root = '/v1/report/transactions';

module.exports = {
    /**
     * Retrieves all transaction on a wallet {failed|pending|completed}
     * "status","date","type","currency","amount"
     */

    transactions:{
        method: 'post',
        endpoint: root,
        params: ["status","date","type","currency","amount"]
    } 
}