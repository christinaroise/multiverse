import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {presentationTool} from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'studio-verse',

  projectId: 'y824x3if',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: 'https://multiverse-web-verse.vercel.app/preview',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
