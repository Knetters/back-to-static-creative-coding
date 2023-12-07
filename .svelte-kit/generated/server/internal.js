
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n\t<meta charset=\"utf-8\" />\r\n\t<link rel=\"icon\" href=\"../assets/SPAT_Logo_zondertekst.png\" />\r\n\t<meta name=\"viewport\" content=\"width=device-width\" />\r\n\t<meta name=\"description\" content=\"Spatwater\">\r\n\r\n\r\n\t<title>SPATwater</title>\r\n\r\n\t" + head + "\r\n\r\n\t<!--=============== REMIXICONS ===============-->\r\n\t<link href=\"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css\" rel=\"stylesheet\">\r\n\t<link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css\" rel=\"stylesheet\">\r\n\r\n\r\n\t<!--=============== GOOGLE ICONS ===============-->\r\n\t<link rel=\"stylesheet\"\r\n\t\thref=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\" />\r\n\r\n\t<!--=============== SWIPER CSS ===============-->\r\n\t<link rel=\"stylesheet\" href=\"/assets/swiper-bundle.min.css\">\r\n\r\n\t<!--=============== SWIPER JS ===============-->\r\n\t<script src=\"/assets/swiper-bundle.min.js\"></script>\r\n\r\n\t<!--=============== LEAFLET JS ===============-->\r\n\t<link rel=\"stylesheet\" href=\"https://unpkg.com/leaflet@1.9.2/dist/leaflet.css\"\r\n\t\tintegrity=\"sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=\" crossorigin=\"\" />\r\n\t<script src=\"https://unpkg.com/leaflet@1.9.2/dist/leaflet.js\"\r\n\t\tintegrity=\"sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=\" crossorigin=\"\"></script>\r\n\r\n</head>\r\n\r\n<body data-sveltekit-preload-data=\"hover\">\r\n\t<div style=\"display: contents\">" + body + "</div>\r\n</body>\r\n\r\n</html>\r\n\r\n<style>\r\n\t@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap');\r\n\r\n\t* {\r\n\t\tbox-sizing: border-box;\r\n\t\tpadding: 0;\r\n\t\tmargin: 0;\r\n\t\tscroll-behavior: smooth;\r\n\t\tfont-family: \"Open sans\", sans-serif;\r\n\t}\r\n\r\n\t:root {\r\n\t\t--spat: #7faec5;\r\n\t\t--lg-bg: #fafafa;\r\n\t\t--green: #4ecd5d;\r\n\t\t--darkblue: #384b61;\r\n\t}\r\n\r\n\t@media screen and (prefers-contrast: more) {\r\n\t\t:root {\r\n\t\t\t--spat: #384b61;\r\n\t\t\t--green: #384b61;\r\n\t\t}\r\n\t}\r\n\r\n\tp {\r\n\t\tmargin-bottom: 1rem;\r\n\t\tcolor: var(--darkblue);\r\n\t\tfont-size: 1rem;\r\n\r\n\t}\r\n\r\n\thtml {\r\n\t\tscroll-behavior: smooth;\r\n\t}\r\n\r\n\tbody {\r\n\t\tfont-family: \"Poppins\", serif;\r\n\t}\r\n\r\n\tmain {\r\n\t\toverflow-x: hidden;\r\n\t\toverflow-y: hidden;\r\n\t}\r\n\r\n\t.button {\r\n\t\tdisplay: inline-block;\r\n\t\tbackground-color: var(--green);\r\n\t\tcolor: white;\r\n\t\tpadding: 0.5rem 1rem;\r\n\t\tborder-radius: 5px;\r\n\t\tfont-weight: var(--font-semi-bold);\r\n\t\ttransition: 0.3s;\r\n\t\ttext-decoration: none;\r\n\t\tz-index: 7;\r\n\t}\r\n\r\n\t.button:hover {\r\n\t\tbackground-color: var(--darkblue);\r\n\t}\r\n\r\n\t.leaflet-control {\r\n\t\tdisplay: none !important;\r\n\t}\r\n</style>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1fp0es"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
