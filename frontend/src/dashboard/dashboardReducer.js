const INITIAL_STATE = {summary: {credit: 10, debt: 0}}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'BILLING_SUMMARY-FETCHED':
      return { ...state, summary: action.payload.data}   
      break;

    default:
      return state
      break;
  }
}