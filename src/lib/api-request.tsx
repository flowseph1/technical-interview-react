import { ApiRequest } from "../types/gif";

export async function searchGif(
  query: string,
  limit?: number
): Promise<ApiRequest> {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa`
  );

  const data = await res.json();

  return data;
}
