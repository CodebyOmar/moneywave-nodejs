'use strict'

const root = '/v1/transfer';

module.exports = {
    /**@params "firstname","lastname","email","phonenumber","charge_with","recipient","sender_account_number",
     * "sender_bank","apiKey","amount","fee","medium","redirect_url"
     */

    transfer: {
        method: 'post',
        endpoint: root,
        params: ["firstname","lastname","email","phonenumber","charge_with","recipient","sender_account_number",
        "sender_bank","apiKey","amount","fee","medium","redirect_url"]
    },

    validate: {
        method: 'post',
        endpoint: [root, "/charge/auth/account"].join(''),
        params: ["transactionRef","authType", "authValue"]
    }
}