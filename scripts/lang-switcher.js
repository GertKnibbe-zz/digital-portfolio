const switcher = document.getElementById("languageSwitcher");

function getNestedTranslation(obj, key) {
  return key.split('.').reduce((res, k) => (res ? res[k] : undefined), obj);
}

function loadLanguage(lang) {
  fetch(`translations/${lang}.json`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(translations => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const value = getNestedTranslation(translations, key);
        if (value) {
          el.textContent = value;
        }
      });
    })
    .catch(e => {
    });
}

switcher.addEventListener("change", (e) => {
  loadLanguage(e.target.value);
});

// Optioneel: standaard taal bij laden
window.addEventListener("DOMContentLoaded", () => {
  loadLanguage("nl");
});
