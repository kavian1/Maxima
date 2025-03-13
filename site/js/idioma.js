// Función para cargar el archivo JSON
async function loadTranslations() {
  const response = await fetch('json/translations.json');
  const translations = await response.json();
  return translations;
}

// Función para aplicar las traducciones
function applyTranslations(language, translations) {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[language][key];
  });
}

// Función para cambiar el idioma
async function changeLanguage(language) {
  const scrollPosition = window.scrollY; // Guardar la posición del scroll
  const translations = await loadTranslations();
  applyTranslations(language, translations);
  window.scrollTo(0, scrollPosition); // Restaurar la posición del scroll
}

// Cambiar el idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('es'); // Cambia 'es' por el idioma que desees
});