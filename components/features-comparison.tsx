import { CheckIcon, XIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface Feature {
  title: string;
  value: {
    neurOS: boolean | string;
    basicSystem: boolean | string;
    otherSystem: boolean | string;
  };
}

const features: Feature[] = [
  {
    title: "Protección Inteligente en Tiempo Real",
    value: {
      neurOS: true,
      basicSystem: true,
      otherSystem: false,
    },
  },
  {
    title: "Botón SOS Inmediato",
    value: {
      neurOS: true,
      basicSystem: false,
      otherSystem: false,
    },
  },
  {
    title: "Bajo Costo Inicial",
    value: {
      neurOS: true,
      basicSystem: true,
      otherSystem: false,
    },
  },
  {
    title: "Bajo Costo Mensual",
    value: {
      neurOS: true,
      basicSystem: false,
      otherSystem: true,
    },
  },
  {
    title: "Sin Contratos Forzosos",
    value: {
      neurOS: true,
      basicSystem: false,
      otherSystem: true,
    },
  },
  {
    title: "Cancelación Fácil y Transparente",
    value: {
      neurOS: true,
      basicSystem: false,
      otherSystem: true,
    },
  },
  {
    title: "Garantía de Equipo Permanente",
    value: {
      neurOS: true,
      basicSystem: false,
      otherSystem: false,
    },
  },
  {
    title: "Actualizaciones Automáticas y Gratuitas",
    value: {
      neurOS: true,
      basicSystem: false,
      otherSystem: false,
    },
  },
  {
    title: "Tiempo Promedio de Instalación",
    value: {
      neurOS: "30 minutos",
      basicSystem: "~ 2 horas",
      otherSystem: "~ 3 horas",
    },
  },
];

export function FeaturesComparison() {
  return (
    <div
      id="features"
      className="max-w-(--breakpoint-xl) mx-auto px-6 text-center py-24"
    >
      <strong className="font-semibold text-muted-foreground">
        Nuestras Características
      </strong>
      <h2 className="mt-5 max-w-4xl mx-auto text-4xl sm:text-5xl leading-[1.1] font-semibold tracking-tighter text-balance">
        Experimenta la Diferencia con NeurOS
      </h2>
      <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
        Nos destacamos en la entrega de soluciones innovadoras y de alta calidad que satisfacen las necesidades únicas de nuestros clientes.
      </p>

      <div className="mt-16 border p-2 bg-muted border-dashed rounded-lg">
        <Table className="bg-background rounded-md overflow-hidden">
          <TableHeader>
            <TableRow className="[&>th]:py-5 [&>th]:border [&>th]:border-dashed border-dashed text-xl [&>th]:text-center [&>th]:bg-muted/30">
              <TableHead className="w-32 bg-[image:repeating-linear-gradient(315deg,_var(--muted)_0,_var(--muted)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></TableHead>
              <TableHead>NeurOS</TableHead>
              <TableHead>Basic System</TableHead>
              <TableHead>Other System</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature) => (
              <TableRow
                key={feature.title}
                className="[&>td]:py-5 [&>td]:border [&>td]:border-dashed text-lg border-dashed"
              >
                <TableCell className="text-start px-10 font-medium bg-muted/30">
                  {feature.title}
                </TableCell>
                <ValueCell value={feature.value.neurOS} />
                <ValueCell value={feature.value.basicSystem} />
                <ValueCell value={feature.value.otherSystem} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const ValueCell = ({ value }: { value: boolean | string }) => {
  if (typeof value === "string") {
    return <TableCell>{value}</TableCell>;
  }

  return (
    <TableCell className="text-center">
      {value ? (
        <CheckIcon className="text-green-600 mx-auto" />
      ) : (
        <XIcon className="text-red-600 mx-auto" />
      )}
    </TableCell>
  );
};
