import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "shadcn-nuxt"],

  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  app: {
    head: {
      title: "Caselify: AI Legal Intelligence; Beyond Case Management",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Securely manage every case with AI that drafts, organises and learns with your practice. Built for Africa, and expanding globally!",
        },
        {
          property: "og:image",
          content: "/assets/caselify-logo-dark.svg",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabasePublishableKey: process.env.SUPABASE_PUBLISHABLE_KEY,
    },
  },
});
