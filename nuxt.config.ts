// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
        name: 'Test',
        short_name: 'Test',
        start_url: '/',
        background_color: "#ff5e3a",
        
  }
}
  })
