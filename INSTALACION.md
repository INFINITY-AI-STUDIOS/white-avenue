# Guía de instalación — White Avenue Dental Clinic

Sitio web de **White Avenue Dental Clinic** (Nogales, Sonora). Es una web estática: no usa base de datos ni servidor propio, así que funciona en cualquier hosting.

El formulario de contacto abre WhatsApp de la clínica con el mensaje ya escrito. Para cambiar el número, edita `src/components/` (busca `526312499203`) y vuelve a compilar.

---

## 1. Hosting recomendado: Hostinger

Para esta web recomendamos **Hostinger, plan Premium Web Hosting** (o superior):

- Alcanza de sobra para un sitio como este.
- Incluye certificado SSL gratis (el candado de `https://`).
- Incluye correos con el dominio de la clínica (por ejemplo `citas@tudominio.com`).
- El primer año suele incluir el dominio gratis.
- Tiene panel en español y soporte 24/7 por chat.

👉 **Contratar Hostinger:** [ENLACE_HOSTINGER](ENLACE_HOSTINGER)

> Enlace de referido: si contratas por aquí, quien te recomienda recibe una comisión de Hostinger. A ti no te cuesta nada extra.

Si ya tienes otro hosting con cPanel (GoDaddy, SiteGround, Banahosting, etc.), también sirve: sigue la opción A igual.

---

## 2. Opción A — Subir el ZIP (la más fácil, sin programar)

Tiempo: unos 10 minutos.

1. **Ten a mano el sitio listo.** Es el archivo `white-avenue-sitio.zip` que se entrega con esta guía (también puede estar en la sección *Releases* del repositorio). Si no lo tienes, genéralo con `npm run build` (sección 5) y comprime el contenido de la carpeta `dist`.
2. **Entra a tu hosting.** En Hostinger: hPanel → **Sitios web** → tu dominio → **Administrador de archivos**. En cPanel: **Administrador de archivos**.
3. **Abre la carpeta `public_html`.** Si tiene archivos de una web anterior (por ejemplo `default.php` o un WordPress), respáldalos o bórralos.
4. **Sube el ZIP** a `public_html` con el botón **Subir**.
5. **Descomprímelo:** clic derecho sobre el ZIP → **Extraer** → en la misma carpeta `public_html`. Debe quedar `index.html` directamente dentro de `public_html`, no dentro de otra carpeta.
6. **Borra el ZIP** de `public_html` (ya no hace falta).
7. **Activa el SSL.** En Hostinger: hPanel → **Seguridad** → **SSL** → instalar el gratuito. En cPanel: **SSL/TLS Status** → **Run AutoSSL**.
8. **Abre tu dominio** en el navegador. Listo.

El ZIP ya trae un archivo oculto `.htaccess` que fuerza `https://` y deja el sitio en caché. Si el administrador de archivos no muestra archivos ocultos, no pasa nada: está ahí.

### ¿El dominio está en otro lado?

Si compraste el dominio fuera del hosting, apúntalo al hosting de una de estas formas:

- **Cambiar los nameservers** del dominio a los que te da el hosting (en Hostinger: `ns1.dns-parking.com` y `ns2.dns-parking.com`; confírmalos en hPanel).
- O crear un registro **A** con la IP del hosting (hPanel → Sitios web → Detalles).

Los cambios de DNS tardan de unos minutos a 24 horas.

---

## 3. Opción B — Conectar el repositorio (se actualiza solo)

Para quien vaya a hacer cambios seguido. Cada cambio que se suba a GitHub se publica solo.

**Hostinger (planes Business o superiores, con Node.js):**

1. hPanel → **Sitios web** → **Agregar sitio web** → **Aplicación web Node.js**.
2. Conecta GitHub y elige el repositorio `INFINITY-AI-STUDIOS/white-avenue`, rama `main`.
3. Configuración de compilación:
   - Comando de instalación: `npm install`
   - Comando de compilación: `npm run build`
   - Carpeta de salida: `dist`
4. Despliega. Los siguientes `git push` a `main` se publican automáticamente.

**Otros servicios que también funcionan** (gratis para sitios estáticos): Netlify, Vercel o Cloudflare Pages, con los mismos tres datos de compilación.

---

## 4. Opción C — Contenedor (Docker / Google Cloud Run)

El repositorio trae `Dockerfile` (compila y sirve con nginx en el puerto 8080).

```bash
docker build -t white-avenue .
docker run -p 8080:8080 white-avenue
# abrir http://localhost:8080
```

En Google Cloud Run:

```bash
gcloud run deploy white-avenue --source . --region us-central1 --allow-unauthenticated
```

---

## 5. Para desarrolladores: correr y modificar el sitio

Requisitos: [Node.js](https://nodejs.org) 20 o superior.

```bash
git clone https://github.com/INFINITY-AI-STUDIOS/white-avenue.git
cd white-avenue
npm install
npm run dev      # vista previa en http://localhost:3000
npm run build    # genera la carpeta dist/ lista para subir
```

| Qué cambiar | Dónde |
|---|---|
| Textos de cada sección | `src/components/` (Hero, About, Services, Testimonials, FAQ, Contact, Footer) |
| Número de WhatsApp | buscar `526312499203` en `src/components/` |
| Logo, favicon y fotos | `public/` |
| Colores y tipografía | `src/index.css` |
| Título y descripción para Google | `index.html` |

Después de cambiar algo: `npm run build` y sube el contenido de `dist/` (opción A), o haz `git push` (opción B).

---

## 6. Problemas comunes

| Problema | Solución |
|---|---|
| Se ve la página por defecto del hosting | Borra `default.php` / `index.php` de `public_html`; confirma que `index.html` está directamente ahí |
| Página en blanco | Los archivos quedaron dentro de una subcarpeta. Mueve todo el contenido a `public_html` |
| «No seguro» en el navegador | Activa el SSL (paso 7 de la opción A) y espera unos minutos |
| El dominio no abre | Revisa los nameservers o el registro A; puede tardar hasta 24 horas |

---

Desarrollado por **Andrés Salamanca** · [soyandressalamanca.com](https://soyandressalamanca.com)
