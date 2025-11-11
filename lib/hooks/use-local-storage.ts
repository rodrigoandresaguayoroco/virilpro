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