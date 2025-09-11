import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '08kls80i', // replace with your Sanity project ID
  dataset: 'news',
  apiVersion: '2025-09-11',
  useCdn: true,
})

export default client
