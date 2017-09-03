'use strict'

const root = 'v1/transfer';

module.exports = {
    /**@params "amount","apiKey","charge_with","charge_auth", "firstname", "lastname", "phonenumber", "email",
     *  "medium","sender_bank","recipient","redirect_url"
     */

    transfer: {
        method:'post',
        endpoint: root,
        params:["amount","apiKey","charge_with","charge_auth", "firstname", "lastname", "phonenumber", "email",
        "medium","sender_bank","recipient","redirect_url"]
    }
}