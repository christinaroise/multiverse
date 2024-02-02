import { createClient } from "@sanity/client/stega";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "v2021-03-25",
  useCdn: false,

  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});
