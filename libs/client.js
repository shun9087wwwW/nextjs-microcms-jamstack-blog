import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "q9lh0ns3nf",
  apiKey: process.env.API_KEY,
});
