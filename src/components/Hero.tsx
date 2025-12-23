'use client'
import { Scale, Award, Users, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
	return (
		<section className="relative w-full min-h-screen flex items-center overflow-hidden bg-soft pt-10 md:pt-20">
			{/* Elementos decorativos de fundo */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-br from-amber-100 to-purple-100 rounded-full blur-3xl"></div>
			</div>

			<div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-20">
				<div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mt-8">
					{/* Foto - LADO ESQUERDO */}
					<div className="relative order-1 ">
						{/* Card principal com foto */}
						<div className="relative group">
							{/* Decoração de fundo */}
							<div className="absolute -inset-4 bg-amber-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
							<div className="flex w-full justify-center">
								<div className="inline-flex md:hidden  gap-2 mb-6 px-4 py-2 rounded-full bg-amber-700/80 border border-blue-600/20">
									<Sparkles className="w-4 h-4 text-white" />
									<span className="text-sm font-semibold text-white">
										Advocacia Trabalhista & Terceiro Setor
									</span>
								</div>
							</div>

							{/* Container da foto */}
							<div className=" relative rounded-3xl shadow-2xl">
								<div className="relative w-full h-112.5 sm:h-137.5 lg:h-155 rounded-[22px] overflow-hidden">
									<Image
										src="/images/tamires.jpg"
										alt="Dra. Tamires Borges - Advogada"
										className="w-full h-full object-cover"
										width={800}
										height={400}
									/>

									{/* Badge flutuante */}
									<div className="absolute bottom-6 left-6 right-6 bg-yellow-800/30 backdrop-blur-md rounded-2xl p-4 shadow-xl">
										<div className="flex items-center gap-3">
											<div className="w-12 h-12 bg-linear-to-br from-yellow-600 to-yellow-700 rounded-xl flex items-center justify-center shrink-0">
												<Scale className="w-6 h-6 text-white" />
											</div>
											<div className="flex flex-col w-full text-center">
												<p className="font-bold text-white">Dra. Tamires</p>
												<p className="text-md text-white/80">OAB/DF 71.725</p>
											</div>
											<div className="ml-auto">
												<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Decorações flutuantes */}
							<div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 hidden lg:block animate-float">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
										<Award className="w-5 h-5 text-blue-600" />
									</div>
									<div>
										<div className="text-2xl font-bold text-gray-900">4+</div>
										<div className="text-xs text-gray-600">Anos</div>
									</div>
								</div>
							</div>

							<div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 hidden lg:block animate-float-delayed">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
										<Users className="w-5 h-5 text-purple-600" />
									</div>
									<div>
										<div className="text-2xl font-bold text-gray-900">500+</div>
										<div className="text-xs text-gray-600">Clientes</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Texto - LADO DIREITO */}
					<div className="order-1 lg:order-2">

						<div className="hidden md:inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-700/80 backdrop-blur-2xl border-none shadow-2xl">
							<Sparkles className="w-4 h-4 text-white" />
							<span className="text-sm font-semibold text-white">
								Advocacia Trabalhista & Terceiro Setor
							</span>
						</div>

						{/* Título principal */}
						<h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-azul/80">
							Soluções jurídicas claras,
							<span className="ml-2 mt-2 bg-linear-to-bl from-yellow-700/25 to-yellow-800 bg-clip-text text-transparent">
								estratégicas
							</span>
							<p className="bg-linear-to-br from-yellow-700 to-azul/60 bg-clip-text text-transparent">e humanizadas</p>
						</h1>

						{/* Descrição */}
						<p className="text-lg sm:text-xl text-main mb-6 leading-relaxed">
							Atuação especializada em <strong className="text-main">Direito do Trabalho</strong> e
							organizações do <strong className="text-main">Terceiro Setor</strong>,
							com foco em segurança jurídica, ética e resultados sustentáveis.
						</p>

						<p className="text-base text-main/90 mb-8 leading-relaxed">
							Compromisso de unir a proteção trabalhista e a segurança jurídica para fortalecer
							relações de trabalho e iniciativas de impacto social.
						</p>
						<p className="text-base text-main mb-8">
							Tudo isso de uma forma que você se sinta protegido juridicamente e acolhido
						</p>

						{/* Diferenciais em cards */}

						<div className="grid sm:grid-cols-3 gap-4 mb-8">
							<div className="flex flex-col items-center bg-yellow-800/15 rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
								<Scale className="w-8 h-8 text-blue-600 mb-2" />
								<p className="text-sm font-semibold text-gray-900">Experiência</p>
								<p className="text-xs text-gray-600 mt-1">4+ anos atuando</p>
							</div>
							<div className="flex flex-col items-center bg-yellow-800/25 backdrop-blur-md rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
								<TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
								<p className="text-sm font-semibold text-gray-900">Resultados</p>
								<p className="text-xs text-gray-700 mt-1">98% de satisfação</p>
							</div>
							<div className="flex flex-col items-center bg-yellow-800/35 backdrop-blur-md rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
								<Users className="w-8 h-8 text-blue-600 mb-2" />
								<p className="text-sm font-semibold text-gray-900">Confiança</p>
								<p className="text-xs text-gray-800 mt-1">500+ clientes</p>
							</div>

						</div>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href="/contato"
								className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl  text-white font-semibold bg-yellow-800/80 hover:bg-accent hover:text-main *:transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
							>
								Agende uma Reunião
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
							</a>

							<a
								href="/areas/trabalhista"
								className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-300 font-semibold bg-background/80 backdrop-blur-md text-white hover:bg-background transition-all duration-300"
							>
								Áreas de Atuação
							</a>
						</div>

						{/* Social proof */}
						<div className="mb-18 sm:mb-5 mt-10 pt-8 border-t border-gray-200 ">
							<div className="flex items-center gap-6 text-sm text-gray-600">
								<div className="flex items-center gap-2">
									<div className="flex -space-x-2">
										<div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white"></div>
										<div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-white"></div>
										<div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
									</div>
									<span className="font-medium text-gray-900">500+ clientes atendidos</span>
								</div>
								<div className="flex items-center gap-1">
									<span className="text-yellow-500">★★★★★</span>
									<span className="font-medium text-gray-900">4.9/5.0</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
	);
}