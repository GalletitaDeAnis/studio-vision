import Head from "next/head";
import Link from "next/link";
import { HomeAnimatedSection } from "@/components/HomeAnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (

    <>
    <Head>
      <title>Paolo Pizarro Studio | Diseño Gráfico, 3D y Publicidad en Cochabamba</title>
      <meta
        name="description"
        content="Agencia creativa en Cochabamba, Bolivia especializada en diseño gráfico, animación, video, modelado 3D y desarrollo web visual."
      />
      <meta
        name="keywords"
        content="diseño gráfico Cochabamba, modelado 3D Bolivia, desarrollo web Cochabamba, agencia creativa Bolivia, video publicidad"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Paolo Pizarro Studio | Agencia de Diseño y Publicidad" />
      <meta
        property="og:description"
        content="Creamos experiencias visuales inolvidables para tu marca en Cochabamba, Bolivia."
      />
      <meta property="og:image" content="https://studio-vision.vercel.app/logo.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://studio-vision.vercel.app/" />
      <link rel="canonical" href="https://studio-vision.vercel.app/" />

      {/* schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Paolo Pizarro Studio",
            image: "https://studio-vision.vercel.app/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. Libertador 456", // Reemplazá por tu dirección real
              addressLocality: "Cochabamba",
              addressRegion: "Cochabamba",
              postalCode: "0001", // Opcional
              addressCountry: "BO"
            },
            url: "https://studio-vision.vercel.app",
            telephone: "+591-7XXXXXXX", // Reemplazá por tu número real
            description:
              "Agencia creativa en Cochabamba, Bolivia especializada en diseño gráfico, animación, video y desarrollo web.",
            openingHours: "Mo-Fr 09:00-18:00",
            priceRange: "$$"
          })
        }}
      />
    </Head>

    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Paolo Pizarro Studio</h1>
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
        &copy; {new Date().getFullYear()} Paolo Pizarro Studio. Todos los derechos reservados.
      </footer>
    </main>
    </>
  );
}
