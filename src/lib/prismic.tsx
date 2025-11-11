// src/lib/prismic.ts
import * as prismic from "@prismicio/client";

export const repositoryName = "supriya-blogs";

export const client = prismic.createClient(repositoryName);
