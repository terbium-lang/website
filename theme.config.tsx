// Derived from https://github.com/shuding/nextra/blob/main/docs/theme.config.tsx

import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import {useConfig, useTheme} from 'nextra-theme-docs'

import Image from "next/image";
import LightLogo from "/public/assets/dark_banner.svg"
import DarkLogo from "/public/assets/light_banner.svg"
import {useEffect, useState} from "react";

const logo = () => {
  const theme = useTheme();
  const [resolved, setResolved] = useState<string>();
  useEffect(() => setResolved(theme.resolvedTheme), [theme])

  return (
    <span>
      <Image src={resolved == "dark" ? DarkLogo : LightLogo} alt="Terbium" height={32} />
    </span>
  )
}

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/terbium-lang/terbium'
  },
  docsRepositoryBase: 'https://github.com/terbium-lang/website/blob/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Terbium'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#0586ff" />
        <meta name="theme-color" content="#0586ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="A high-level language that doesn't compromise in performance."
        />
        <meta
          name="og:description"
          content="A high-level language that doesn't compromise in performance."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="terbium.dev" />
        <meta name="twitter:url" content="https://terbium.dev" />
        <meta
          name="og:title"
          content={title ? title + ' – Terbium' : 'Terbium'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Terbium" />
        <link rel="icon" href="/assets/favicon.ico" />
      </>
    )
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} jay3332 and other maintainers of Terbium.
        </p>
      </div>
    )
  },
}

export default config
