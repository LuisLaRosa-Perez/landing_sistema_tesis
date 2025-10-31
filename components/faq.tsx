import { cn } from "@/lib/utils";
import {
  CircleDollarSign,
  Clock,
  LucideIcon,
  Package,
  PackageX,
  Plane,
  ShieldPlus,
  Users,
  Waypoints,
} from "lucide-react";

type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
  icon: LucideIcon;
};

const faqs: FrequentlyAskedQuestion[] = [
  {
    question: "¿Qué es NeurOS?",
    answer:
      "NeurOS es un sistema inteligente que combina inteligencia artificial y monitoreo adaptativo para ofrecer protección, asistencia y tranquilidad en tu entorno.",
    icon: Package,
  },
  {
    question: "¿Cómo funciona el sistema?",
    answer:
      "El sistema recopila información del entorno mediante sensores o dispositivos conectados. A partir de esos datos, la IA analiza patrones y adapta sus respuestas para mejorar la experiencia del usuario.",
    icon: Waypoints,
  },
  {
    question: "¿Necesito conocimientos técnicos para instalarlo?",
    answer:
      "No. NeurOS está diseñado para una instalación sencilla. Solo debes seguir unos pasos guiados y el sistema estará listo para operar en menos de 30 minutos.",
    icon: Clock,
  },
  {
    question: "¿Qué tipo de alertas o notificaciones puedo recibir?",
    answer:
      "Recibirás notificaciones instantáneas ante cualquier cambio detectado en tu entorno, como alteraciones inusuales, niveles de estrés o eventos relevantes configurados en el sistema.",
    icon: ShieldPlus,
  },
  {
    question: "¿NeurOS requiere conexión a internet?",
    answer: "Sí. La conexión es necesaria para el procesamiento de datos en tiempo real y la sincronización con tu dispositivo móvil o panel web.",
    icon: Plane,
  },
  {
    question: "¿Qué tan segura está mi información?",
    answer:
      "Tu privacidad es prioritaria. Toda la comunicación y almacenamiento de datos en NeurOS están protegidos con cifrado de nivel empresarial.",
    icon: ShieldPlus,
  },
  {
    question: "¿Puedo personalizar cómo responde el sistema?",
    answer:
      "Por supuesto. Puedes ajustar los parámetros de sensibilidad, el tipo de alertas, y las rutinas adaptativas según tus necesidades o las de tu familia.",
    icon: Users,
  },
  {
    question: "¿NeurOS ofrece soporte técnico?",
    answer:
      "Sí. Contamos con asistencia técnica remota y documentación detallada para resolver cualquier duda durante la configuración o el uso del sistema.",
    icon: Users,
  },
];

export function FAQ() {
  return (
    <div id="faq" className="bg-muted">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 text-center py-24">
        <h2 className="mt-5 max-w-4xl mx-auto text-4xl sm:text-5xl leading-[1.1] font-semibold tracking-tighter text-balance">
          Preguntas Frecuentes
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Encuentra respuestas rápidas sobre NeurOS, nuestro asistente inteligente diseñado para brindar seguridad, bienestar y control en tiempo real.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "relative p-6 border bg-card -ms-px -mt-px text-start overflow-hidden",
                "first:rounded-t-lg md:first:rounded-tr-none md:nth-[2]:rounded-tr-lg md:nth-last-[2]:rounded-bl-lg last:rounded-b-lg md:last:rounded-bl-none"
              )}
            >
              <div
                className="absolute inset-0 -ms-px -mt-0.5 z-0"
                style={{
                  backgroundImage: `
        linear-gradient(to right, oklch(from var(--card-foreground) l c h / 0.07) 1px, transparent 1px),
        linear-gradient(to bottom, oklch(from var(--card-foreground) l c h / 0.07) 1px, transparent 1px)
      `,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 0",
                  maskImage: `
          repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
                  WebkitMaskImage: `
    repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              />

              <div className="isolate">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <faq.icon className="text-primary mr-2.5 size-5 shrink-0" />
                  {faq.question}
                </div>
                <div className="mt-2 pl-10 text-base text-start text-foreground/80">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
