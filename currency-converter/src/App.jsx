import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CurrencyInput from './components/CurrencyInput'
import CurrencySelector from './components/CurrencySelector'
import SwapButton from './components/SwapButton'
import RatePreview from './components/RatePreview'
import ConvertButton from './components/ConvertButton'
import ConversionResult from './components/ConversionResult'
import CurrencyInfo from './components/CurrencyInfo'
import RateInformation from './components/RateInformation'
import Footer from './components/Footer'
import { fetchExchangeRate } from './services/currencyApi'

function App() {
  const [amount, setAmount] = useState('1000')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [rate, setRate] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [updatedAt, setUpdatedAt] = useState(null)
  const [copied, setCopied] = useState(false)
  const [swapping, setSwapping] = useState(false)

  const convertCurrency = async () => {
    const numericAmount = Number(amount)
    if (!amount || !Number.isFinite(numericAmount) || numericAmount <= 0) {
      setError('Enter a valid amount greater than zero.')
      return
    }

    setLoading(true)
    setError('')
    try {
      const exchange = await fetchExchangeRate(fromCurrency, toCurrency)
      setRate(exchange.rate)
      setResult(numericAmount * exchange.rate)
      setUpdatedAt(exchange.updatedAt)
      setCopied(false)
    } catch (requestError) {
      setError(requestError.message || 'Something went wrong while converting currency.')
      setResult(null)
    } finally {
      setLoading(false)
    }
  }

  const swapCurrencies = () => {
    setSwapping(true)
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setRate(null)
    setResult(null)
    setError('')
    window.setTimeout(() => setSwapping(false), 500)
  }

  const copyResult = async () => {
    if (result === null) return
    try {
      await navigator.clipboard.writeText(`${result.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${toCurrency}`)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setError('Could not copy the result. Please copy it manually.')
    }
  }

  const changeFromCurrency = (currency) => {
    setFromCurrency(currency)
    setRate(null)
    setResult(null)
    setError('')
  }

  const changeToCurrency = (currency) => {
    setToCurrency(currency)
    setRate(null)
    setResult(null)
    setError('')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070812] font-sans text-slate-200">
      <div className="pointer-events-none absolute left-[-8rem] top-24 size-72 animate-pulse rounded-full bg-violet-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-7rem] top-[30rem] size-80 animate-pulse rounded-full bg-cyan-500/10 blur-[110px] [animation-delay:1s]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

      <Navbar />
      <main>
        <Hero />
        <section id="converter" className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Currency converter</p>
                  <h2 className="mt-1 text-xl font-bold text-white">Exchange calculator</h2>
                </div>
                <span className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1 text-xs text-emerald-300 sm:block">Live market</span>
              </div>

              <div className="space-y-5">
                <CurrencyInput amount={amount} onAmountChange={setAmount} />
                <div className="grid items-end gap-3 sm:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)]">
                  <CurrencySelector label="From" value={fromCurrency} onChange={changeFromCurrency} />
                  <div className="flex justify-center pb-0 sm:pb-0.5">
                    <SwapButton onSwap={swapCurrencies} rotating={swapping} />
                  </div>
                  <CurrencySelector label="To" value={toCurrency} onChange={changeToCurrency} />
                </div>
                <RatePreview fromCurrency={fromCurrency} toCurrency={toCurrency} rate={rate} />
                {error && <p role="alert" className="rounded-lg border border-rose-400/20 bg-rose-400/[0.08] px-4 py-3 text-sm text-rose-300">{error}</p>}
                <ConvertButton loading={loading} onConvert={convertCurrency} />
                {result !== null && (
                  <ConversionResult result={result} amount={amount} toCurrency={toCurrency} onCopy={copyResult} copied={copied} />
                )}
              </div>
            </div>

            <aside id="insights" className="grid gap-5 self-start sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Currency pair</p>
                <div className="space-y-3">
                  <CurrencyInfo code={fromCurrency} />
                  <CurrencyInfo code={toCurrency} />
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">Rate information</p>
                <RateInformation updatedAt={updatedAt} />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
