import Link from "next/link";
import { HomeAnimatedSection } from "@/components/HomeAnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">StudioVision</h1>
        <nav className="space-x-4">
          <Link href="/services">Servicios</Link>
          <Link href="/portfolio">Portafolio</Link>
          <Link href="/about">Sobre Nosotros</Link>
          <Link href="/contact">Contacto</Link>
        </nav>
      </header>

      <HomeAnimatedSection />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
        <Card className="bg-slate-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Diseño & Branding</h3>
            <p className="text-slate-300">
              Desde logotipos hasta identidad visual completa, creamos el alma gráfica de tu marca.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Modelado 3D & Render</h3>
            <p className="text-slate-300">
              Visualiza tus productos, espacios o ideas en 3D con calidad profesional.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Desarrollo Web Visual</h3>
            <p className="text-slate-300">
              Sitios web interactivos, animados y con diseño a medida. Hechos para destacar.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center p-6 text-slate-500">
        &copy; {new Date().getFullYear()} StudioVision. Todos los derechos reservados.
      </footer>
    </main>
  );
}
