const  AccountToAccount        = require('./AccountTransfers/AccountToAccount')
      ,CardToAccount           = require('./AccountTransfers/CardToAccount')
      ,CardTokenization        = require('./resources/CardTokenization')
      ,Banks                   = require('./resources/Banks')
      ,CardEnquiry             = require('./resources/CardEnquiry')
      ,Report                  = require('./resources/Report')
      ,ValidateAccountNumber   = require('./resources/ValidateAccountNumber')
      ,GetTotalChargeToCard    = require('./transactions/GetTotalChargeToCard')
      ,PreviousCardToAccount   = require('./transactions/PreviousCardToAccount')
      ,PreviousWalletToAccount = require('./transactions/PreviousWalletToAccount')
      ,RetryFailedTransaction  = require('./transactions/RetryFailedTransaction')
      ,TranStatusCardToAccount = require('./transactions/TransStatusCardToAccount')
      ,CreateSubwallet         = require('./Wallet/CreateSubWallet')
      ,GetWalletBalance        = require('./Wallet/GetWalletBalance')
      ,AccountToWallet         = require('./WalletFunding/AccountToWallet')
      ,CardToWallet            = require('./WalletFunding/CardToWallet')
      ,PayWithInternetBanking  = require('./WalletFunding/PayWithInternetBanking')
      ,BulkWalletToAccoutTransfer = require('./WalletTransfers/BulkWalletToAccount')
      ,WalletToAccoutTransfer     = require('./WalletTransfers/WalletToAccoutTransfer') 
      ,WalletToWallet             = require('./WalletTransfers/WalletToWallet');

module.exports = {
    "AccountToAccount":AccountToAccount,
    "CardToAccount":CardToAccount,
    "CardTokenization":CardTokenization,
    "Banks":Banks,
    "CardEnquiry":CardEnquiry,
    "Report":Report,
    "ValidateAccountNumber":ValidateAccountNumber,
    "GetTotalChargeToCard":GetTotalChargeToCard,
    "PreviousCardToAccount":PreviousCardToAccount,
    "PreviousWalletToAccount":PreviousWalletToAccount,
    "RetryFailedTransaction":RetryFailedTransaction,
    "TranStatusCardToAccount":TranStatusCardToAccount,
    "CreateSubwallet":CreateSubwallet,
    "GetWalletBalance":GetWalletBalance,
    "AccountToWallet":AccountToWallet,
    "CardToWallet":CardToWallet,
    "PayWithInternetBanking":PayWithInternetBanking,
    "BulkWalletToAccoutTransfer":BulkWalletToAccoutTransfer,
    "WalletToAccoutTransfer":WalletToAccoutTransfer,
    "WalletToWallet":WalletToWallet
};