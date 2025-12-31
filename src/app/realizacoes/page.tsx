'use client'
import { Building2, Briefcase, Award, Calendar, MapPin, DollarSign, CheckCircle, TrendingUp } from "lucide-react";
import { Header } from "@/src/components/Header";
import { CTAButton } from "@/src/components/CTAButton";

export default function RealizacoesPage() {
	const instituicoes = [
		{
			id: 1,
			nome: "Associação Obinrin Badu",
			cnpj: "48.995.523/0001-41",
			tipo: "Abertura",
			data: "13.10.2022",
			dataISO: "2022-10-13",
			gradient: "from-purple-500 to-pink-500"
		},
		{
			id: 2,
			nome: "Instituto IAE/DF",
			cnpj: "53.155.268/0001-69",
			tipo: "Abertura",
			data: "16.11.2023",
			dataISO: "2023-11-16",
			gradient: "from-blue-500 to-purple-500"
		},
		{
			id: 3,
			nome: "Associação Nacional das Trancistas Negras (ASHANTI)",
			cnpj: "58.094.861/0001-66",
			tipo: "Abertura",
			data: "16.04.2024",
			dataISO: "2024-04-16",
			gradient: "from-amber-500 to-orange-500"
		},
		{
			id: 4,
			nome: "Instituto É Possível",
			cnpj: "02.524.572/0001-03",
			tipo: "Regularização",
			data: "11.01.2024",
			dataISO: "2024-01-11",
			gradient: "from-green-500 to-emerald-500"
		}
	];

	const projetos = [
		{
			id: 1,
			titulo: "Samba Pras Moças",
			processo: "00150-00008539/2024-60",
			natureza: "Atividades Recreativas e Evento",
			modalidade: "Termo de Ajuste de Apoio a Projeto - EDITAL Nº 33/2024",
			local: "Candangolândia/DF",
			periodo: "Agosto e Setembro de 2025",
			atividades: "Oficina de Tranças e Percussão (27 e 29/08) e Evento (07/09)",
			valor: "R$ 100.000,00",
			valorNumerico: 100000,
			organizacao: "Associação Obinrin Badu",
			status: "Aprovado",
			gradient: "from-pink-500 to-purple-500"
		},
		{
			id: 2,
			titulo: "Projeto BADU",
			processo: "21972",
			natureza: "Capacitação – Cursos, Oficinas e Palestras",
			modalidade: "Convênio de Cooperação Financeira – EDITAL N° 2023/012",
			local: "Candangolândia/DF",
			periodo: "Junho/2025 a Dezembro/2026 (18 meses)",
			descricao: "Empoderamento Socioeconômico das Mulheres Negras",
			valor: "R$ 214.810,26",
			valorNumerico: 214810.26,
			organizacao: "Associação Obinrin Badu",
			status: "Em Andamento",
			gradient: "from-amber-500 to-yellow-500"
		}
	];

	const totalProjetos = projetos.reduce((acc, proj) => acc + proj.valorNumerico, 0);

	return (
		<section className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-purple-50">
			<Header />
			<CTAButton />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
				{/* Header */}
				<div className="text-center mb-12 sm:mb-16">
					<div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-700/20 backdrop-blur-sm border border-amber-300/30">
						<Award className="w-4 h-4 text-amber-800" />
						<span className="text-sm font-semibold text-amber-900">
							Portfólio
						</span>
					</div>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
						<span className="bg-linear-to-r from-amber-800 to-yellow-700 bg-clip-text text-transparent">
							Realizações e
						</span>
						<br />
						<span className="bg-linear-to-r from-yellow-700 to-amber-600 bg-clip-text text-transparent">
							Impacto Social
						</span>
					</h1>
					<p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
						Trabalho dedicado ao fortalecimento de organizações do terceiro setor,
						contribuindo para a transformação social e o empoderamento de comunidades.
					</p>
				</div>

				{/* Stats Gerais */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16">
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 shadow-lg text-center">
						<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
							<Building2 className="w-6 h-6 text-purple-700" />
						</div>
						<div className="text-3xl font-bold text-azul mb-1">{instituicoes.length}</div>
						<div className="text-sm text-zinc-600">Instituições</div>
					</div>
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg text-center">
						<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
							<Briefcase className="w-6 h-6 text-amber-700" />
						</div>
						<div className="text-3xl font-bold text-azul mb-1">{projetos.length}</div>
						<div className="text-sm text-zinc-600">Projetos</div>
					</div>
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg text-center col-span-2">
						<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
							<DollarSign className="w-6 h-6 text-green-700" />
						</div>
						<div className="text-2xl sm:text-3xl font-bold text-azul mb-1">
							R$ {totalProjetos.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
						</div>
						<div className="text-sm text-zinc-600">Captados em Projetos</div>
					</div>
				</div>

				{/* Instituições Abertas */}
				<div className="mb-16">
					<div className="flex items-center gap-3 mb-6 sm:mb-8">
						<div className="w-1 h-8 sm:h-10 bg-linear-to-b from-purple-600 to-pink-500 rounded-full"></div>
						<h2 className="text-2xl sm:text-3xl font-bold text-azul">
							Instituições Abertas e Regularizadas
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
						{instituicoes.map((inst) => (
							<div
								key={inst.id}
								className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-102 overflow-hidden"
							>
								{/* Badge de tipo */}
								<div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${inst.tipo === 'Abertura'
									? 'bg-green-100 text-green-800 border border-green-200'
									: 'bg-blue-100 text-blue-800 border border-blue-200'
									}`}>
									{inst.tipo}
								</div>

								<div className="flex items-start gap-4 mb-4">
									<div className={`w-12 h-12 rounded-xl bg-linear-to-br ${inst.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
										<Building2 className="w-6 h-6 text-white" />
									</div>

									<div className="flex-1 pr-20">
										<h3 className="text-lg sm:text-xl font-bold text-azul mb-2 group-hover:text-amber-700 transition-colors duration-300">
											{inst.nome}
										</h3>

										<div className="space-y-2 text-sm text-zinc-600">
											<div className="flex items-center gap-2">
												<Briefcase className="w-4 h-4 text-amber-600 shrink-0" />
												<span className="font-mono">{inst.cnpj}</span>
											</div>
											<div className="flex items-center gap-2">
												<Calendar className="w-4 h-4 text-amber-600 shrink-0" />
												<time dateTime={inst.dataISO}>{inst.data}</time>
											</div>
										</div>
									</div>
								</div>

								{/* Decoração de fundo */}
								<div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-br from-amber-100/20 to-purple-100/20 rounded-full -mr-12 -mb-12 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							</div>
						))}
					</div>
				</div>

				{/* Projetos Idealizados */}
				<div className="mb-16">
					<div className="flex items-center gap-3 mb-6 sm:mb-8">
						<div className="w-1 h-8 sm:h-10 bg-linear-to-b from-amber-600 to-yellow-500 rounded-full"></div>
						<h2 className="text-2xl sm:text-3xl font-bold text-azul">
							Projetos Idealizados e Aprovados
						</h2>
					</div>

					<div className="space-y-6">
						{projetos.map((projeto) => (
							<div
								key={projeto.id}
								className="group relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
							>
								{/* Badge de status */}
								<div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-semibold ${projeto.status === 'Aprovado'
									? 'bg-green-100 text-green-800 border border-green-200'
									: 'bg-blue-100 text-blue-800 border border-blue-200'
									}`}>
									<div className="flex items-center gap-2">
										{projeto.status === 'Em Andamento' && (
											<TrendingUp className="w-4 h-4" />
										)}
										{projeto.status === 'Aprovado' && (
											<CheckCircle className="w-4 h-4" />
										)}
										{projeto.status}
									</div>
								</div>

								<div className="flex flex-col lg:flex-row gap-6">
									{/* Ícone e título */}
									<div className="flex items-start gap-4 flex-1">
										<div className={`hidden sm:flex w-14 h-14 rounded-xl bg-linear-to-br ${projeto.gradient} items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
											<Award className="w-7 h-7 text-white" />
										</div>

										<div className="flex-1 pr-0 lg:pr-32">
											<h3 className="text-xl sm:text-2xl font-bold text-azul mb-3 group-hover:text-amber-700 transition-colors duration-300">
												{projeto.titulo}
											</h3>

											<div className="grid sm:grid-cols-2 gap-4 mb-4">
												<div>
													<p className="text-xs font-semibold text-amber-800 mb-1">Organização</p>
													<p className="text-sm text-zinc-700">{projeto.organizacao}</p>
												</div>
												<div>
													<p className="text-xs font-semibold text-amber-800 mb-1">Processo</p>
													<p className="text-sm text-zinc-700 font-mono">{projeto.processo}</p>
												</div>
											</div>

											<div className="space-y-3 text-sm">
												<div>
													<p className="text-xs font-semibold text-amber-800 mb-1">Natureza</p>
													<p className="text-zinc-700">{projeto.natureza}</p>
												</div>
												<div>
													<p className="text-xs font-semibold text-amber-800 mb-1">Modalidade</p>
													<p className="text-zinc-700">{projeto.modalidade}</p>
												</div>
												<div className="grid sm:grid-cols-2 gap-4">
													<div>
														<p className="text-xs font-semibold text-amber-800 mb-1">Local</p>
														<div className="flex items-center gap-1.5 text-zinc-700">
															<MapPin className="w-4 h-4 text-amber-600 shrink-0" />
															{projeto.local}
														</div>
													</div>
													<div>
														<p className="text-xs font-semibold text-amber-800 mb-1">Período</p>
														<div className="flex items-center gap-1.5 text-zinc-700">
															<Calendar className="w-4 h-4 text-amber-600 shrink-0" />
															{projeto.periodo}
														</div>
													</div>
												</div>
												{projeto.atividades && (
													<div>
														<p className="text-xs font-semibold text-amber-800 mb-1">Atividades</p>
														<p className="text-zinc-700">{projeto.atividades}</p>
													</div>
												)}
												{projeto.descricao && (
													<div>
														<p className="text-xs font-semibold text-amber-800 mb-1">Descrição</p>
														<p className="text-zinc-700">{projeto.descricao}</p>
													</div>
												)}
											</div>

											{/* Valor em destaque */}
											<div className="mt-6 inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-linear-to-r from-green-50 to-emerald-50 border border-green-200">
												<DollarSign className="w-5 h-5 text-green-700" />
												<div>
													<p className="text-xs text-green-700 font-semibold">Valor Total</p>
													<p className="text-lg font-bold text-green-800">{projeto.valor}</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Decoração de fundo */}
								<div className="absolute bottom-0 right-0 w-40 h-40 bg-linear-to-br from-amber-100/20 to-yellow-100/20 rounded-full -mr-20 -mb-20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							</div>
						))}
					</div>
				</div>

				{/* CTA Final */}
				<div className="bg-linear-to-br from-amber-600/90 to-purple-600/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-2xl border-none overflow-hidden relative">
					<div className="absolute top-0 left-0 w-full h-full opacity-10">
						<div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
						<div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
					</div>

					<div className="relative">
						<div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
							<Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
						</div>

						<h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4">
							Sua organização precisa de apoio jurídico?
						</h3>
						<p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
							Entre em contato para discutir como posso ajudar sua instituição
							a alcançar seus objetivos com segurança jurídica e impacto social.
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