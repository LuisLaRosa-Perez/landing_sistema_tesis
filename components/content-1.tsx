"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Content1() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc = theme === "dark" ? "/herolight.jpeg" : "/herodark.jpeg";

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            {mounted && (
              <Image
                src={imageSrc}
                alt="Content Image"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">
              Un Entorno de Aprendizaje Adaptativo y Empático
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              NeurOS transforma la experiencia educativa al crear un entorno que no solo enseña, sino que también comprende. Mediante el análisis de patrones de comportamiento y respuestas emocionales, nuestro sistema ajusta dinámicamente el contenido y la interfaz para satisfacer las necesidades individuales de cada estudiante.
            </p>
            <p className="text-lg text-muted-foreground">
              Esto permite reducir la frustración, aumentar el compromiso y fomentar una relación positiva con el aprendizaje. Los educadores y padres obtienen información valiosa para guiar y apoyar a los estudiantes de manera más efectiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}