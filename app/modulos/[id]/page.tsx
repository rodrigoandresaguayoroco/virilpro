'use client'
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
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
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/lib/hooks/use-local-storage';

// --- MAPA DE DATOS ---
const modulesDataMap: { [key: string]: any } = {
  'arsenal-del-amante': arsenalData,
  'acondicionamiento': acondicionamientoData,
  'dieta-del-vigor': dietaData,
}

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function ModuloPage({ params }: { params: { id: string } }) {
  const { id } = params
  const moduleData = modulesDataMap[id]

  // Si el ID de la URL no está en nuestro mapa, muestra 404
  if (!moduleData) {
    notFound()
  }

  // Elige qué componente de contenido mostrar
  let contentComponent
  if (id === 'arsenal-del-amante') {
    contentComponent = <ArsenalContent data={moduleData} />
  } else if (id === 'acondicionamiento') {
    contentComponent = <AcondicionamientoContent data={moduleData} />
  } else if (id === 'dieta-del-vigor') {
    contentComponent = <DietaContent data={moduleData} />
  } else {
    return notFound() // Seguridad extra
  }

  // Animaciones
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  // Renderizado de la página
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
          {moduleData.hero}
        </p>
        <motion.div variants={itemVariants} className="mt-8">
          <Button size="lg" className="text-lg px-8 py-6">Empezar Módulo</Button>
        </motion.div>
      </motion.div>

      {/* Contenido principal del módulo */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {/* Columna Izquierda (Descripción) */}
        <Card className="p-6 md:col-span-1">
          <CardHeader>
            <CardTitle className="text-3xl">Descripción Detallada</CardTitle>
            <CardDescription className="text-base leading-relaxed mt-4">
              {moduleData.longDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Temas Clave:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {moduleData.itemsIncluded.map((item: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span> {item.split(':')[0]}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

      {/* Columna Derecha (Contenido Interactivo) */}
      <div className="md:col-span-2">
        {contentComponent}
      </div>
      </motion.div>
    </motion.div>
  )
}

// --- DEFINICIONES DE LOS COMPONENTES DE CONTENIDO ---

// Módulo 1: Arsenal (INTERACTIVO)
function ArsenalContent({ data }: { data: typeof arsenalData }) {
  const [completedTactics, setCompletedTactics] = useLocalStorage<string[]>(
    `viril_progress_${data.id}`, // Clave única para este módulo
    []
  );

  const toggleTactic = (tacticId: string) => {
    setCompletedTactics((prev) =>
      prev.includes(tacticId)
        ? prev.filter((id) => id !== tacticId)
        : [...prev, tacticId]
    );
  };

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="text-3xl">Tácticas de Entrenamiento</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {data.tactics.map((tactic: any, index: number) => {
            const isCompleted = completedTactics.includes(tactic.id);
            return (
              <AccordionItem value={`item-${index}`} key={tactic.id}>
                <AccordionTrigger
                  className={`text-xl font-medium text-left ${
                    isCompleted ? 'text-green-400 hover:text-green-500 line-through' : ''
                  }`}
                >
                  {isCompleted ? '✅ ' : ''}{tactic.title}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">
                  <div className="space-y-4">
                 <p><strong>Misión:</strong> {tactic.mission}</p>
                    <div className="p-4 bg-zinc-900 rounded-lg">
                      <strong>Protocolo:</strong>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        {tactic.protocol.map((step: string, i: number) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-950 border border-blue-700 rounded-lg">
                      <strong>Tip Pro:</strong> {tactic.proTip}
                    </div>
                    <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                   <strong>Ciencia:</strong> {tactic.science}
                    </div>
                    <Button
                      onClick={() => toggleTactic(tactic.id)}
                      variant={isCompleted ? 'outline' : 'default'}
                      className={`w-full mt-4 ${
                     isCompleted
                          ? 'border-green-700 text-green-400 hover:bg-green-950 hover:text-green-400'
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                    >
                      {isCompleted
                        ? 'Marcar como pendiente'
                        : 'Marcar como completada'}
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
indefinido )
}

// Módulo 2: Acondicionamiento (Aún no interactivo)
function AcondicionamientoContent({
  data,
}: {
  data: typeof acondicionamientoData
}) {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="text-3xl">Técnicas y Seguridad</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
          <div className="p-6 bg-red-950 border border-red-700 rounded-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              🚨 {data.safety.title}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-red-200">
              {data.safety.rules.map((rule: string, i: number) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>
          {data.techniques.map((tech: any) => (
         <div
              key={tech.id}
              className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
            >
              <h3 className="text-3xl font-bold mb-3">{tech.title}</h3>
              <p className="text-xl text-muted-foreground mb-4">{tech.objective}</p>
              <h4 className="text-xl font-semibold mb-2">Pasos:</h4>
             <ul className="list-decimal pl-6 mb-4 space-y-1">
             {tech.steps.map((step: string, i: number) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline">Frecuencia: {tech.frequency}</Badge>
                <Badge variant="destructive">Advertencia: {tech.warning}</Badge>
              </div>
            </div>
    key={i}>{step}</li>
        </CardContent>
    </Card>
  )
}

// Módulo 3: Dieta (Aún no interactivo)
function DietaContent({ data }: { data: typeof dietaData }) {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="text-3xl">Alimentos Clave</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
          {data.categories.map((category: any) => (
        section: "key={category.title}"
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.foods.map((food: any) => (
                  <div
                    key={food.name}
                      className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg"
    section: "flex items-center"
                    <h4 className="text-xl font-semibold text-green-400">
                      {food.name}
                    </h4>
                    <p className="text-muted-foreground mb-2">
    content: "             {food.description}"
                    </p>
                    <Badge variant="secondary">{food.servings}</Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
      de   <div className="p-6 bg-green-950 border border-green-700 rounded-xl">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              🥤 {data.smoothie.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Ingredientes:</h4>
                <ul className="list-disc pl-6 text-muted-foreground">
      content: '       {data.smoothie.ingredients.map((ing: string, i: number) => ('
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
    Indefinido   <p>{data.smoothie.instructions}</p>
                <p className="font-semibold text-green-300">
                  {data.smoothie.benefits}
                </p>
              </div>
            </div>
          </div>
          <div>
           <h3 className="text-3xl font-bold mb-4 tracking-tight">Prohibidos</h3>
            <div className="grid grid-cols-2 gap-4">
              {data.forbidden.map((item: string, i: number) => (
                <div
                  key={i}
                  className="p-4 bg-red-950 border border-red-800 rounded-lg text-red-300"
    Si       >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
    </Card>
  )
}
```eof