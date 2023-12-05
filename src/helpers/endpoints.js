const API_URL = 'http://174.129.92.139:8001/api/v1'
// const API_URL = 'http://localhost:8080/api/v1'

export const REGISTER_USER_ENDPOINT = `${API_URL}/auth/register`
export const LOGIN_USER_ENDPOINT = `${API_URL}/auth/login`
export const GET_RANDOM_PRODUCTS = `${API_URL}/products?order=random`
export const GET_CURRENT_PRODUCT = `${API_URL}/products`
export const CREATE_PRODUCT = `${API_URL}/products`
export const DELETE_PRODUCT = `${API_URL}/products`
export const GET_ALL_CATEGORIES = `${API_URL}/categories`
export const CREATE_CATEGORIES = `${API_URL}/categories`