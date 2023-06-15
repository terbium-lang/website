import nextra from 'nextra'
import { getHighlighter } from 'shiki'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      getHighlighter: options => getHighlighter({
        ...options,
        langs: [
          {
            id: 'terbium',
            scopeName: 'source.terbium',
            aliases: ['tb', 'trb'],
            path: '../../public/terbium.tmLanguage.json',
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