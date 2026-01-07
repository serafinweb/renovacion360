/* ----------------------------------------------------------
   3.2 PLANTILLAS HTML PREMIUM POR SECTOR
-----------------------------------------------------------*/

// Genera el bloque de servicios
function generateServicesHTML(services) {
  return `
    <section style="padding:40px 20px; background:#f8fafc;">
      <h2 style="font-size:28px; font-weight:800; margin-bottom:20px; color:#0f172a;">
        Servicios principales
      </h2>

      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:20px;">
        ${services
          .map(
            (s) => `
          <div style="background:white; padding:20px; border-radius:12px; border:1px solid #e2e8f0;">
            <h3 style="font-size:18px; font-weight:700; margin-bottom:8px; color:#0f172a;">
              ${s.title}
            </h3>
            <p style="font-size:14px; color:#475569;">
              ${s.text}
            </p>
          </div>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}

// Genera el bloque de zonas
function generateZonasHTML(location = "tu ciudad") {
  return `
    <section style="padding:40px 20px;">
      <h2 style="font-size:28px; font-weight:800; margin-bottom:20px; color:#0f172a;">
        Zonas donde trabajamos
      </h2>

      <p style="font-size:16px; color:#475569; margin-bottom:20px;">
        Cubrimos todos los barrios y zonas de ${location}. Llegamos rápido y sin complicaciones.
      </p>

      <ul style="font-size:15px; color:#334155; line-height:1.7;">
        <li>• Centro</li>
        <li>• Barrios residenciales</li>
        <li>• Polígonos industriales</li>
        <li>• Urbanizaciones</li>
        <li>• Localidades cercanas</li>
      </ul>
    </section>
  `;
}

// Bloque de confianza
function generateConfianzaHTML() {
  return `
    <section style="padding:40px 20px; background:#0f172a; color:white;">
      <h2 style="font-size:28px; font-weight:800; margin-bottom:20px;">
        ¿Por qué esta web funciona mejor?
      </h2>

      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:20px;">
        <div style="background:#1e293b; padding:20px; border-radius:12px;">
          <h3 style="font-size:18px; font-weight:700; margin-bottom:8px;">Diseño limpio</h3>
          <p style="font-size:14px; color:#cbd5e1;">Sin distracciones. Mensaje claro y directo.</p>
        </div>

        <div style="background:#1e293b; padding:20px; border-radius:12px;">
          <h3 style="font-size:18px; font-weight:700; margin-bottom:8px;">Enfoque en llamadas</h3>
          <p style="font-size:14px; color:#cbd5e1;">Botón visible y CTA repetida.</p>
        </div>

        <div style="background:#1e293b; padding:20px; border-radius:12px;">
          <h3 style="font-size:18px; font-weight:700; margin-bottom:8px;">Pensada para Google</h3>
          <p style="font-size:14px; color:#cbd5e1;">Estructura clara y rápida para SEO local.</p>
        </div>
      </div>
    </section>
  `;
}

// Plantilla principal de la demo
function generateDemoHTML(sector, businessName = "Tu negocio", location = "tu ciudad") {
  const data = SECTOR_DATA[sector];

  return `
    <div style="font-family:system-ui, sans-serif;">

      <!-- HERO -->
      <section style="
        background:url('${data.heroImage}') center/cover no-repeat;
        padding:80px 20px;
        color:white;
        text-shadow:0 2px 10px rgba(0,0,0,0.4);
      ">
        <h1 style="font-size:40px; font-weight:900; margin-bottom:10px;">
          ${data.title}
        </h1>
        <p style="font-size:20px; opacity:0.9; margin-bottom:20px;">
          ${data.subtitle}
        </p>

        <a href="tel:+34600000000" style="
          display:inline-block;
          background:#10b981;
          padding:14px 28px;
          border-radius:12px;
          font-size:18px;
          font-weight:700;
          color:#0f172a;
          text-decoration:none;
        ">
          📞 Llamar ahora
        </a>
      </section>

      ${generateServicesHTML(data.services)}
      ${generateZonasHTML(location)}
      ${generateConfianzaHTML()}

    </div>
  `;
}