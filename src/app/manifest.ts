import type { MetadataRoute } from 'next'


export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Void Works',
    short_name: 'Void Works',
    description: 'Developer tools for the modern era',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
