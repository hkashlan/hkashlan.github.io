import { defineNitroConfig } from 'nitro/config'

export default defineNitroConfig({
  preset: 'github-pages',
  prerender: {
    routes: ['/'],
    crawlLinks: true,
  }
})
