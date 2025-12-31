'use client'
import { FileText, ExternalLink, Calendar, Newspaper } from "lucide-react";
import { Header } from "@/src/components/Header";
import { CTAButton } from "@/src/components/CTAButton";
import artigosData from "@/src/data/artigos.json";

interface Artigo {
	id: number;
	title: string;
	publication: string;
	date: string;
	dateISO: string;
	url: string;
	excerpt: string;
	category: string;
	gradient: string;
}

export default function ArtigosPage() {
	const artigos: Artigo[] = artigosData.artigos;

	return (
		<section className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-purple-50">
			<Header />
			<CTAButton />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
				{/* Header */}
				<div className="text-center mb-12 sm:mb-16">
					<div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-700/20 backdrop-blur-sm border border-amber-300/30">
						<Newspaper className="w-4 h-4 text-amber-800" />
						<span className="text-sm font-semibold text-amber-900">
							Publicações
						</span>
					</div>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
						<span className="bg-linear-to-r from-amber-800 to-yellow-700 bg-clip-text text-transparent">
							Artigos
						</span>
						<br />
						<span className="bg-linear-to-r from-yellow-700 to-amber-600 bg-clip-text text-transparent">
							Publicados
						</span>
					</h1>
					<p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
						Reflexões e análises sobre direito, justiça social, representatividade
						e temas relevantes para a sociedade.
					</p>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12 sm:mb-16">
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg text-center">
						<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
							<FileText className="w-6 h-6 text-amber-700" />
						</div>
						<div className="text-3xl font-bold text-azul mb-1">{artigos.length}</div>
						<div className="text-sm text-zinc-600">Artigos</div>
					</div>
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 shadow-lg text-center">
						<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
							<Newspaper className="w-6 h-6 text-purple-700" />
						</div>
						<div className="text-3xl font-bold text-azul mb-1">1</div>
						<div className="text-sm text-zinc-600">Veículo</div>
					</div>
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-lg text-center col-span-2 sm:col-span-1">
						<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
							<Calendar className="w-6 h-6 text-blue-700" />
						</div>
						<div className="text-3xl font-bold text-azul mb-1">2023-2025</div>
						<div className="text-sm text-zinc-600">Período</div>
					</div>
				</div>

				{/* Lista de Artigos */}
				<div className="space-y-6">
					{artigos.map((artigo) => (
						<article
							key={artigo.id}
							className="group relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-102 overflow-hidden"
						>
							<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 relative z-10">
								{/* Conteúdo principal */}
								<div className="flex-1">
									{/* Header do artigo */}
									<div className="flex items-start gap-4 mb-4">
										{/* Ícone decorativo */}
										<div className={`hidden sm:flex w-12 h-12 rounded-xl bg-linear-to-br ${artigo.gradient} items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
											<FileText className="w-6 h-6 text-white" />
										</div>

										<div className="flex-1">
											{/* Badge de categoria */}
											<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 mb-3">
												<span className="text-xs font-semibold text-amber-800">
													{artigo.category}
												</span>
											</div>

											{/* Título */}
											<h2 className="text-xl sm:text-2xl font-bold text-azul mb-3 group-hover:text-amber-700 transition-colors duration-300">
												{artigo.title}
											</h2>

											{/* Meta informações */}
											<div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 mb-4">
												<div className="flex items-center gap-1.5">
													<Newspaper className="w-4 h-4 text-amber-600" />
													<span className="font-medium">{artigo.publication}</span>
												</div>
												<div className="flex items-center gap-1.5">
													<Calendar className="w-4 h-4 text-amber-600" />
													<time dateTime={artigo.dateISO}>{artigo.date}</time>
												</div>
											</div>

											{/* Excerpt */}
											<p className="text-zinc-700 leading-relaxed mb-4">
												{artigo.excerpt}
											</p>
										</div>
									</div>
								</div>

								{/* Call to action */}
								<div className="flex lg:flex-col gap-3 lg:items-end shrink-0">
									<a
										href={artigo.url}
										target="_blank"
										rel="noopener noreferrer"
										className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-amber-700 to-yellow-600 text-white font-semibold hover:from-amber-800 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
									>
										Ler artigo
										<ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
									</a>
								</div>
							</div>

							{/* Decoração de fundo */}
							<div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-amber-100/30 to-purple-100/30 rounded-full -mr-16 -mt-16 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</article>
					))}
				</div>

				{/* Call to action final */}
				<div className="mt-16 bg-linear-to-br from-amber-600/90 to-purple-600/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-2xl border-none overflow-hidden relative">
					{/* Decoração de fundo */}
					<div className="absolute top-0 left-0 w-full h-full opacity-10">
						<div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
						<div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
					</div>

					<div className="relative">
						<div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
							<FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
						</div>

						<h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4">
							Gostou do conteúdo?
						</h3>
						<p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
							Entre em contato para discutir como posso ajudar você ou sua organização
							com questões jurídicas trabalhistas ou do terceiro setor.
						</p>

						<a
							href="/contato"
							className="group inline-flex items-center gap-2 px-8 sm:px-10 py-4 rounded-xl bg-white text-azul hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-2xl text-sm sm:text-base font-bold"
						>
							Fale comigo
							<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}