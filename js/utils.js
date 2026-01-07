/* ----------------------------------------------------------
   3.8 UTILIDADES PRO
-----------------------------------------------------------*/

// Copiar enlace de la demo
function copyDemoLink() {
  const link = document.getElementById("demoLink").textContent;
  navigator.clipboard.writeText(link);
  alert("Enlace copiado al portapapeles");
}

// Abrir demo en nueva pestaña
function openDemo() {
  const link = document.getElementById("demoLink").href;
  window.open(link, "_blank");
}

// Descargar argumentos en TXT
function downloadArgumentsTxt() {
  const text = document.getElementById("salesArguments").innerText;
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "argumentos.txt";
  a.click();

  URL.revokeObjectURL(url);
}

// Copiar pitch
function copyPitchScript() {
  const text = document.getElementById("pitchScript").innerText;
  navigator.clipboard.writeText(text);
  alert("Script copiado al portapapeles");
}

// Guardar token
function saveToken() {
  const token = document.getElementById("netlifyToken").value.trim();
  if (!token) {
    alert("Introduce un token válido");
    return;
  }

  localStorage.setItem("netlifyToken", token);

  const status = document.getElementById("tokenStatus");
  status.textContent = "Token guardado correctamente";
  status.className =
    "text-xs rounded-lg px-3 py-2 border border-emerald-400 text-emerald-300 bg-emerald-900/30";
  status.classList.remove("hidden");
}

// Borrar token
function clearToken() {
  localStorage.removeItem("netlifyToken");

  const status = document.getElementById("tokenStatus");
  status.textContent = "Token eliminado";
  status.className =
    "text-xs rounded-lg px-3 py-2 border border-red-400 text-red-300 bg-red-900/30";
  status.classList.remove("hidden");
}