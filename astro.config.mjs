// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.thearbiterproject.com',
  	base: '/',
	integrations: [
		starlight({
			title: 'The Arbiter Project',
			tableOfContents: false,
			description: 'A better way to live',
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'What Is Arbitration', slug: 'overview' },
						{ label: 'Origin Story', slug: 'origin' },
					],
				},
				{
					label: 'Legal Framework',
					items: [
						{ label: 'The Amendment', slug: 'legal/amendment' },
						{ label: 'The Ceremony', slug: 'legal/ceremony' },
						{ label: 'The Contract', slug: 'legal/contract' },
					],
				},
				{
					label: 'Life Inside Arbitration',
					items: [
						{ label: 'Daily Life', slug: 'life/daily' },
						{ label: 'Children & Families', slug: 'life/children' },
						{ label: 'The Economics', slug: 'life/economics' },
					],
				},
				{
					label: 'The Story',
					items: [
						{ label: 'Characters', slug: 'story/characters' },
						{ label: 'Chapter Outline', slug: 'story/outline' },
					],
				},
			],
		}),
	],
});