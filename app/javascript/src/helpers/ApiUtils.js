const checkStatus = (response) => {
  if (response.ok) { return response }

  let error = new Error(response.statusText)
  error.response = response
  throw error
}

export default {
  checkStatus
}
