import React from 'react'

export function selectTab(tabId) {
  return {
    type: 'TAB_SELECTED',
    payload: tabId
  }
}