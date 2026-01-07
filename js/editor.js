/* ----------------------------------------------------------
   3.7 EDITOR PRO DE LA DEMO
-----------------------------------------------------------*/

// Aplica cambios simples a la demo generada
function applyDemoChanges() {
  const request = document.getElementById("demoEditRequest").value.trim();
  if (!request) return;

  let currentHTML = document.getElementById("demoPreview").srcdoc;

  // Reglas simples de edición
  const rules = [
    {
      match: /botón.*rojo/i,
      apply: () => {
        currentHTML = currentHTML.replace(
          /background:#10b981/g,
          "background:#ef4444"
        );
      }
    },
    {
      match: /botón.*azul/i,
      apply: () => {
        currentHTML = currentHTML.replace(
          /background:#10b981/g,
          "background:#3b82f6"
        );
      }
    },
    {
      match: /botón.*amarillo/i,
      apply: () => {
        currentHTML = currentHTML.replace(
          /background:#10b981/g,
          "background:#facc15"
        );
      }
    },
    {
      match: /título.*agresivo/i,
      apply: () => {
        currentHTML = currentHTML.replace(
          /<h1([^>]*)>/,
          `<h1$1 style="font-size:48px; font-weight:900; text-transform:uppercase;">🔥 `
        );
      }
    },
    {
      match: /urgencia/i,
      apply: () => {
        currentHTML = currentHTML.replace(
          /<\/h1>/,
          `</h1><p style="font-size:22px; color:#f87171; font-weight:700; margin-top:10px;">⏳ Atención inmediata disponible</p>`
        );
      }
    }
  ];

  // Aplicar reglas
  rules.forEach((rule) => {
    if (rule.match.test(request)) rule.apply();
  });

  // Actualizar iframe
  document.getElementById("demoPreview").srcdoc = currentHTML;
}