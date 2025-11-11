// components/header.tsx
import Link from 'next/link';
import Image from 'next/image'; // ¡Importa el componente Image de Next.js!
import { ModeToggle } from './mode-toggle';
import { Shield, Heart, Apple } from 'lucide-react'; 

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            {/* INICIO DEL CAMBIO: Usar tu logo */}
            <Image
              src="/viril-logo.png" // Ruta a tu logo en la carpeta public
              alt="VIRIL Academy Logo"
              width={100} // Ajusta el ancho según sea necesario
              height={30} // Ajusta el alto según sea necesario
              className="h-auto" // Para mantener la proporción
            />
            {/* FIN DEL CAMBIO */}
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
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}