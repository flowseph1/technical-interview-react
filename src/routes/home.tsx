import { Form } from "../components/form";
import { GifDisplay } from "../components/gif-display";
import { useForm } from "../hooks/useForm";

export function Home() {
  const { search, setSearch, limit, setLimit, gifList, handleButton } =
    useForm();

  return (
    <div className="flex-1 flex flex-col gap-10">
      <Form
        search={search}
        setSearch={setSearch}
        limit={limit}
        setLimit={setLimit}
        handleButton={handleButton}
      />
      <GifDisplay gifList={gifList?.data} />
    </div>
  );
}
