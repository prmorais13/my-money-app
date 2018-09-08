const restful = require('node-restful')
const mongoose = restful.mongoose

const credtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
})

const debtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
  status: { type: String, required: true, uppercase: true,
          enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const bllingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true },
  credits: [credtSchema],
  debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', bllingCycleSchema)
