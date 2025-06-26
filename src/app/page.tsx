
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Venta Online en 24 Horas" subheadline="Digitaliza tus ventas rápidamente con soporte continuo, ideal para dueños ocupados en Santiago." cta1="Comienza Hoy" />
<How step1Title="Consulta inicial" step1Desc="Evalúa tus necesidades y objetivos digitales." step2Title="Creación express" step2Desc="Web de ventas construida en menos de 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para impulsar tus ventas online." />
<Aboutus headline="WebGo: Digitaliza y Aumenta Ventas" subheadline="Transformamos recomendaciones en ventas online con sitios web gestionados, sin complicaciones." beneficiotitulo1="Fácil y Rápido" beneficio1="Digitaliza ventas sin esfuerzo alguno." beneficiotitulo2="Soporte Completo" beneficio2="Olvídate de gestionar tu web." />
<Services heading="Digitaliza y Aumenta Tus Ventas" description="Hola transforma tu negocio con sitios que venden en 24 horas." services={[{"name":"Desarrollo Rápido","icon":"rocket","description":"Webs listas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"phone","description":"Asistencia continua y sin interrupciones."},{"name":"SEO Optimización","icon":"chart-line","description":"Mejora tu visibilidad online."},{"name":"Estrategias de Ventas","icon":"lightbulb","description":"Convierte visitantes en clientes."},{"name":"Gestión de Contenidos","icon":"pencil-alt","description":"Contenido atractivo y relevante."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita transacciones seguras."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en resultados visualmente impactantes y efectivos." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender online si solo vendo por recomendación?","respuesta":"WebGo transforma tus recomendaciones en ventas online creando un sitio web optimizado que atrae clientes nuevos y gestiona tus ventas de manera automática."},{"pregunta":"¿Qué beneficios obtengo con el servicio Hola de WebGo?","respuesta":"Con Hola, por solo 222, obtienes un sitio web profesional que te ahorra tiempo y te genera ventas online, sin necesidad de que gestiones nada por tu cuenta."},{"pregunta":"¿WebGo realmente entiende las necesidades de mi pequeño negocio en Santiago?","respuesta":"Sí, WebGo conoce las dificultades de los pequeños negocios en Santiago y diseña soluciones personalizadas que facilitan la venta online, ahorrándote tiempo y esfuerzo."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo me ayuda WebGo?","respuesta":"WebGo se encarga de todo: desde la creación hasta la gestión de tu sitio web, permitiéndote centrarte en lo que mejor haces mientras aumentas tus ventas online."},{"pregunta":"¿Es caro digitalizar mi negocio con WebGo?","respuesta":"No, con WebGo es accesible. Por solo 222, puedes comenzar a vender online con un sitio web optimizado que incrementa tus ingresos sin complicaciones."}]} />
<BookAppointment 
                      heading="Transforma Tus Recomendaciones en Ventas Online" 
                      description="Hola, dueño de negocio en Santiago, digitaliza tus ventas con WebGo desde solo $222 y deja que nuestros expertos gestionen tu sitio web mientras tú te enfocas en crecer."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
