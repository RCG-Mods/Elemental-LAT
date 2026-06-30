# Elemental LAT — Sitio web

Sitio oficial del servidor de rol **Elemental LAT** (FiveM). Landing inmersiva con estética _vaporwave / Vice City_ y toques japoneses, pensada para presentar el servidor y llevar jugadores al Discord.

🌐 **En vivo:** https://rcg-mods.github.io/Elemental-LAT/

---

## Índice
- [Stack](#stack)
- [Requisitos](#requisitos)
- [Desarrollo local](#desarrollo-local)
- [Cómo editar el contenido](#cómo-editar-el-contenido) ← _para no-programadores_
- [Estructura del proyecto](#estructura-del-proyecto)
- [Sistema de diseño](#sistema-de-diseño)
- [Sonidos de interfaz](#sonidos-de-interfaz)
- [Despliegue](#despliegue)
- [Pendientes (TODO)](#pendientes-todo)

---

## Stack
- **Next.js 16** (App Router, export estático)
- **Tailwind CSS v4**
- **TypeScript**
- Animaciones con **CSS** + `IntersectionObserver` (sin librerías extra)
- Tipografía **Orbitron** (marca RCG) + **Noto Sans JP** (acentos en katakana)

> El sitio es **100% estático** (`output: "export"`): no hay backend ni base de datos. Se sirve como archivos en GitHub Pages.

---

## Requisitos
- **Node.js 20+**
- **npm**

---

## Desarrollo local

```bash
npm install      # instala dependencias (solo la primera vez)
npm run dev      # arranca el servidor de desarrollo
```

Abre **http://localhost:3000**. Los cambios se reflejan al instante (Fast Refresh).

Otros comandos:

```bash
npm run build    # genera el sitio estático en /out (igual que el deploy)
npm run lint     # revisa el código
```

---

## Cómo editar el contenido

La mayoría de los textos y enlaces viven en **un solo archivo**, fácil de editar:

### 📝 `src/config/site.ts`
Cambia aquí el nombre, tagline, descripción y **todos los enlaces**:

```ts
export const site = {
  name: "Elemental LAT",
  tagline: "El futuro del Roleplay Latino comienza aquí",
  description: "…",
  connectUrl: "https://cfx.re/join/XXXXX",  // ← código de conexión FiveM
  discordUrl: "https://discord.gg/MVnAg2qkTQ",
  storeUrl: "https://elemental-lat.tebex.io", // ← tienda Tebex
  highlights: { … },                          // ← textos de la banda de stats
};
```

> Las líneas marcadas con `// TODO` son **placeholders** pendientes de datos reales.

### Textos de cada sección
Cada bloque de la página es un componente en `src/components/`. Para cambiar textos:

| Sección en la web            | Archivo a editar                     |
|------------------------------|--------------------------------------|
| Portada (Hero)               | `src/components/Hero.tsx`            |
| Banda de datos               | `src/components/Stats.tsx`           |
| "Por qué Elemental"          | `src/components/Features.tsx`        |
| Transferencia de Bienes      | `src/components/AssetTransfer.tsx`   |
| Cómo unirte                  | `src/components/HowToJoin.tsx`       |
| Galería                      | `src/components/Gallery.tsx`         |
| Preguntas frecuentes (FAQ)   | `src/components/Faq.tsx`             |
| Llamado final                | `src/components/CtaBanner.tsx`       |
| Pie de página                | `src/components/Footer.tsx`          |
| Menú / navegación            | `src/components/Navbar.tsx`          |

### Imágenes de marca
Reemplaza los archivos en `public/brand/` manteniendo el mismo nombre
(`server-logo.png`, etc.). Para la **galería**, sustituye los tiles de color en
`Gallery.tsx` por capturas reales (colócalas en `public/`).

---

## Estructura del proyecto

```
src/
├─ app/
│  ├─ layout.tsx        # fuentes, metadata SEO, montaje global del sonido
│  ├─ page.tsx          # orden de las secciones de la landing
│  └─ globals.css       # tokens de color, gradientes y utilidades (synthwave)
├─ components/          # cada sección + piezas reutilizables
│  ├─ RetroBackground   # fondo: sol retro, grid neón, palmeras
│  ├─ Reveal            # animación de aparición al hacer scroll
│  ├─ SoundFx           # sonidos de hover/click + toggle de silencio
│  ├─ SectionHeading    # encabezado reutilizable de sección
│  └─ icons.tsx         # iconos SVG (sin emojis)
└─ config/
   └─ site.ts           # ⭐ textos, enlaces y helper de rutas (asset/basePath)

public/
├─ brand/               # logos del servidor
└─ sfx/                 # sonidos de interfaz (click.mp3, hover.wav)
```

---

## Sistema de diseño

Basado en la guía de marca oficial de RCG (`RCG Gradient's and styles snippet.css`).

**Tipografía:** Orbitron (títulos 700, cuerpo 500).

**Paleta** (definida en `src/app/globals.css`):

| Token       | Color      | Uso                          |
|-------------|------------|------------------------------|
| `indigo`    | `#19003A`  | base del gradiente           |
| `violet`    | `#5E00DA`  | gradiente / acentos          |
| `purple`    | `#A200FF`  | gradiente / acentos          |
| `magenta`   | `#D300D3`  | hover / acentos              |
| `gold`      | `#B88A00`  | hover                        |
| `teal`      | `#009488`  | hover / detalles "online"    |

- Botones: gradiente índigo→violeta→púrpura; **hover** magenta→oro→teal (`.btn-grad`).
- El logo conserva su arcoíris original; la UI usa la paleta púrpura.
- Estética: _vaporwave / Vice City_ (sol retro, grid neón, palmeras) + katakana decorativa.
- Sizing fluido con `clamp()` / `vw` / `vmin` para consistencia entre resoluciones.

---

## Sonidos de interfaz
`src/components/SoundFx.tsx` reproduce un sonido de **hover** en elementos
interactivos y uno de **click**, con:
- Botón de **silencio** flotante (preferencia guardada en el navegador).
- Sin sonido de hover en dispositivos táctiles.
- El audio se activa tras la primera interacción del usuario (regla del navegador).

Archivos en `public/sfx/`. Para cambiarlos, reemplaza `click.mp3` / `hover.wav`.

---

## Despliegue

El sitio se publica **automáticamente en GitHub Pages** con cada `push` a `main`,
mediante GitHub Actions (`.github/workflows/deploy.yml`).

1. Haces cambios y los subes:
   ```bash
   git add -A
   git commit -m "Actualiza contenido"
   git push
   ```
2. El workflow compila el sitio (`output: export`) y lo publica.
3. En ~1–2 minutos queda en línea.

**Detalle técnico:** como es un _project page_, el sitio vive en el subpath
`/Elemental-LAT`. La variable `NEXT_PUBLIC_BASE_PATH` (inyectada en el build de
Pages) hace que las rutas de imágenes y sonidos funcionen tanto en local como en
producción. No edites esto salvo que cambie el nombre del repo.

---

## Pendientes (TODO)
- [ ] **Código de conexión FiveM** real (`connectUrl` en `site.ts`).
- [ ] **Tienda Tebex** real o quitar el enlace (`storeUrl`).
- [ ] **Capturas reales** para la galería.
- [ ] Página/sistema de **reglas** (mencionado como "próximamente").
- [ ] _(Opcional)_ Actualizar las GitHub Actions a Node 24 (hoy avisan deprecación de Node 20).

---

_Sitio no afiliado a Rockstar Games ni a Take-Two Interactive._
