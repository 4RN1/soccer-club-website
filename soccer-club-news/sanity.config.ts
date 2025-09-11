import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'soccer-club-news',

  projectId: '08kls80i',
  dataset: 'news',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
