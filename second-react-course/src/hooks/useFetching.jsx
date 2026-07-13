import { useState } from "react"

export const useFetching = (callback) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const fetching = async (id, limit, page) => {
		try {
			setIsLoading(true)
			await callback(id, limit, page)
		} catch(error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	return[fetching, isLoading, error]
}