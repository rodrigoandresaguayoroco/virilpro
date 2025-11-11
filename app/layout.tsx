// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './theme-provider'
import { Header } from '@/components/header' // Importa el Header
import { Footer } from '@/components/footer' // Importa el Footer

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VIRIL Academy',
  description: 'Potencia tu virilidad. Acceso exclusivo a métodos científicos para máximo rendimiento.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header /> {/* Renderiza el Header */}
            <div className="flex-1">
              {children}
            </div>
            <Footer /> {/* Renderiza el Footer */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}