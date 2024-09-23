import {useState, useEffect} from 'react'
import axios from 'axios'
const PATH = process.env.REACT_APP_API_URL

export const useGetCountryInformation = countryCode => {
  const [countryInfo, setCountryInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCountryInfo = async () => {
      if (!countryCode) return

      try {
        const response = await axios.get(`${PATH}/countries/${countryCode}`)
        setCountryInfo(response.data)
      } catch (err) {
        setError('Somthing went wrong fetching country information')
      } finally {
        setLoading(false)
      }
    }

    fetchCountryInfo()
  }, [countryCode])

  return {countryInfo, loading, error}
}
