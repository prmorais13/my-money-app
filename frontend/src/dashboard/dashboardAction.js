import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getSumary() {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`)
  return {
    type: 'BILLING_SUMMARY-FETCHED',
    payload: request
  }
}