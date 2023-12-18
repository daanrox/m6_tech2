import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Container } from '@/components/container'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '< Daanrox />',
  description: 'Portifólio com os projetos desenvolvidos por Daanrox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR"
    
    >
      <head>
      <link rel="icon" href="rox-footer.png" />
      </head>
      <body className={inter.className}>
        <Container>
          <Header/>
          {children}
        </Container>
        <Footer/>
      
        </body>
    </html>
  )
}
