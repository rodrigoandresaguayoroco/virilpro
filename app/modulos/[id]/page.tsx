'use client'
import { motion, Variants } from 'framer-motion'; // ¡Importa motion y Variants!
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { arsenalData, acondicionamientoData, dietaData } from '@/lib/modules-data'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'; // ¡Necesitamos un componente Button!

// Interfaz para definir la estructura de los datos del módulo

// Mapa para acceder a los datos de los módulos
// POR ESTO:
const modulesDataMap: { [key: string]: any } = {
  'arsenal-del-amante': arsenalData,
  'acondicionamiento': acondicionamientoData,
  'dieta-del-vigor': dietaData,
}
// Este es el componente principal de la página
export default function ModuloPage({ params }: { params: { id: string } }) {
  const { id } = params
  const moduleData = modulesDataMap[id]

  if (!moduleData) {
    notFound()
  }

  // Define las animaciones para los elementos de la página
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="container flex-1 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-8 text-center">
        <Badge variant="secondary" className="mb-4 text-lg p-2">
          Módulo
        </Badge>
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-4">
          {moduleData.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {moduleData.description}
        </p>
        <motion.div variants={itemVariants} className="mt-8">
            <Button size="lg" className="text-lg px-8 py-6">Acceder al Módulo Ahora</Button>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-3xl">Descripción Detallada</CardTitle>
            <CardDescription className="text-base leading-relaxed mt-4">
              {moduleData.longDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Temas Clave:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {moduleData.itemsIncluded.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span> {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div>
          <motion.div variants={itemVariants} className="mb-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-3xl">Lo que aprenderás</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {moduleData.itemsIncluded.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg">
                        {item.split(":")[0]}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.split(":")[1] || "Sin descripción adicional."}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-3xl text-red-400">A tener en cuenta</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {moduleData.forbidden.map((item, index) => (
                    <AccordionItem key={index} value={`forbidden-item-${index}`}>
                      <AccordionTrigger className="text-lg text-red-300">
                        {item.split(":")[0]}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.split(":")[1] || "Sin descripción adicional."}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}