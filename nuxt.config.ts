import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"
export default defineNuxtConfig({
	//...
	build: {
		transpile: ["vuetify"],
	},
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }))
			})
		},
		"@pinia/nuxt",
		"@sidebase/nuxt-auth",
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
	auth: {
		globalAppMiddleware: true,
		baseURL: "http://127.0.0.1:8000/api/auth",
		provider: {
			pages: {
				login: "/",
			},
			type: "refresh",
			endpoints: {
				signIn: { path: "/login", method: "post" },
				signOut: { path: "/logout", method: "post" },
				signUp: { path: "/register", method: "post" },
				getSession: { path: "/user", method: "get" },
				refresh: { path: "/refresh", method: "post" },
			},
			token: {
				signInResponseTokenPointer: "/access",
				maxAgeInSeconds: 60 * 120,
				sameSiteAttribute: "lax",
			},
			refreshToken: {
				signInResponseRefreshTokenPointer: "/refresh",
				maxAgeInSeconds: 60 * 60 * 24,
				refreshRequestTokenPointer: "/refresh",
			},
		},
	},
})
