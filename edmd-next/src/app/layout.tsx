import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Escola Dom Marcolino Dantas – EDMD | Natal/RN',
  description: 'Escola Católica Vicentina fundada em 1950. Educação de qualidade orientada por princípios cristãos e vicentinos em Natal, Rio Grande do Norte.',
  keywords: 'escola, natal, rn, vicentina, educação infantil, ensino fundamental, ensino médio, dom marcolino',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
