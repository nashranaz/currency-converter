const API_URL = 'https://open.er-api.com/v6/latest'

export async function fetchExchangeRate(fromCurrency, toCurrency) {
  const response = await fetch(`${API_URL}/${fromCurrency}`)

  if (!response.ok) {
    throw new Error('Unable to reach the exchange rate service.')
  }

  const data = await response.json()

  if (data.result === 'error' || !data.rates || !data.rates[toCurrency]) {
    throw new Error('Exchange rate data is unavailable for this pair.')
  }

  return {
    rate: data.rates[toCurrency],
    updatedAt: data.time_last_update_unix
      ? new Date(data.time_last_update_unix * 1000)
      : new Date(),
  }
}
