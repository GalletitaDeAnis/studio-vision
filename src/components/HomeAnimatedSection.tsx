"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeAnimatedSection() {
  return (
    //<section className="p-10 text-center">
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
      <div className="mt-6">
        <Button asChild>
          <Link href="/contact">Agendar una consulta</Link>
        </Button>
      </div>
    </section>
  );
}
