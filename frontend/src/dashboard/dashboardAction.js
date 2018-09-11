import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
  const request = axios.get(`${BASE_URL}/billingCycles/sumary`)
  return {
    type: 'BILLING_SUMMARY-FETCHED',
    payload: request
  }
}