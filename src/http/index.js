import axios from "axios"
const baseUrl = "https://api.sdb.uz/dev"
// const baseUrl = "http://localhost:3333/dev";

const $host = axios.create({
	baseURL: baseUrl
})

const $authHost = axios.create({
	baseURL: baseUrl
})

$authHost.interceptors.request.use(
	(config) => {
		const accessToken = localStorage.getItem("accessToken")

		if (accessToken) {
			config.headers["x-auth-token"] = accessToken
			config.headers['Authorization'] = `Bearer ${accessToken}`
		}
		return config
	},
	(error) => {
		Promise.reject(error)
	}
)

$authHost.interceptors.response.use(
	(response) => {
		return response
	},
	function (error) {
		const originalRequest = error.config
		let refreshToken = localStorage.getItem("refreshToken")
		if (
			refreshToken &&
            error.response.status === 401 &&
            !originalRequest._retry
		) {
			originalRequest._retry = true
			return $authHost
				.post(`/v1/auth/refresh`, { refreshToken: refreshToken })
				.then((res) => {
					if (res.status === 200) {
						localStorage.setItem("accessToken", res.data.accessToken)
						console.log("Access token refreshed!")
						return $authHost(originalRequest)
					}
				})
		}
		return Promise.reject(error)
	}
)

const api = {
	login: (body) => {
		return $authHost.post(`/v1/auth/login`, body)
	},
	refreshToken: (body) => {
		return $authHost.post(`/v1/auth/refresh`, body)
	},
	logout: (body) => {
		return $authHost.delete(`/v1/auth/logout`, body)
	},
	verify: (body) => {
		return $authHost.post(`/v1/auth/verify`, body)
	},
}

export {api, $authHost, $host}