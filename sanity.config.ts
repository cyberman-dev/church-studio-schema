import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: 'church-events',
  title: 'Church Events Studio',
  projectId: 's8bpjbaw',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {types: schemaTypes},
})

