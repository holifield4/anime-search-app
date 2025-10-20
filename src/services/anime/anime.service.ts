import { AxiosError } from "axios";
import http from "../service.provider";

export class AnimeService {
  static async getAllAnime(q?: string, page: number = 1) {
    try {
      const params = new URLSearchParams();
      if (q) params.append("q", q);
      params.append("page", page.toString());
      const res = await http.get(`/anime?${params}`);
      return res.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return e.response?.data.message;
      }
      throw e;
    }
  }

  static async getAnimeById(id: string) {
    try {
      const res = await http.get(`/anime/${id}`);
      return res.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return e.response?.data.message;
      }
      throw e;
    }
  }
}
