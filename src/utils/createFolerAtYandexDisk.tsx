
import axios from 'axios'
import { serverUrl } from '../contains'

export const createFolerAtYandexDisk = async (userId: string) => {
  try {
    if (!userId) return false
    console.log(userId)
    const response = await axios.post(`${serverUrl}/createFolder`, {
      userId: userId
    })
    return true
  } catch (error) {
    console.error("Ошибка при создании папки пользоваьеля на Яндекс.Диск ,", error)
  }
}