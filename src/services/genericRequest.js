import axios from 'axios'

export const genericRequestPost = ({
	url,
	methodUrl,
	data,
	token,
	navigation,
}) => {
	if (token) {
		return axios
			.post(`${url}${methodUrl}`, data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.catch(error => {
				if (error.response.status === 401) {
					navigation.navigate('Login')
				}
				return error
			})
	} else {
		return axios
			.post(`${url}${methodUrl}`, data)
			.then(response => {
				return response
			})
			.catch(error => {
				if (error.response) {
					// Propaga el error detallado
					throw error.response
				}
			})
	}
}

export const genericRequestGet = ({
	url,
	methodUrl,
	data,
	token,
	navigation,
}) => {
	if (data) {
		return axios
			.get(`${url}${methodUrl}/${data}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.catch(error => {
				if (error.response.status === 401) {
					navigation.navigate('Login')
				}
				if (error.response) {
					// Propaga el error detallado
					throw error.response
				}
			})
	} else if (!data) {
		return axios
			.get(`${url}${methodUrl}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.catch(error => {
				if (error.response.status === 401) {
					navigation.navigate('Login')
				}
				if (error.response) {
					// Propaga el error detallado
					throw error.response
				}
			})
	} else if (!!data && !!token) {
		return axios.get(`${url}${methodUrl}`, {}).catch(error => {
			if (error.response) {
				// Propaga el error detallado
				throw error.response
			}
		})
	}
}

export const genericRequestPath = ({
	url,
	methodUrl,
	data,
	newData,
	token,
	navigation,
}) => {
	return axios
		.patch(`${url}${methodUrl}/${data}`, newData, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.catch(error => {
			if (error.response.status === 401) {
				navigation.navigate('Login')
			}
			if (error.response) {
				// Propaga el error detallado
				throw error.response
			}
		})
}
export const genericRequestDelete = ({
	url,
	methodUrl,
	data,
	token,
	navigation,
}) => {
	return axios
		.delete(`${url}${methodUrl}/${data}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.catch(error => {
			if (error.response.status === 401) {
				navigation.navigate('Login')
			}
			if (error.response) {
				// Propaga el error detallado
				throw error.response
			}
		})
}
