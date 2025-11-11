// components/footer.tsx
import Link from 'next/link';
import { Github, Twitter } from 'lucide-react'; // Iconos de redes sociales

export function Footer() {
  return (
    <footer className="border-t bg-background py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} VIRIL Academy. Todos los derechos reservados.
          </p>
          <Link
            href="/privacy"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Privacidad
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Términos
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-right">
          Construido con❤️ por Rodrigo.
        </p>
      </div>
    </footer>
  );
}