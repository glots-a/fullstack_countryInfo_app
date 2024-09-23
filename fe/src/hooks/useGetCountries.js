import {useState, useEffect} from 'react'
import axios from 'axios'
const PATH = process.env.REACT_APP_API_URL

export const useGetCountries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${PATH}/countries`)
        setCountries(response.data)
      } catch (err) {
        setError('Your response have failed')
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  return {countries, loading, error}
}
