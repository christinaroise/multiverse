import { SanityDocument } from "next-sanity";
import { loadQuery } from "./sanity/lib/store";
import { HOME_QUERY } from "./sanity/lib/queries";

export default async function Home() {
  const initial = await loadQuery<SanityDocument[]>(HOME_QUERY);

  console.log(initial.data);

  return <p>hey</p>;
}
