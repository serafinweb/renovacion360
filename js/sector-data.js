/* ----------------------------------------------------------
   3.1 MOTOR SECTORIAL (detección + imágenes reales)
-----------------------------------------------------------*/

// Diccionario de sectores con imágenes reales de Pexels
const SECTOR_DATA = {
  "cristalería": {
    heroImage: "https://images.pexels.com/photos/5691601/pexels-photo-5691601.jpeg",
    title: "Cristalería profesional en tu ciudad",
    subtitle: "Instalación, reparación y urgencias 24h.",
    services: [
      { title: "Instalación de cristales", text: "Montaje profesional para hogares y negocios." },
      { title: "Reparación urgente", text: "Servicio rápido para roturas y emergencias." },
      { title: "Escaparates y mamparas", text: "Soluciones modernas y seguras para comercios." }
    ]
  },

  "estética": {
    heroImage: "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg",
    title: "Clínica estética avanzada",
    subtitle: "Tratamientos faciales, corporales y rejuvenecimiento.",
    services: [
      { title: "Tratamientos faciales", text: "Limpieza, hidratación y rejuvenecimiento." },
      { title: "Depilación láser", text: "Tecnología avanzada para resultados duraderos." },
      { title: "Remodelación corporal", text: "Tratamientos no invasivos para mejorar tu figura." }
    ]
  },

  "fontanería": {
    heroImage: "https://images.pexels.com/photos/5852402/pexels-photo-5852402.jpeg",
    title: "Fontaneros profesionales 24h",
    subtitle: "Averías, fugas y urgencias en minutos.",
    services: [
      { title: "Reparación de fugas", text: "Solución rápida y garantizada." },
      { title: "Desatascos", text: "Servicio urgente sin obras." },
      { title: "Instalaciones", text: "Montaje de grifería, termos y más." }
    ]
  },

  "electricista": {
    heroImage: "https://images.pexels.com/photos/4254168/pexels-photo-4254168.jpeg",
    title: "Electricistas certificados",
    subtitle: "Instalaciones, averías y urgencias 24h.",
    services: [
      { title: "Averías eléctricas", text: "Diagnóstico y reparación inmediata." },
      { title: "Boletines", text: "Certificados oficiales para tu vivienda o negocio." },
      { title: "Instalaciones", text: "Cuadros eléctricos, enchufes y más." }
    ]
  },

  "cerrajería": {
    heroImage: "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg",
    title: "Cerrajeros urgentes 24h",
    subtitle: "Aperturas sin daños y cambios de cerradura.",
    services: [
      { title: "Apertura de puertas", text: "Rápido y sin romper." },
      { title: "Cambio de cerraduras", text: "Seguridad reforzada para tu hogar." },
      { title: "Urgencias 24h", text: "Llegamos en minutos." }
    ]
  },

  "taller": {
    heroImage: "https://images.pexels.com/photos/4489721/pexels-photo-4489721.jpeg",
    title: "Taller mecánico profesional",
    subtitle: "Mantenimiento, reparación y diagnosis avanzada.",
    services: [
      { title: "Mecánica rápida", text: "Cambios de aceite, filtros y más." },
      { title: "Diagnosis electrónica", text: "Equipos de última generación." },
      { title: "Reparaciones", text: "Frenos, suspensión, motor y más." }
    ]
  },

  "restaurante": {
    heroImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    title: "Restaurante de calidad",
    subtitle: "Cocina casera, ingredientes frescos y ambiente único.",
    services: [
      { title: "Menú diario", text: "Opciones variadas y saludables." },
      { title: "Carta completa", text: "Platos tradicionales y modernos." },
      { title: "Reservas", text: "Atención personalizada para grupos." }
    ]
  },

  "otros": {
    heroImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    title: "Profesionales en tu ciudad",
    subtitle: "Servicio rápido, claro y orientado a resultados.",
    services: [
      { title: "Servicio principal", text: "Descripción del servicio principal." },
      { title: "Servicio destacado", text: "Beneficio clave para el cliente." },
      { title: "Servicio adicional", text: "Valor añadido para cerrar la venta." }
    ]
  }
};


// Detección automática del sector según palabras clave
function detectSector(url) {
  const lower = url.toLowerCase();

  if (lower.includes("cristal")) return "cristalería";
  if (lower.includes("estet")) return "estética";
  if (lower.includes("fontan")) return "fontanería";
  if (lower.includes("electri")) return "electricista";
  if (lower.includes("cerraj")) return "cerrajería";
  if (lower.includes("taller")) return "taller";
  if (lower.includes("rest")) return "restaurante";

  return "otros";
}