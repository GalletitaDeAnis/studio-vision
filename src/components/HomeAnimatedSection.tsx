"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { event } from "@/lib/gtag";

export function HomeAnimatedSection() {
  const handleAgendarClick = () => {
    event({
      action: "agendar_consulta_click",
      category: "Interacción",
      label: "Botón Reserva tu asesoría gratuita",
    });
  };

  return (
    <section className="py-32 px-10 text-center">
      <motion.h2
        className="text-4xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Creamos experiencias visuales inolvidables
      </motion.h2>

      <p className="max-w-xl mx-auto text-lg text-slate-300">
        Diseño gráfico, modelado 3D, fotografía, video y desarrollo web para tu marca o negocio.
      </p>

      <div className="mt-6 space-y-3">

        <Button asChild onClick={handleAgendarClick}>
          <Link href="/agendar">
            Reserva tu asesoría gratuita
          </Link>
        </Button>

        <p className="mt-2 text-sm text-slate-400">
          Sin compromiso – Cuéntanos sobre tu proyecto y te guiamos.
        </p>
      </div>
    </section>
  );
}
