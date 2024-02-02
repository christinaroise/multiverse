import { createClient } from "@sanity/client/stega";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "v2021-03-25",
  useCdn: false,

  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});
