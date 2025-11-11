'use client'
import { useState } from 'react'; // <--- Importamos useState
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

  if (!moduleData) {
    notFound()
  }

  // 1. Revisa el ID de la URL y elige los datos y el componente correctos
  let contentComponent
  if (id === 'arsenal-del-amante') {
    contentComponent = <ArsenalContent data={moduleData} />
  } else if (id === 'acondicionamiento') {
    contentComponent = <AcondicionamientoContent data={moduleData} />
  } else if (id === 'dieta-del-vigor') {
    contentComponent = <DietaContent data={moduleData} />
  } else {
    return notFound()
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

  // 2. Renderiza el layout de la página con el componente de contenido elegido
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

      {/* Aquí se inserta el contenido específico del módulo */}
      {contentComponent}
    </motion.div>
  )
}

// --- DEFINICIONES DE LOS COMPONENTES DE CONTENIDO ---

// Componente para el Módulo 1: Arsenal (¡AHORA INTERACTIVO!)
function ArsenalContent({ data }: { data: typeof arsenalData }) {
  // --- ¡AQUÍ EMPIEZA LA MAGIA! ---
  // 1. Estado para rastrear las tácticas completadas
  const [completedTactics, setCompletedTactics] = useState<string[]>([]);

  // 2. Función para marcar/desmarcar una táctica
  const toggleTactic = (tacticId: string) => {
    setCompletedTactics((prev) =>
      prev.includes(tacticId)
        ? prev.filter((id) => id !== tacticId) // Si ya está, la quita
        : [...prev, tacticId] // Si no está, la añade
    );
  };
  // --- FIN DE LA MAGIA ---

  return (
    <Accordion type="single" collapsible className="w-full">
      {data.tactics.map((tactic, index) => {
        // 3. Comprueba si esta táctica está marcada como completada
        const isCompleted = completedTactics.includes(tactic.id);

        return (
          <AccordionItem value={`item-${index}`} key={tactic.id}>
            <AccordionTrigger
              className={`text-xl font-medium text-left ${
                isCompleted ? 'text-green-400 hover:text-green-500' : '' // <-- Estilo si está completada
              }`}
            >
              {isCompleted ? '✅ ' : ''}{tactic.title}
            </AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground">
              <div className="space-y-4">
                <p>
                  <strong>Misión:</strong> {tactic.mission}
                </p>

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

                {/* 4. El Botón Interactivo */}
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
  )
}

// Componente para el Módulo 2: Acondicionamiento (Aún no interactivo)
function AcondicionamientoContent({
  data,
}: {
  data: typeof acondicionamientoData
}) {
  return (
    <div className="space-y-8">
      {/* Protocolo de Seguridad */}
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

      {/* Técnicas */}
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
      ))}
    </div>
  )
}

// Componente para el Módulo 3: Dieta (Aún no interactivo)
function DietaContent({ data }: { data: typeof dietaData }) {
  return (
    <div className="space-y-8">
      {data.categories.map((category: any) => (
        <div key={category.title}>
          <h3 className="text-3xl font-bold mb-4 tracking-tight">
            {category.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {category.foods.map((food: any) => (
              <div
                key={food.name}
className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg"
              >
                <h4 className="text-xl font-semibold text-green-400">
                  {food.name}
                </h4>
                <p className="text-muted-foreground mb-2">
                  {food.description}
                </p>
                <Badge variant="secondary">{food.servings}</Badge>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Smoothie */}
      <div className="p-6 bg-green-950 border border-green-700 rounded-xl">
a         <h3 className="text-2xl font-bold text-green-400 mb-4">
          🥤 {data.smoothie.title}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold">Ingredientes:</h4>
            <ul className="list-disc pl-6 text-muted-foreground">
              {data.smoothie.ingredients.map((ing: string, i: number) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
indefinido             <p>{data.smoothie.instructions}</p>
            <p className="font-semibold text-green-300">
              {data.smoothie.benefits}
            </p>
          </div>
        </div>
      </div>

      {/* Prohibidos */}
      <div>
        <h3 className="text-3xl font-bold mb-4 tracking-tight">Prohibidos</h3>
s         <div className="grid grid-cols-2 gap-4">
          {data.forbidden.map((item: string, i: number) => (
            <div
              key={i}
              className="p-4 bg-red-950 border border-red-800 rounded-lg text-red-300"
s             >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}