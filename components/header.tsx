// components/header.tsx
import Link from 'next/link';
import { ModeToggle } from './mode-toggle'; // Asumiendo que mode-toggle está en components/
import { Shield, Heart, Apple } from 'lucide-react'; // Iconos para el logo, o puedes usar una imagen

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            {/* Aquí va tu logo o nombre de la academia */}
            <Shield className="h-6 w-6" /> {/* Icono de ejemplo para logo */}
            <span className="inline-block font-bold">VIRIL Academy</span>
          </Link>
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/modulos"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Módulos
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Sobre Nosotros
            </Link>
            {/* Agrega más enlaces aquí si lo deseas */}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ModeToggle /> {/* Tu componente de alternancia de modo oscuro */}
          </nav>
        </div>
      </div>
    </header>
  );
}