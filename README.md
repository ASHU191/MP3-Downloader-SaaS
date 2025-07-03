# 🎵 YouTube to MP3 Downloader - Real Implementation

Una aplicación web **REAL** para convertir videos de YouTube a MP3 usando **youtube-dl** y **FFmpeg**.

## ⚡ Características Reales

- ✅ **Conversión Real**: Usa youtube-dl-exec y FFmpeg
- ✅ **Alta Calidad**: MP3 320kbps estéreo
- ✅ **Audio Original**: Extrae el audio real del video de YouTube
- ✅ **Sin Límites**: Convierte cualquier video público de YouTube
- ✅ **Rápido**: Conversión optimizada en el servidor

## 🛠️ Instalación

### 1. Instalar Dependencias del Sistema

**Ubuntu/Debian:**
\`\`\`bash
sudo apt update
sudo apt install python3 python3-pip ffmpeg
pip3 install yt-dlp
\`\`\`

**macOS:**
\`\`\`bash
brew install python ffmpeg
pip3 install yt-dlp
\`\`\`

**Windows:**
1. Instala Python desde python.org
2. Instala FFmpeg desde ffmpeg.org
3. Ejecuta: `pip install yt-dlp`

### 2. Instalar Dependencias del Proyecto

\`\`\`bash
npm install
# Las dependencias incluyen:
# - youtube-dl-exec
# - fluent-ffmpeg
# - fs-extra
\`\`\`

### 3. Ejecutar la Aplicación

\`\`\`bash
npm run dev
\`\`\`

## 🔧 Cómo Funciona

### Proceso de Conversión Real:

1. **Validación**: Verifica que la URL de YouTube sea válida
2. **Extracción**: youtube-dl obtiene información del video
3. **Descarga**: Descarga el audio en la mejor calidad disponible
4. **Conversión**: FFmpeg convierte a MP3 320kbps
5. **Entrega**: Sirve el archivo MP3 real al usuario
6. **Limpieza**: Elimina archivos temporales automáticamente

### Código Principal:

\`\`\`typescript
// Conversión real usando youtube-dl y FFmpeg
async function convertYouTubeToMP3(url: string, videoId: string) {
  // 1. Obtener info del video
  const info = await youtubeDl(url, {
    dumpSingleJson: true,
    noCheckCertificates: true,
  })

  // 2. Descargar audio
  await youtubeDl(url, {
    extractAudio: true,
    audioFormat: 'mp3',
    audioQuality: 0, // Mejor calidad
    output: `temp/${videoId}.%(ext)s`
  })

  // 3. Convertir con FFmpeg
  await new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .toFormat('mp3')
      .audioBitrate(320)
      .audioChannels(2)
      .audioFrequency(44100)
      .save(outputPath)
      .on('end', resolve)
      .on('error', reject)
  })

  return outputPath
}
\`\`\`

## 📁 Estructura del Proyecto

\`\`\`
youtube-mp3-downloader/
├── app/
│   ├── api/
│   │   ├── convert/route.ts      # Conversión real con youtube-dl
│   │   └── download/[id]/route.ts # Descarga de archivos MP3
│   └── page.tsx                  # Interfaz principal
├── lib/
│   └── youtube-converter.ts      # Clase para conversión
├── temp/                         # Archivos temporales
└── components/
    └── download-card.tsx         # UI para descarga
\`\`\`

## ⚙️ Configuración Avanzada

### Variables de Entorno (opcional):

\`\`\`env
TEMP_DIR=/path/to/temp/files
MAX_FILE_AGE_MINUTES=30
FFMPEG_PATH=/usr/bin/ffmpeg
YOUTUBE_DL_PATH=/usr/local/bin/yt-dlp
\`\`\`

### Personalizar Calidad:

\`\`\`typescript
const options = {
  quality: "320", // 128, 192, 320
  format: "mp3",  // mp3, m4a, wav
}
\`\`\`

## 🚀 Deployment

### Vercel (Recomendado):

\`\`\`bash
npm run build
vercel --prod
\`\`\`

**Nota**: Asegúrate de que el servidor tenga python, yt-dlp y ffmpeg instalados.

### Docker:

\`\`\`dockerfile
FROM node:18-alpine

# Instalar dependencias del sistema
RUN apk add --no-cache python3 py3-pip ffmpeg
RUN pip3 install yt-dlp

# Copiar y construir la app
COPY . .
RUN npm install && npm run build

EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## ⚠️ Consideraciones Legales

- ✅ **Uso Personal**: Permitido para uso personal y educativo
- ❌ **Uso Comercial**: Revisa los términos de YouTube
- ⚖️ **Derechos de Autor**: Respeta las leyes de copyright
- 🔒 **Términos de Servicio**: Cumple con los ToS de YouTube

## 🛡️ Características de Seguridad

- 🔐 Validación estricta de URLs
- 🧹 Limpieza automática de archivos temporales
- 🚫 Prevención de ataques de path traversal
- ⏱️ Timeouts para evitar procesos colgados

## 📊 Monitoreo

\`\`\`typescript
// Logs detallados del proceso
console.log("Starting conversion for:", videoId)
console.log("Download progress:", progress.percent)
console.log("Conversion completed:", outputPath)
\`\`\`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama: `git checkout -b feature/nueva-caracteristica`
3. Commit: `git commit -m 'Agregar nueva característica'`
4. Push: `git push origin feature/nueva-caracteristica`
5. Abre un Pull Request

## 📞 Soporte

- 🐛 **Bugs**: Abre un issue en GitHub
- 💡 **Features**: Sugiere nuevas características
- 📧 **Contacto**: [tu-email@ejemplo.com]

---

**¡Conversión REAL de YouTube a MP3 con la mejor calidad!** 🎵
