/* ----------------------------------------------------------
   3.9 CONTROLADOR FINAL + INICIALIZACIÓN
-----------------------------------------------------------*/

// Cargar token guardado al iniciar
(function init() {
  const savedToken = localStorage.getItem("netlifyToken");
  if (savedToken) {
    document.getElementById("netlifyToken").value = savedToken;

    const status = document.getElementById("tokenStatus");
    status.textContent = "Token cargado desde tu navegador";
    status.className =
      "text-xs rounded-lg px-3 py-2 border border-emerald-400 text-emerald-300 bg-emerald-900/30";
    status.classList.remove("hidden");
  }
})();