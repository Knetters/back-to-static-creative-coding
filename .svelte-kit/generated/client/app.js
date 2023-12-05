export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')
];

export const server_loads = [];

export const dictionary = {
		"/": [~2],
		"/kaart": [~3],
		"/kennisbank": [~4],
		"/post/[slug]": [~5],
		"/projecten/[slug]": [~6]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';