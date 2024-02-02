import { SanityDocument } from "next-sanity";
import { loadQuery } from "./sanity/store";
import { HOME_QUERY } from "./sanity/queries";

export default async function Home() {
  const initial = await loadQuery<SanityDocument[]>(HOME_QUERY);

  return <p>{initial.data.title}</p>;
}
