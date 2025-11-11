import * as prismic from "@prismicio/client";

export const repositoryName = "supriya-blogs";

export const client = prismic.createClient(repositoryName, {
  // If you have an access token, add it here:
  // accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});
