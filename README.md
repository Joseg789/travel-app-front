# WorldTravel 2026 — Catálogo de Viajes

Aplicación React + TypeScript con carrusel de continentes y páginas de destinos, 
inspirada en el estilo de **friendlytrips.es** y la arquitectura de **destinosdelmundo.es**.

## 🚀 Puesta en marcha

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar en desarrollo
npm run dev

# 3. Build de producción
npm run build
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🗂 Estructura del proyecto

```
src/
├── components/
│   ├── Header.tsx / .module.css        — Barra de navegación sticky
│   ├── HeroSection.tsx / .module.css   — Hero animado con fondo Unsplash
│   ├── ContinentCarousel.tsx / .module.css  — Carrusel de 4 continentes
│   ├── ContinentPage.tsx / .module.css — Página por continente con hero + galería
│   ├── TripCard.tsx / .module.css      — Tarjeta individual de destino
│   └── Footer.tsx / .module.css        — Pie de página
├── data/
│   ├── viajes.ts       — Todos los viajes del catálogo 2026
│   └── continentes.ts  — Metadata, imágenes Unsplash y colores por continente
├── types/
│   └── index.ts        — Interfaces TypeScript (Viaje, ContinenteInfo…)
├── App.tsx             — Enrutador de vistas (home ↔ continente)
├── main.tsx            — Punto de entrada React
└── index.css           — Variables CSS globales (paleta FriendlyTrips)
```

---

## 🎨 Paleta de colores (FriendlyTrips)

| Variable           | Valor      | Uso                      |
|--------------------|------------|--------------------------|
| `--ft-navy`        | `#0d1f3c`  | Fondo header/footer      |
| `--ft-navy-light`  | `#1a2e4a`  | Elementos oscuros        |
| `--ft-coral`       | `#e8875a`  | Color acento principal   |
| `--ft-coral-dark`  | `#c96d40`  | Hover del coral          |
| `--ft-coral-soft`  | `#f5cbb8`  | Fondos suaves coral      |
| `--ft-cream`       | `#faf7f2`  | Fondo general            |
| `--ft-cream-dark`  | `#f0ebe3`  | Bordes y separadores     |

---

## 🌍 Continentes incluidos

- **Europa** — 25 destinos (Italia, Escocia, Fiordos, Austria, Polonia…)
- **Asia** — 14 destinos (Japón, India, Bali, Vietnam, Corea…)
- **África** — 8 destinos (Egipto, Marruecos, Kenia, Tanzania…)
- **América** — 8 destinos (Perú, Costa Rica, Colombia, Canadá…)

---

## ✨ Funcionalidades

- ✅ Carrusel de continentes con navegación por flechas y dots
- ✅ Hero principal animado con zoom lento
- ✅ Páginas por continente con hero cinematográfico
- ✅ Filtro por tipología (En grupo / Cupo / A medida)
- ✅ Buscador de destinos en tiempo real
- ✅ Tarjetas con precios, fechas y operadores
- ✅ Imágenes Unsplash por destino
- ✅ Diseño responsive (mobile/tablet/desktop)
- ✅ CSS Modules — sin dependencias de UI externas
- ✅ Tipografía Unbounded + Outfit (Google Fonts)

---

## 🔧 Extender el catálogo

Para añadir un nuevo destino, simplemente añade un objeto al array en `src/data/viajes.ts`:

```ts
{
  continente: "EUROPA",
  nombre: "Nuevo Destino",
  tipologia: "plaza_a_plaza_en_grupo",
  dias: 8,
  fechas: "Julio 2026",
  mes: "Julio",
  ciudadSalida: "Valencia",
  precioHabDoble: 1200,
  precioIndividual: 1500,
  proveedor: "Mi Proveedor",
  activo: true,
}
```

Y opcionalmente añade su imagen en `src/data/continentes.ts` → `destinoImages`:

```ts
"Nuevo Destino": "https://images.unsplash.com/photo-XXXXX?w=600&q=70",
```
