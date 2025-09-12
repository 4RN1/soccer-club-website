import { createClient } from '@sanity/client'

export const clientGallery = createClient({
  projectId: '08kls80i',
  dataset: 'production', // where your photos are
  apiVersion: '2025-09-11',
  useCdn: true,
})
