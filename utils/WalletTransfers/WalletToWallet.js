'use strict'

const root = '/v1/wallet/transfer';

module.exports = {
    /** transfer funds from wallet to wallet
     * @params "sourceWallet","recipientWallet","amount","currency","lock" 
    */

    transfer: {
        method: 'post',
        endpoint: root,
        params: ["sourceWallet","recipientWallet","amount","currency","lock" ]
    }
}