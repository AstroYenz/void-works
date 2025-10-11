import { Metadata } from 'next'


const APP_NAME = 'Void Works'
const APP_DESCRIPTION = 'A collection of products for the modern era'
const DEFAULT_URL = 'https://voidworks.io'

export function metadata(): Metadata {
  return {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    applicationName: APP_NAME,
    metadataBase: new URL(DEFAULT_URL),
    authors: [{ name: 'Void Works' }],
    openGraph: {
      type: 'website',
      siteName: APP_NAME,
      title: APP_NAME,
      description: APP_DESCRIPTION,
      url: DEFAULT_URL,
    },
    manifest: '/manifest.json',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
    },
    keywords: [
      'products',
      'agile',
      'estimation',
      'linear',
      'planning poker',
      'project management',
      'team collaboration',
      'scrum',
      'sprint planning',
      'agile estimation',
      'remote planning',
      'GBx',
      'GHB',
      'GBL',
      'harm reduction',
    ]
  }
}
