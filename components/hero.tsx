import { Button } from "./ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <div className="min-h-[calc(100svh-4rem)] py-16 max-w-(--breakpoint-xl) mx-auto text-center px-6">
      <h1 className="mt-5 max-w-3xl mx-auto text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-semibold tracking-tighter text-balance">
        Impulsa el Aprendizaje con Inteligencia Emocional Artificial
      </h1>
      <div className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground text-balance">
        <p>
          Diseñado para apoyar a docentes, padres y psicólogos, ayuda a mejorar la concentración, reducir el estrés y promover el bienestar emocional durante el proceso educativo.
        </p>
      </div>
      <div className="mt-12 flex gap-4 justify-center">
        <Button size="lg" asChild><a href="/">Ingresar</a></Button>
        <Button variant="outline" size="lg" asChild>
          <a href="#why-choose-us">Conoce Más</a>
        </Button>
      </div>

      <div className="mt-20 aspect-video border rounded-lg bg-muted p-2">
        <Image src="/Fondo.png" alt="Fondo" width={1920} height={1080} className="rounded-lg" />
      </div>
    </div>
  );
}
