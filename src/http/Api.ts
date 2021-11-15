
import { IApi } from '@/types/Intarfaces'
import axios from 'axios'

export class UnsplashApi {
private readonly apiUri = 'https://api.unsplash.com/search/photos'
readonly appId = process.env.VUE_APP_NOT_SECRET_CODE

async getPhoto (value:string, page:number):Promise<IApi> {
  try {
    const { data } = await axios.get(`${this.apiUri}`, {
      params: {
        client_id: this.appId,
        query: value,
        page
      }
    })
    return data
  } catch (e) {
    console.error(e)
    return {
      results: [],
      total: 0,
      total_pages: 0
    }
  }
}
}
