const CardTokenization         = require('./resources/CardTokenization')
      ,Banks                = require('./resources/Banks')
      ,GetWalletBalance        = require('./resources/GetWalletBalance')
      ,PreviousCardToAccount   = require('./resources/PreviousCardToAccount')
      ,PreviousWalletToAccount = require('./resources/PreviousWalletToAccount')
      ,RetryFailedTransaction  = require('./resources/RetryFailedTransaction')
      ,ValidateAccountNumber   = require('./resources/ValidateAccountNumber')
      ,BulkWalletToAccoutTransfer = require('./transactions/BulkWalletToAccount')
      ,CardToAccount              = require('./transactions/CardToAccount')
      ,CardToWallet               = require('./transactions/CardToWallet')
      ,GetTotalChargeToCard       = require('./transactions/GetTotalChargeToCard')
      ,WalletToAccountTransfer    = require('./transactions/WalletToAccountTransfer');

module.exports = {
    Card: CardTokenization,
    Banks: Banks,
    GetWalletBalance: GetWalletBalance,
    PreviousCardToAccount: PreviousCardToAccount,
    PreviousWalletToAccount: PreviousWalletToAccount,
    RetryFailedTransaction: RetryFailedTransaction,
    ValidateAccountNumber: ValidateAccountNumber,
    BulkWalletToAccoutTransfer: BulkWalletToAccoutTransfer,
    CardToAccount: CardToAccount,
    CardToWallet: CardToWallet,
    GetTotalChargeToCard: GetTotalChargeToCard,
    WalletToAccountTransfer: WalletToAccountTransfer
};