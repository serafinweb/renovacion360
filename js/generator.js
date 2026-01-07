/* ----------------------------------------------------------
   3.3 GENERADOR DE DEMO + DEPLOY SIMULADO (con backend real)
-----------------------------------------------------------*/

// Utilidad para pausar
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Marca un paso como completado
async function stepDone(circleId, textId) {
  document.getElementById(circleId).classList.add("bg-emerald-500");
  document.getElementById(circleId).classList.remove("bg-slate-700");

  document.getElementById(textId).classList.add("text-emerald-400");

  await sleep(600);
}

// Resetea los pasos visuales
function resetSteps() {
  for (let i = 1; i <= 5; i++) {
    document.getElementById("step" + i).className =
      "w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-100";
    document.getElementById("step" + i + "Text").className =
      "text-slate-500";
  }
}

// Genera la demo completa (versión conectada al backend real)
async function generateDemo() {
  const url = document.getElementById("businessUrl").value.trim();
  const forcedType = document.getElementById("businessType").value;

  if (!url) {
    alert("Introduce una URL válida");
    return;
  }

  // Mostrar progreso
  document.getElementById("progressSection").classList.remove("hidden");
  document.getElementById("resultsSection").classList.add("hidden");
  resetSteps();

  // Paso 1 — Analizando web
  await stepDone("step1", "step1Text");

  // 🔥 Llamada real al backend de Vercel
  let scraped = null;
  try {
    const response = await fetch(
      `https://agente-renovacion360.vercel.app/api/scrape?url=${encodeURIComponent(url)}`
    );
    scraped = await response.json();
  } catch (err) {
    console.error("Error en scraping:", err);
  }

  // Paso 2 — Detectando problemas
  await stepDone("step2", "step2Text");

  // Determinar sector
  const sector =
    forcedType === "auto" ? detectSector(url) : forcedType;

  // Datos reales extraídos
  const businessName = scraped?.title || "Tu negocio";
  const location = scraped?.location || "tu ciudad";
  const phone = scraped?.phone || "+34600000000";

  // Paso 3 — Generando demo sectorial
  await stepDone("step3", "step3Text");

  // Generar HTML de la demo con datos reales
  const demoHTML = generateDemoHTML(sector, businessName, location)
    .replace("+34600000000", phone);

  // Paso 4 — Simulando deploy
  await stepDone("step4", "step4Text");

  const fakeUrl =
    "https://" +
    url.replace(/https?:\/\//, "").split("/")[0] +
    "-demo.netlify.app";

  // Paso 5 — Argumentos y pitch
  await stepDone("step5", "step5Text");

  // Mostrar resultados
  document.getElementById("demoLink").textContent = fakeUrl;
  document.getElementById("demoLink").href = fakeUrl;

  // Cargar demo en iframe
  document.getElementById("demoPreview").srcdoc = demoHTML;

  // Argumentos sectoriales
  document.getElementById("salesArguments").innerHTML =
    generateSalesArguments(sector);

  // Pitch sectorial
  document.getElementById("pitchScript").innerHTML =
    generatePitchScript(sector);

  // Scoring sectorial
  document.getElementById("scoringContent").innerHTML =
    generateScoring(sector);

  // Mostrar sección final
  document.getElementById("resultsSection").classList.remove("hidden");
}