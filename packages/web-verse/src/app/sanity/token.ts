import "server-only";
import { experimental_taintUniqueValue } from "react";

export const token = process.env.SANITY_READ_TOKEN;
export const contributorToken = process.env.SANITY_CONTRIBUTOR_TOKEN;
export const viewerToken = process.env.SANITY_VIEWER_TOKEN;

if (!token || !contributorToken) {
  throw new Error("Missing TOKEN");
}

experimental_taintUniqueValue(
  "Do not pass the sanity API read token to the client.",
  process,
  token
);
