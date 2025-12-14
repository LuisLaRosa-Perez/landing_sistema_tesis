"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

// Define the Terms Dialog component
const TermsDialog = ({
  open,
  onOpenChange,
  onAccept,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  // Reset checkbox state when dialog is closed
  useEffect(() => {
    if (!open) {
      setIsChecked(false);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Términos y Condiciones de Uso de NeurOS</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground py-4">
          <p>
            ¡Bienvenido a NeurOS! Antes de utilizar nuestra plataforma, te pedimos que leas detenidamente los siguientes términos y condiciones. Tu acceso y uso de NeurOS constituyen la aceptación de estos términos.
          </p>

          <h3 className="text-md font-semibold text-primary">1. Aceptación de los Términos</h3>
          <p>
            Al registrarte y utilizar la plataforma NeurOS, tú, como Padre, Psicólogo o Administrador, aceptas estos Términos y Condiciones en tu nombre y, en el caso de los padres, en nombre de tus hijos. Si no estás de acuerdo con alguna parte de los términos, no deberás utilizar el servicio.
          </p>

          <h3 className="text-md font-semibold text-primary">2. Descripción del Servicio</h3>
          <p>
            NeurOS es una plataforma de aprendizaje adaptativo y monitoreo terapéutico. Su finalidad es asignar tareas educativas o recreativas a niños, permitiendo a padres y psicólogos seguir su progreso y, opcionalmente, monitorear métricas biométricas como el ritmo cardíaco para entender mejor su bienestar durante las actividades.
          </p>

          <h3 className="text-md font-semibold text-primary">3. Recopilación y Uso de Datos (Consentimiento Transparente)</h3>
          <p>
            Tu confianza es nuestra prioridad. A continuación, te explicamos de forma sencilla qué datos recopilamos y por qué:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <strong>Datos de Progreso y Tareas:</strong> Guardamos las respuestas que los niños proporcionan en las tareas. Esto es fundamental para que los padres y psicólogos puedan ver el progreso, identificar áreas de mejora y celebrar los logros.
            </li>
            <li>
              <strong>Datos Biométricos (Ritmo Cardíaco):</strong> Con tu consentimiento explícito, el sistema puede registrar el ritmo cardíaco del niño mientras realiza una tarea. Este dato nos ayuda a entender sus niveles de concentración y bienestar. <strong>Este monitoreo es opcional y solo se activa si el padre o psicólogo lo autoriza para una sesión.</strong> Los datos se utilizan exclusivamente con fines terapéuticos y de seguimiento del bienestar.
            </li>
            <li>
              <strong>Interacción con IA:</strong> Podemos utilizar modelos de Inteligencia Artificial para generar nuevas tareas o analizar las respuestas. El objetivo es personalizar y enriquecer la experiencia de aprendizaje. Todas las interacciones se registran para garantizar un uso seguro y auditado.
            </li>
          </ul>

          <h3 className="text-md font-semibold text-primary">4. Consentimiento para Menores</h3>
          <p>
            Al crear una cuenta para un niño en NeurOS, tú, como padre o tutor legal, otorgas tu consentimiento explícito para que el niño utilice la plataforma y para la recopilación de los datos descritos anteriormente, con los fines específicos de aprendizaje y monitoreo terapéutico.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" checked={isChecked} onCheckedChange={(checked) => setIsChecked(!!checked)} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            He leído y acepto los términos y condiciones.
          </label>
        </div>
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cerrar
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={() => {
              onAccept();
              onOpenChange(false);
            }}
            disabled={!isChecked}
          >
            Aceptar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroImageSrc = theme === "dark" ? "/herodark.jpeg" : "/herolight.jpeg";

  const handleAcceptTerms = () => {
    setTermsAccepted(true);
    toast.success("Términos y condiciones aceptados.");
  };

  const handleIngresarClick = () => {
    if (termsAccepted) {
      router.push('https://sistema-sadaptativo.sadaptativo.org/');
    } else {
      toast.error("Debe aceptar los términos y condiciones para continuar.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center overflow-hidden">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 lg:py-0 pt-4 sm:pt-20">
        <div className="pt-4 sm:pt-16">
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
            Impulsa el Aprendizaje con Inteligencia Emocional Artificial
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg text-foreground/80">
            Diseñado para apoyar a docentes, padres y psicólogos, ayuda a mejorar la concentración, reducir el estrés y promover el bienestar emocional durante el proceso educativo.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button
              size="lg"
              className="rounded-full text-base"
              onClick={handleIngresarClick}
            >
              Ingresar
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
              onClick={() => {
                if (termsAccepted) {
                  toast.info("Ya has aceptado los términos y condiciones.");
                } else {
                  setIsModalOpen(true);
                }
              }}
            >
              Conoce Más
            </Button>
          </div>
        </div>
        <div className="relative w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-[calc(100vh-4rem)] rounded-xl overflow-hidden">
          {mounted && (
            <Image
              src={heroImageSrc}
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              quality={100}
              priority
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          )}
        </div>
      </div>
      <TermsDialog 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onAccept={handleAcceptTerms}
      />
    </div>
  );
}