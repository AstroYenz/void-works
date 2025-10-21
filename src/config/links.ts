import { Activity, Mail } from 'lucide-react'


export interface FooterLink {
  label: string
  href: string
  icon?: typeof Activity
  external?: boolean
}

export const footerLinks: FooterLink[] = [
  {
    label: 'Privacy Policy',
    href: '/privacy',
  },
  {
    label: 'Status',
    href: 'https://status.voidworks.io',
    icon: Activity,
    external: true,
  },
  {
    label: 'Support',
    href: 'mailto:support@voidworks.io',
    icon: Mail,
  },
]
