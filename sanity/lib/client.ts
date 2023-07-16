import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion : "2023-07-15",
  dataset : "production",
  projectId : "m7lfbh4k",
  useCdn : true,
  token: process.env.SANITY_ACCESS_TOKEN,
})
