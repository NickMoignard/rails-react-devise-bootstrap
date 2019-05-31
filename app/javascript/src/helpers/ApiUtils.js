const checkStatus = (response) => {
  console.log('[ApiUtils.checkStatus] response.ok', response.ok)
  console.log('[ApiUtils.checkStatus] response.status', response.status)
  if (response.ok) { return response }

  let error = new Error(response.statusText)
  error.response = response
  throw error
}

export const ApiUtils = {
  checkStatus
}
