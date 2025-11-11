'use client'
import Link from 'next/link'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Shield, Heart, Apple } from 'lucide-react'
import { motion } from 'framer-motion'

// ¡¡¡IMPORTANTE!!!
// Estos IDs coinciden EXACTAMENTE con las claves
// que usaremos en la página de módulos.
const modules = [
  {
    id: 'arsenal-del-amante', // <--- ID Correcto
    title: 'Arsenal del Amante',
    description: '7 tácticas científicas para dominio total.',
    icon: <Shield className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 'acondicionamiento', // <--- ID Correcto
    title: 'Acondicionamiento',
    description: 'Técnicas de vitalidad masculina seguras.',
    icon: <Heart className="w-8 h-8 text-red-400" />,
  },
  {
    id: 'dieta-del-vigor', // <--- ID Correcto
    title: 'Dieta del Vigor',
    description: 'Nutrición molecular para rendimiento óptimo.',
    icon: <Apple className="w-8 h-8 text-green-400" />,
  },
]

// Este es el componente de tarjeta animada
function MotionCard({ id, title, description, icon, index }: {
  id: string,
  title: string,
  description: string,
  icon: React.ReactNode,
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={`/modulos/${id}`} className="h-full">
        <Card className="h-full hover:border-primary transition-colors cursor-pointer">
          <CardHeader>
            <div className="mb-4">{icon}</div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </motion.div>
  )
}

// Esta es la página de inicio
export default function Home() {
  return (
    <main className="container mx-auto min-h-screen max-w-5xl p-8 md:p-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          VIRIL Academy
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Potencia tu virilidad. Acceso exclusivo a métodos científicos
          para máximo rendimiento.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {modules.map((mod, index) => (
          <MotionCard
            key={mod.id}
            id={mod.id}
            title={mod.title}
            description={mod.description}
            icon={mod.icon}
            index={index}
          />
        ))}
      </div>
    </main>
  )
}