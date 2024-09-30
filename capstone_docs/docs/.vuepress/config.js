import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Capstone Documentation',
  description: 'Documentation for the Capstone Cluster',

  publicPath: '/capstone_docs/',

  theme: defaultTheme({
    logo: '/capstone_logo_path.svg',

    navbar: [
      {text: "Home", link: '/'},
      {text: "Introduction", link: '/introduction'},
      {text: "Connecting", link:'/connecting'},
      {
        text: "Using",
        children: [
          {text: "Accessing Software", link: '/docs/software'},
          {text: "Storing Data", link: '/docs/data'},
          {text: "Running Jobs", link: '/docs/jobs'},
          {text: "Transferring Data", link: '/docs/transfer'},
        ]
      },
      {text: "Help", link:'/help'}
    ],
  }),

  bundler: viteBundler(),
})
