import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          Bienvenido a VIRIL
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Tu nueva página de inicio.
        </p>
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <Link href="/modulos">Ir a la Academia</Link>
        </Button>
      </div>
    </main>
  )
}