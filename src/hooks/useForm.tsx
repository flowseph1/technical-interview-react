import { useState } from "react";
import { searchGif } from "../lib/api-request";
import { ApiRequest } from "../types/gif";

export function useForm() {
  const [search, setSearch] = useState("");

  const [limit, setLimit] = useState("");

  const [gifList, setGifList] = useState<ApiRequest | null>(null);

  const handleButton = async (search: string, limit?: number) => {
    const data = await searchGif(search, limit);
    setGifList(data);
  };

  return {
    search,
    setSearch,
    limit,
    setLimit,
    gifList,
    handleButton,
  };
}
