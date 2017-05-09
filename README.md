# moneywave-nodejs
A library for moneywave API

### Installation
```js 
npm install moneywave-nodejs
```
### Usage
```js
//require the library, pass your merchant apiKey and secret
const moneywave = require('moneywave-nodejs')('apiKey', 'secret');

//make a call to the utils/method
//Utils can be either a resource or a transaction
let body = {
    "firstname": "Umar",
    "lastname": "Abdullahi",
    "phonenumber": "+2348133221100",
    "email": "umar@gmail.com",
    "recipient_bank": "DIAMOND BANK",
    "recipient_account_number": "0213092331",
    "card_no": "5689103345821829",
    "cvv": "222",
    "expiry_year": "2020",
    "expiry_month": "02",
    "apiKey": "nhvewq9039fjdfhg1290djjd",
    "amount": 50000,
    "fee": 100,
    "redirecturl": "http://localhost:8080/",
    "medium": "web"
};
//transfer
moneywave.CardToAccount.transfer(body, function(error, body){
    if(!error)
    {
        //doSomething
    }else{
        //doSomething
    }  
});
```

### Utils
|  {Resource}.{method}                 |               parameters           |   
|--------------------------------------|------------------------------------|
| **Card.tokenize**                    |`['card_no', 'expiry_year', 'expiry_month', 'cvv']`|
| **Banks.get**                        | no parameters                      |
| **WalletBalance.get**                | no parameters                      |
| **PreviousCardToAccount.get**        | no parameters                      |
| **PreviousWalletToAccount.get**      | `['ref']`                          |                                                            
| {Transaction}.{method}               |           parameters               |
|--------------------------------------|------------------------------------|
| **FailedTransaction.retry**          | `['id', 'recipient_account_number', 'recipient_bank']`|
| **ValidateAccountNumber.validate**   | `['account_number', 'bank_code']`|
| **BulkWalletToAccout.transfer**      | `['lock', 'amount', 'recipients', 'currency', 'senderName', 'ref']`|
| | | |                                
| **CardToAccount.transfer**           | `['firstname', 'lastname', 'phonenumber', 'email', 'recipient_bank',`                       |                                      | `'recipient_account_number', 'card_no', 'cvv', 'expiry_year', 'expiry_month', 'apiKey',`|   |                                      | `'amount', 'fee', 'redirecturl', 'medium']`|
| **CardToAccount.validate**           | `['transactionRef', 'authType', 'authValue']`|
| **CardToAccount.validateVerve**      | `['transactionRef', 'otp']`  |
| | | |                                                               |
| **CardToWallet.transfer**            | `['firstname', 'lastname', 'phonenumber', 'email', 'recipient', 'card_no', 'cvv',`          |                                      | `'expiry_year', 'expiry_month', 'apiKey', 'amount', 'fee', 'redirecturl', 'medium']`|
| **TotalChargeToCard.get**            | `['amount', 'fee']`           |
| **WalletToAccountTransfer.transfer** | `['lock', 'amount', 'bankcode', 'accountNumber', 'currency', 'senderName', 'ref']`|

This was built according to the documentation on https://moneywave.flutterwave.com/api

### Heads Up
Please star the repo and feel free to report any issue. Thank you!