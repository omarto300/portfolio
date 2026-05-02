# Portfolio Personal — Omar Sanchez Santiago

Sitio web personal de portafolio. Desarrollador Backend con más de 8 años de experiencia especializado en Java, Spring Boot, Node.js y arquitecturas de microservicios.

**Demo:** https://omarto300.github.io/portfolio/

---

## Stack

| Categoría | Tecnología |
|-----------|------------|
| UI | React 19 |
| Build | Vite 7 |
| Estilos | Tailwind CSS v4 (via plugin de Vite, sin PostCSS) |
| Íconos | lucide-react |
| Package manager | pnpm |
| Despliegue | GitHub Pages |

---

## Secciones

- **Home** — Hero con foto, stack tecnológico, botones para descargar CV y acceder a LinkedIn/GitHub, tarjetas de estadísticas (proyectos, años de experiencia, tecnologías).
- **Proyectos** — Grid de 6 proyectos con filtros por categoría (Web, Backend, Freelance, Algoritmos). Cada tarjeta muestra descripción, tecnologías, y links al repositorio y demo.
- **Experiencia** — Timeline de carrera con 3 empresas (IDS Comercial, Banco Azteca, TH Tec), responsabilidades, logros y tecnologías por rol.
- **Contacto** — Formulario de contacto (nombre, email, teléfono, mensaje) e información de contacto directa.

---

## Desarrollo local

```bash
pnpm install
pnpm dev        # servidor de desarrollo con HMR
pnpm build      # build de producción
pnpm preview    # previsualizar el build localmente
pnpm lint       # ESLint
```

---

## Estructura

```
src/
├── pages/          # HomePage, ProyectsPage, ExperiencePage, Contact
├── components/     # Navbar, Portfolio, ProjectCard, Button, StatCard, NavButton
├── data/           # proyects.js, timeLineData.js
└── assets/         # profile.png, CV_OMAR_SANCHEZ.pdf, logo.svg
```

La navegación entre páginas se maneja con un estado `activePage` en `App.jsx` — no hay React Router.

---

## Despliegue

El despliegue es automático a GitHub Pages al hacer push a `main` vía GitHub Actions (`.github/workflows/deploy.yml`). El build corre con Node 24 y pnpm, y el artefacto `./dist` se publica bajo el path base `/portfolio/`.
