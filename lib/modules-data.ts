// --- MÓDULO 1: ARSENAL ---
export const arsenalData = {
  id: 'arsenal-del-amante',
  title: "Arsenal del Amante",
  description: "7 tácticas científicas para dominio total.",
  hero: "Domina tu rendimiento con protocolos científicamente validados.",
  longDescription: "Este módulo desglosa las 7 técnicas fundamentales de control neuromuscular y mental para recalibrar tu respuesta eyaculatoria. No se trata de 'aguantar', se trata de 'controlar'.",
  itemsIncluded: [
    "Respiración de Anclaje: Controla el sistema nervioso.",
    "Kegel Inverso: Domina el músculo PC.",
    "Pausa Estratégica: Resetea la excitación.",
    "Cambio de Foco: Redirige tu atención.",
    "Ritmo Maestro: Modula la velocidad.",
    "Mapa del Placer: Explora nuevas rutas.",
    "Comunicación Cómplice: Sincronízate con tu pareja."
  ],
  forbidden: ["Ansiedad de rendimiento", "Ritmos monótonos", "Falta de comunicación"],
  tactics: [
    {
      id: "ancla-mental",
      title: "01. El Ancla Mental",
      mission: "Control de ansiedad vía respiración parasimpática.",
      protocol: ["Inhala 4s nariz (diafragma)", "Pausa 2s", "Exhala 6s boca", "Sincroniza movimiento"],
      proTip: "Practica 5 min/día fuera del dormitorio para automatizar.",
      science: "Respiración lenta reduce frecuencia cardíaca y cortisol.",
    },
    {
      id: "kegel-inverso",
      title: "02. El Músculo Secreto",
      mission: "Dominio del PC para control del reflejo eyaculatorio.",
      protocol: ["Identifica PC al cortar flujo", "Realiza movimiento opuesto", "Entrena 2s contracción, 10s relajación"],
      proTip: "Aplica Kegel inverso cuando excitación suba rápido.",
      science: "Mayor control neuromuscular eleva el umbral del reflejo.",
    },
    {
      id: "pausa-estrategica",
      title: "03. La Pausa Estratégica",
      mission: "Resetear excitación para prolongar el acto.",
      protocol: ["Usa medidor interno 1-10", "En 7-8 detén estimulación", "Respira hasta 3-4", "Reanuda con control"],
      proTip: "Comunícalo y conviértelo en juego de pareja.",
      science: "Práctica recalibra umbral y mejora detección de señales.",
    },
    {
      id: "cambio-foco",
      title: "04. El Cambio de Foco",
      mission: "Redirigir atención al placer de tu pareja.",
      protocol: ["Observa respiración, sonidos, expresiones", "Escucha y mira conscientemente", "Haz placer de tu pareja tu objetivo"],
      proTip: "Durante pausa usa manos/boca para mantener conexión.",
      science: "Recursos atencionales limitados; redirigirlos reduce escalada propia.",
    },
    {
      id: "ritmo-maestro",
      title: "05. El Ritmo del Maestro",
      mission: "Modular excitación con variaciones velocidad/profundidad.",
      protocol: ["Evita ritmo constante prolongado", "Alterna rápido/superficial con lento/profundo", "Sincroniza fases lentas con respiración"],
      proTip: "Ceder ritmo a pareja reduce tu carga de control.",
      science: "Ritmo correlaciona con activación autonómica; lento frena escalada.",
    },
    {
      id: "mapa-placer",
      title: "06. El Mapa del Placer",
      mission: "Usar descansos activos y explorar rutas sensoriales.",
      protocol: ["Identifica puntos calientes", "Cambia posición para modificar ángulo", "Activa zonas erógenas con manos/boca"],
      proTip: "Posturas erguidas/recostadas hacia atrás dan más control.",
      science: "Diversificación sensorial distribuye carga neuronal.",
    },
    {
      id: "comunicacion-complice",
      title: "07. La Comunicación Cómplice",
      mission: "Convertir a tu pareja en aliada para control y placer mutuo.",
      protocol: ["Habla antes en contexto relajado", "Acordad señal discreta", "Agradece y refuerza tras intimidad"],
      proTip: "Reformula pausas como momentos de conexión intensa.",
      science: "Menos ansiedad de rendimiento = menos cortisol + más presencia.",
    },
  ],
}

// --- MÓDULO 2: ACONDICIONAMIENTO ---
export const acondicionamientoData = {
  id: 'acondicionamiento',
  title: "Acondicionamiento Masculino",
  description: "Técnicas manuales seguras para vitalidad.",
  hero: "Mejora la salud circulatoria con protocolos médicos.",
  longDescription: "Este módulo se enfoca en la salud física y circulatoria. Aprenderás técnicas manuales seguras y probadas para mejorar la vitalidad y la salud general de los tejidos, siempre priorizando la seguridad.",
  itemsIncluded: ["Protocolo de Seguridad", "Técnica Jelqing Mejorada", "Stretching Controlado", "Plan de Progresión"],
  forbidden: ["No calentar", "Causar dolor", "Sesiones largas", "Ignorar el descanso"],
  safety: {
    title: "PROTOCOLO DE SEGURIDAD",
    rules: [
      "Calentamiento obligatorio: paño tibio 5 minutos",
      "Lubricación de calidad (nunca jabón)",
      "Nunca forzar ni causar dolor",
      "Parar ante cualquier dolor agudo",
      "Sesiones máx 20 minutos",
      "Descansar 48h entre sesiones",
    ],
  },
  techniques: [
    {
      id: "jelqing",
      title: "Jelqing Mejorado",
      objective: "Mejorar circulación sanguínea sin dañar tejidos.",
      steps: ["Lubricación generosa", "Formar OK con pulgar e índice", "Presión SUAVE (nunca dolorosa)", "Deslizar base a glande (3-5s)", "Cambiar mano, repetir 10-15 veces"],
      frequency: "3x semana, 48h descanso",
      warning: "NO usar si tienes priapismo, lesiones o enfermedades vasculares.",
    },
    {
      id: "stretching",
      title: "Stretching Controlado",
      objective: "Manteniflácido sin forzar.",
      steps: ["Calentar con paño tibio 5 min", "Tomar glande con toalla entre piel", "Estirar SUAVEMENTE (nunca dolor)", "Mantener 10-30 segundos", "Descansar 10s entre repeticiones", "Máximo 10 repeticiones por sesión"],
      frequency: "2-3x semana",
      warning: "Suspender ante dolor, hematomas o entumecimiento.",
    },
  ],
  progression: "Semanas 1-4: 10 min/sesión | Semanas 5-8: 15 min | Semanas 9+: 20 min",
  timeline: "Resultados requieren 8-12 semanas de consistencia.",
}

// --- MÓDULO 3: DIETA ---
export const dietaData = {
  id: 'dieta-del-vigor',
  title: "Dieta del Vigor",
  description: "Nutrición molecular para rendimiento óptimo.",
  hero: "Nutrición molecular para producción hormonal óptima.",
  longDescription: "Tu rendimiento hormonal y energético empieza en la cocina. Este módulo identifica los 15 alimentos clave que actúan como precursores hormonales, mejoran el flujo sanguíneo y reducen la inflamación.",
  itemsIncluded: ["Proteínas y Grasas", "Minerales Críticos", "Precursores Hormonales", "Smoothie VIRIL"],
  forbidden: [
    "Azúcar añadido: Fructosa baja testosterona.",
    "Alcohol excesivo: Inhibe síntesis hormonal.",
    "Plásticos BPA: Actúan como xenoestrógenos.",
    "Soja no fermentada: Contiene isoflavonas.",
  ],
  categories: [
    {
      title: "PROTEÍNAS Y GRASAS SALUDABLES",
      foods: [
        { name: "Huevos", description: "Colesterol para testosterona + vitamina D", servings: "2-3 huevos/día" },
        { name: "Salmón", description: "Omega-3, vitamina D, proteína", servings: "150-200g, 3x semana" },
        { name: "Aguacate", description: "Grasas monoinsaturadas + vitamina E", servings: "½ unidad/día" },
        { name: "Carne de Res Orgánica", description: "Zinc, hierro, creatina", servings: "200g, 2-3x semana" },
      ],
    },
    {
      title: "MINERALES CRÍTICOS",
      foods: [
        { name: "Ostras", description: "Zinc (el más alto de todos)", servings: "6-12 unidades, 1x semana" },
        { name: "Espinacas", description: "Magnesio, folato, nitratos", servings: "2 tazas frescas/día" },
        { name: "Nueces Brasileñas", description: "Selenio (1 nuez cubre el día)", servings: "1-2 unidades/día" },
        { name: "Chocolate Negro 85%", description: "Flavonoides, magnesio", servings: "30-40g/día" },
      ],
    },
  ],
  smoothie: {
    title: "SMOOTHIE VIRIL DIARIO",
    ingredients: [
      "1 taza leche de almendra sin azúcar",
      "1 plátano",
      "2 cucharadas mantequilla maní natural",
      "1 huevo crudo (orgánico)",
      "1 cucharada cacao puro",
      "1 cucharada miel",
      "¼ taza arándanos",
      "1 cucharada semillas chía",
      "1 cucharada polvo proteína suero",
    ],
    instructions: "Procesar 60s. Consumir inmediatamente.",
    benefits: "Precursores hormonales + energía + antioxidantes en un vaso",
  },
}
```
**Guarda y cierra.**

---



```typescript
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

  // Si el ID no existe en nuestro mapa, muestra 404
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
A       : [...prev, tacticId]
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
      section: "Misión:"
                    <div className="p-4 bg-zinc-900 rounded-lg">
                      <strong>Protocolo:</strong>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        {tactic.protocol.map((step: string, i: number) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-950 border border-blue-700 rounded-lg">
    section: "Tip Pro:"
                    </div>
                    <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
    section: "Ciencia:"
                    </div>
                    <Button
                      onClick={() => toggleTactic(tactic.id)}
                      variant={isCompleted ? 'outline' : 'default'}
                      className={`w-full mt-4 ${
                        isCompleted
                  G       ? 'border-green-700 text-green-400 hover:bg-green-950 hover:text-green-400'
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
          ))}
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
            <div key={category.title}>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
    D           {category.title}
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
                      {food.description}
                    </p>
                    <Badge variant="secondary">{food.servings}</Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="p-6 bg-green-950 border border-green-700 rounded-xl">
    section: "text-2xl font-bold text-green-400 mb-4"
              🥤 {data.smoothie.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Ingredientes:</h4>
                <ul className="list-disc pl-6 text-muted-foreground">
      S         {data.smoothie.ingredients.map((ing: string, i: number) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p>{data.smoothie.instructions}</p>
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
                >
                  {item}
                </div>
      s     ))}
            </div>
          </div>
        </CardContent>
    </Card>
indefinido )
}
```
**Guarda y cierra.**

---

**Paso 3: Arregla `lib/hooks/use-local-storage.ts` (El Cerebro)**

En tu terminal (dentro de `viril-app-pro`):
```powershell
notepad lib\hooks\use-local-storage.ts
```
**BORRA TODO** lo que hay en ese archivo y pega **SOLO** este código:

```typescript
'use client'

import { useState, useEffect } from 'react'

function getSavedValue<T>(key: string, initialValue: T | (() => T)): T {
  // Asegurarnos de que esto solo se ejecute en el cliente (navegador)
  if (typeof window === 'undefined') {
    return initialValue instanceof Function ? initialValue() : initialValue;
  }

  const savedValue = localStorage.getItem(key);
  if (savedValue) {
    try {
      return JSON.parse(savedValue) as T;
    } catch (error) {
      console.error(`Error parsing localStorage key “${key}”:`, error);
      return initialValue instanceof Function ? initialValue() : initialValue;
    }
  }

  // Si no hay nada guardado, devuelve el valor inicial
  return initialValue instanceof Function ? initialValue() : initialValue;
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    return getSavedValue(key, initialValue);
  });

  // Este "Efecto" se ejecuta cada vez que 'value' cambia,
  // y lo guarda en localStorage.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
}
```
**Guarda y cierra.**

---

**Paso 4: Sube los 3 archivos limpios a GitHub**

```powershell
git add .
git commit -m "FIX NUCLEAR: Reemplazados todos los archivos de módulos corruptos"
git push