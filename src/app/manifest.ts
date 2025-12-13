import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Dra. Rita Deway - Acupuntura e Aromaterapia',
		short_name: 'Dra. Rita Deway',
		description: 'Especialista em acupuntura e aromaterapia em Salvador, Bahia. Tratamentos naturais e personalizados para o seu bem-estar.',
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#091b50ff',
		lang: 'pt-BR',
		scope: '/',
		id: '/',
		orientation: 'portrait',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
			{
				src: '/icons/icon-192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/icons/icon-512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	}
}
