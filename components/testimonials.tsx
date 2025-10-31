const testimonials = [
  {
    name: "Ana Pérez",
    role: "Madre y Profesional",
    testimonial:
      "NeurOS me da la tranquilidad que necesitaba. Saber que mis hijos están en un entorno seguro mientras trabajo es invaluable. Las alertas de bienestar son una maravilla.",
  },
  {
    name: "Carlos García",
    role: "Entusiasta de la Domótica",
    testimonial:
      "He probado muchos sistemas, pero NeurOS es diferente. La IA realmente aprende y se adapta. Es el cerebro que le faltaba a mi casa inteligente.",
  },
  {
    name: "Dra. Elena Torres",
    role: "Psicóloga Infantil",
    testimonial:
      "Recomiendo NeurOS a los padres. La capacidad del sistema para monitorear el ambiente y sugerir mejoras para el bienestar de los niños es una herramienta de apoyo fantástica.",
  },
  {
    name: "Javier Rodríguez",
    role: "Desarrollador de Software",
    testimonial: "La API de NeurOS es robusta y fácil de integrar. Pude personalizar las rutinas y crear mis propias alertas. ¡Un sistema potente y flexible!",
  },
  {
    name: "Laura Méndez",
    role: "Cuidadora de Personas Mayores",
    testimonial: "NeurOS ha sido un gran apoyo en mi trabajo. El sistema me alerta de cualquier anomalía en el comportamiento de mis pacientes, lo que me permite actuar de forma proactiva.",
  },
  {
    name: "David Castillo",
    role: "Emprendedor",
    testimonial:
      "La seguridad de mi negocio y mi hogar están en manos de NeurOS. La instalación fue sorprendentemente sencilla y el sistema ha superado mis expectativas.",
  },
];

const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(" ");
  return firstName[0] + (lastName ? lastName[0] : "");
};

const getColor = (name: string) => {
  const colors = ["#FFC107", "#FF5722", "#4CAF50", "#2196F3", "#9C27B0", "#E91E63"];
  const charCodeSum = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[charCodeSum % colors.length];
};

export function Testimonials() {
  return (
    <div id="testimonials" className="mx-auto max-w-(--breakpoint-xl) px-6 py-12 sm:py-24">
      <h2 className="text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Amado por Nuestros Usuarios
      </h2>
      <p className="text-muted-foreground mt-2 text-center text-lg tracking-normal text-balance sm:mt-4 sm:text-2xl">
        Sus experiencias hablan más que las palabras
      </p>

      <div className="mx-auto mt-16 max-w-5xl columns-1 gap-6 sm:columns-2 lg:columns-3">
        {testimonials.map(({ name, role, testimonial }, index) => (
          <div
            key={index}
            className="bg-muted mb-6 break-inside-avoid rounded-lg border p-1.5"
          >
            <div className="from-muted/50 to-background via-background dark:bg-background dark:border-muted-foreground/30 relative flex flex-col rounded-md border bg-gradient-to-bl px-5 pt-10 pb-3">
              {/* Quote */}
              <span className="text-muted-foreground absolute top-5 left-3 font-mono text-7xl">
                &#8220;
              </span>

              <p className="grow py-6 text-lg font-medium">{testimonial}</p>
              <div className="mt-2 flex items-center gap-3 py-3.5 sm:mt-4">
                <div
                  className="ring-border ring-offset-background h-12 w-12 rounded-full ring-2 ring-offset-[2px] flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: getColor(name) }}
                >
                  {getInitials(name)}
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm">{role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
