# Hacienda El Novillero — Landing de estadía

Proyecto Astro + Tailwind + GSAP.

## Requisitos
- Node.js 18 o superior

## Instalación
```
npm install
```

## Desarrollo
```
npm run dev
```
Abre http://localhost:4321/estadia

## Build de producción
```
npm run build
npm run preview
```

## Estructura
- `src/pages/estadia.astro` → página de información para la estadía (destino del QR)
- `src/pages/index.astro` → redirige a /estadia
- `src/layouts/Layout.astro` → fuentes, estilos globales, paleta colonial
- `public/img/logo-hacienda-el-novillero.png` → logo oficial

## Próximos pasos sugeridos
- `src/pages/historia.astro` → historia de la hacienda (QR aparte)
- `src/pages/menu.astro` → menú de restaurante y grupos
- `src/pages/ubicacion.astro` → mapa embebido
