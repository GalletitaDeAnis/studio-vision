// src/app/agendar/page.tsx

"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AgendarConsultaPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías enviar los datos a un backend, Google Sheets, API, etc.
    setSubmitted(true);
  };

  return (
    <section className="max-w-2xl mx-auto py-20 px-6 text-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Agenda tu Consulta Gratuita
      </motion.h1>
      <p className="text-slate-400 mb-10">
        Cuéntanos sobre tu proyecto y reserva una cita con nuestro equipo de diseño, branding o desarrollo web.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left bg-slate-900 p-6 rounded-2xl shadow-xl"
        >
          <div>
            <label className="block text-sm font-semibold mb-1 text-slate-300">
              Nombre completo
            </label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-slate-300">
              Correo electrónico
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-slate-300">
              Fecha preferida para la consulta
            </label>
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-slate-300">
              Cuéntanos sobre tu proyecto
            </label>
            <Textarea
              rows={4}
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
              placeholder="Ej: Quiero un sitio web para mi estudio de arquitectura con renderizados 3D y branding elegante."
            />
          </div>
          <Button type="submit" className="w-full text-lg">
            Agendar Consulta
          </Button>
        </form>
      ) : (
        <motion.div
          className="bg-green-900 text-green-100 p-6 rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold mb-2">¡Gracias por tu interés!</h2>
          <p>
            Hemos recibido tu solicitud. Te contactaremos pronto para confirmar la fecha y hora de tu consulta.
          </p>
        </motion.div>
      )}
    </section>
  );
}
