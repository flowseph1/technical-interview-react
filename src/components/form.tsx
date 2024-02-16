import { FormEvent } from "react";

export function Form({
  search,
  setSearch,
  limit,
  setLimit,
  handleButton,
}: {
  search: string;
  setSearch: (search: string) => void;
  limit: string;
  setLimit: (limit: string) => void;
  handleButton: (search: string, limit?: number) => void;
}) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleButton(search, Number(limit));
  };
  return (
    <div className="flex gap-2">
      <form onSubmit={(e) => handleSubmit(e)} className="flex gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <label htmlFor="search" className="block">
              search GIF
            </label>

            <Input value={search} setValue={setSearch} />
            {/* <input
              className="bg-neutral-100 p-"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="search"
            /> */}
          </div>

          <div className="flex gap-2">
            <label htmlFor="limit" className="block">
              Limit
            </label>

            <Input value={limit} setValue={setLimit} />

            {/*  <input
              className="bg-neutral-100"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              id="limit"
            /> */}
          </div>
        </div>

        <button type="submit" className="border rounded-md p-2">
          <span>Buscar</span>
          <span>🔍</span>
        </button>
      </form>
    </div>
  );
}

function Input({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <input
      className="bg-neutral-100 p-2 rounded-lg"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      id="limit"
    />
  );
}
