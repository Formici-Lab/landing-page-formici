import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // `useCdn: true` serves cached, published content from Sanity's global CDN —
  // fast and, combined with a public dataset, requires no API token at all.
  useCdn: true,
});
