import { request } from './apiConstants'
const endPoint = '/characters'


export const getAll = (signal) => request(`${endPoint}?category=Breaking+Bad`, signal)
export const getById = (characterId, signal) => request(`${endPoint}/${characterId}`, signal)