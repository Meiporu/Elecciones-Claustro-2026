# Candidatura Claustro 2026 - Página Web

Una página web moderna, interactiva y multiidioma para tu candidatura al Claustro 2026.

## 📋 Características

- **Diseño moderno y limpio** con paleta de colores sencilla
- **Carrusel rotatorio interactivo** que navega a las diferentes secciones
- **Carruseles de contenido** para Experiencia y Logros
- **Espacio para foto personal** en la sección de presentación
- **Multiidioma** - Español, Inglés y Gallego
- **Responsive** - Se adapta perfectamente a dispositivos móviles
- **Optimizado para GitHub Pages** - Listo para desplegar sin configuración adicional

## 📁 Estructura de archivos

```
Elecciones-Claustro-2026/
├── index.html       # Estructura HTML principal
├── styles.css       # Estilos modernos y responsivos
├── script.js        # Lógica de interactividad
├── i18n.js          # Sistema de multiidioma
└── README.md        # Este archivo
```

## 🚀 Características principales

### 1. **Navegación Inteligente**
- Barra de navegación fija con selector de idioma
- Enlaces suaves a todas las secciones
- Carrusel horizontal para navegar secciones principales

### 2. **Secciones**
- **Presentación**: Tu foto al lado del "¿Quién soy?" + "¿Por qué me presento?" en ancho completo
- **Experiencia**: Carrusel con tus experiencias profesionales/académicas
- **Programa Electoral**: Grid de tus propuestas principales
- **Logros**: Carrusel con tus logros conseguidos
- **Contacto**: Métodos de contacto directo

### 3. **Carruseles Interactivos**
- Navegación con botones, teclado (←→) o scroll
- Animaciones suaves y responsive
- Múltiples carruseles independientes

## 🎨 Personalización

### Agregar tu foto de presentación
1. Coloca tu foto en la carpeta del proyecto (ej: `foto.jpg`)
2. Edita `index.html` y busca:
```html
<div class="photo-placeholder">📸 Tu Foto</div>
```
3. Reemplázalo con:
```html
<img src="foto.jpg" alt="Tu nombre" class="presentation-image">
```
4. Actualiza el CSS en `styles.css` para la imagen:
```css
.presentation-image {
  width: 250px;
  height: 300px;
  border-radius: 16px;
  object-fit: cover;
  border: 2px solid #e5e7eb;
}
```

### Cambiar colores
Edita las variables CSS en `styles.css`:
```css
:root {
  --color-primary: #3b82f6;      /* Azul principal */
  --color-secondary: #8b5cf6;    /* Púrpura */
  --color-accent: #ec4899;       /* Rosa */
}
```

### Agregar/Editar contenido
1. **HTML**: Edita `index.html` para cambiar la estructura
2. **Textos**: Usa los atributos `data-i18n` para enlaces con las traducciones
3. **Traducciones**: Edita `i18n.js` para agregar más idiomas

### Ejemplo de traducción
```javascript
// En i18n.js
const translations = {
  es: {
    'mi_clave': 'Mi texto en español',
  },
  en: {
    'mi_clave': 'My text in English',
  },
};

// En HTML
<h1 data-i18n="mi_clave">Texto por defecto</h1>
```

## 📱 Responsive

La página está optimizada para:
- Escritorio (1200px+)
- Tablet (768px - 1199px)
- Móvil (< 768px)

## 🌐 Desplegar en GitHub Pages

### Opción 1: Usando GitHub (Recomendado)
1. Crea un repositorio en GitHub llamado `claustro-2026`
2. Copia todos los archivos al repositorio
3. Ve a Settings → Pages
4. Selecciona `main` como rama fuente
5. ¡Listo! Tu página estará disponible en: `https://tuusuario.github.io/claustro-2026/`

### Opción 2: Desde terminal
```bash
# Clonar/crear repositorio
git clone https://github.com/tuusuario/claustro-2026.git
cd claustro-2026

# Agregar archivos
git add .
git commit -m "Initial commit: campaña website"
git push origin main
```

## 🔧 Desarrollo local

Para ver los cambios en tiempo real:

1. **Con Live Server (VS Code)**:
   - Instala la extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"

2. **Con Python**:
   ```bash
   cd Elecciones-Claustro-2026
   python -m http.server 8000
   # Abre http://localhost:8000
   ```

3. **Con Node.js**:
   ```bash
   npx http-server
   ```

## 📝 Editar contenido

### Cambiar información personal
Edita `i18n.js` y reemplaza:
- Datos en secciones de `presentation`
- Experiencias en `experience`
- Propuestas en `program`
- Logros en `achievements`

### Agregar sección de contacto personalizada
1. Edita el email en `index.html`
2. Puedes agregar un formulario usando formularios de Google o similar

## 🎯 SEO y Metadatos

Para mejorar el posicionamiento:
1. Edita el `<title>` en `index.html`
2. Agrega meta description:
```html
<meta name="description" content="Tu descripción aquí">
```

## ⚡ Optimización

- Estilos CSS comprimidos: 15KB
- JavaScript optimizado: 5KB
- Carga rápida incluso con conexiones lentas

## 🐛 Soporte y problemas

Si encuentras problemas:
1. Verifica que todos los archivos estén en la misma carpeta
2. Comprueba la consola del navegador (F12) para errores
3. Limpia el cache del navegador (Ctrl+Shift+Supr)

## 📄 Licencia

Libre para usar y modificar. Criado para fines educativos y electorales.

## 💡 Tips

- Usa emojis en el carrusel para hacerlo más visual
- Mantén los textos concisos y atractivos
- Haz pruebas en diferentes dispositivos
- Comparte en redes sociales con el enlace

---

**Creado con ❤️ para tu candidatura. ¡Buena suerte!**
