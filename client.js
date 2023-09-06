import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "qfpvwrri",
  dataset: "production",
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2023-04-04", // use current UTC date - see "specifying API version"!
});

export const builder = imageUrlBuilder(client);
