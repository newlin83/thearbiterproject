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
					label: 'Niya',
					items: [
						{ label: 'Chapter 1: Wake', slug: 'niya/sunday-morning' },
						{ label: 'Chapter 2: Church', slug: 'niya/church' },
						{ label: 'Chapter #: Apartment', slug: 'niya/apt-night' },
						{ label: 'Chapter #: Arbitration', slug: 'niya/first-days' },
					],
				},
				{
					label: 'Overview',
					items: [
						{ label: 'What is Arbitration', slug: 'overview' },
						{ label: 'Origin Story', slug: 'origin' },
					],
				},
				{
					label: 'Legal Framework',
					items: [
						{ label: 'The Ceremony', slug: 'legal/ceremony' },
						{ label: 'The Amendment', slug: 'legal/amendment' },
						{ label: 'The Contract', slug: 'legal/contract' },
						{ label: 'Landmark Legal Cases', slug: 'legal/cases' },
						{ label: 'The Road to Ratification', link: '/ratification/' },
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
						{ label: 'Characters & Legal Cases', slug: 'story/characters' },
						{ label: 'Chapter Outline', slug: 'story/outline' },
					],
				},
			],
		}),
	],
});