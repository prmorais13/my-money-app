const express = require('express')

module.exports = server => {
  // Define URL base para todas as rotas
  const router = express.Router()
  server.use('/api', router)

  // Rotas do cilco de pagamento
  const BillingCycle = require('../api/billingCycle/billingCycle')
  BillingCycle.register(router, '/billingCycles')
  
}