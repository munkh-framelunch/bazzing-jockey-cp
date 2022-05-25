import Axios from 'axios'

/* eslint-disable no-undef */
export function getSpreadsheetJson(option, callback) {
  Axios.get(
    `https://spreadsheets.google.com/feeds/list/${option.key}/${option.worksheetId}/public/values?alt=json`
  ).then((response) => {
    callback(response.data.feed.entry.slice(0, option.length))
  })
}
