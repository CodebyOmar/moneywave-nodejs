const CardTokenization         = require('./resources/CardTokenization')
      ,GetBanks                = require('./resources/GetBanks')
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
    CardTokenization: CardTokenization,
    GetBanks: GetBanks,
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