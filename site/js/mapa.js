
      var map = L.map("map").setView([36.7762, -2.8145], 13); // Coordenadas de El Ejido, Almería
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
  