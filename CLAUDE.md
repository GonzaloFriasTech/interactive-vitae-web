# Interactive Vitae — Web Landing Page

## Qué es este proyecto
Landing page profesional para Interactive Vitae, una startup que crea CVs interactivos con IA para profesionales.

## Slogan
"Your career reimagined"

## Stack técnico
- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- Hosting: Netlify (plan gratuito)
- Formulario de contacto: Netlify Forms (sin backend)

## Colores
- Fondo principal: #f2ede6
- Fondo secundario: #e8e0d5
- Navy principal: #1a2f6e
- Navy claro: #2d4499
- Azul acento: #2563eb
- Texto oscuro: #0f1f3d
- Texto medio: #4a5568
- Texto suave: #8a96a8
- Tags/chips: #edf0f7
- Cards: #ffffff

## Tipografía
- Títulos: Instrument Serif (Google Fonts)
- Cuerpo: DM Sans (Google Fonts, pesos 300/400/500/600)

## Logo
- Archivo: logo.png (se agregará luego)
- El logo tiene colores celeste/teal y navy azul oscuro
- NO usar texto ni símbolos como reemplazo del logo

## Estructura de la página (en orden)
1. Navbar — logo real + links de navegación
2. Hero — logo grande, slogan, bajada, botones CTA
3. Qué es Interactive Vitae
4. Qué buscamos
5. Casos de éxito — por ahora solo Gonzalo Frías con link a frias-cv.netlify.app
6. Contacto — formulario Netlify con mensaje motivador
7. Footer

## Archivos del proyecto
- index.html — toda la estructura
- style.css — todos los estilos
- logo.png — logo de la empresa (a agregar)
- netlify.toml — configuración de Netlify

## Decisiones importantes
- Diseño moderno, claro, profesional — NO oscuro ni pesado
- Mostrar prominentemente que usa IA
- Mobile responsive obligatorio
- El hero debe ser impactante visualmente

## Errores conocidos y soluciones

### Logo no visible
- Causa: Windows oculta extensiones, al renombrar queda "logo.png.png"
- Solución: Verificar nombre exacto del archivo, debe ser "logo.png" sin duplicar extensión
- Al reemplazar el logo siempre verificar con: listar archivos de la carpeta

### Logo con fondo blanco
- Causa: PNG original tenía fondo blanco, chocaba con navbar navy
- Solución: Usar remove.bg para eliminar el fondo antes de usar el logo

## Progreso de la web — cambios realizados

### Sesión 31/03/2026
- ✅ Estructura base creada (index.html, style.css, script.js, netlify.toml)
- ✅ Logo agregado con fondo transparente (remove.bg)
- ✅ Toggle de idioma ES/EN funcionando con localStorage
- ✅ Animación de red neuronal en el Hero (canvas HTML5)
- ✅ Textos sección "Qué es" actualizados con nueva propuesta de valor
- ✅ Label cambiado a "NUESTRA HERRAMIENTA / OUR TOOL"
- ✅ Párrafo del Hero actualizado ("Tu perfil, no un documento")

### Pendiente próxima sesión
- Revisar y mejorar resto de secciones
- Agregar más dinamismo visual
- Subir a Netlify
