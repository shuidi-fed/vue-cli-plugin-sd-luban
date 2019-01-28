import seaAxios from 'seaPublic/api/seaAxios'

export const getABC = (body) => {
  return seaAxios.post('/abc/def/ghi', body)
}