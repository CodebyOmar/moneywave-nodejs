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
    WalletBalance: GetWalletBalance,
    PreviousCardToAccount: PreviousCardToAccount,
    PreviousWalletToAccount: PreviousWalletToAccount,
    FailedTransaction: RetryFailedTransaction,
    ValidateAccountNumber: ValidateAccountNumber,
    BulkWalletToAccout: BulkWalletToAccoutTransfer,
    CardToAccount: CardToAccount,
    CardToWallet: CardToWallet,
    TotalChargeToCard: GetTotalChargeToCard,
    WalletToAccountTransfer: WalletToAccountTransfer
};