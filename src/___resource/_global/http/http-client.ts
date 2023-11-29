import { singleton } from 'tsyringe'

@singleton()
export class HttpClient {
  async get<T>(url: RequestInfo, option?: RequestInit): Promise<T> {
    const response = await fetch(
      (process.env.NEXT_PUBLIC_HTTP_BASE_URL as string) + url,
      option
    )
    if (!response.ok) {
      throw new Error('Failed to fetch')
    }
    return response.json()
  }
}
