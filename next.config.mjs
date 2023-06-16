import nextra from 'nextra'
import { getHighlighter } from 'shiki'
import { readFileSync } from 'fs'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: true,
  flexsearch: true,
  defaultShowCopyCode: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      // theme: {
      //   dark: JSON.parse(readFileSync('./public/syntax/arctis_dark.json', 'utf-8')),
      //   light: JSON.parse(readFileSync('./public/syntax/arctis_light.json', 'utf-8')),
      // },
      getHighlighter: options => getHighlighter({
        ...options,
        langs: [
          {
            id: 'terbium',
            scopeName: 'source.terbium',
            aliases: ['tb', 'trb'],
            path: '../../public/syntax/terbium.tmLanguage.json',
          },
          'shell'
        ]
      })
    }
  },
})

export default withNextra({
  reactStrictMode: true,
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true
  },
  experimental: {
    optimizeCss: true,
  },
})