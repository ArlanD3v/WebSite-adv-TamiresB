'use client'
import { Scale, Award, Users, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
	return (
		<section className="relative w-full min-h-screen flex items-center overflow-hidden bg-soft pt-20">
			{/* Elementos decorativos de fundo */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-br from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
			</div>

			<div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-20">
				<div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mt-8">
					{/* Foto - LADO ESQUERDO */}
					<div className="relative order-1 ">
						{/* Card principal com foto */}
						<div className="relative group">
							{/* Decoração de fundo */}
							<div className="absolute -inset-4 bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
							<div className="flex w-full justify-center">
								<div className="inline-flex md:hidden bg-black gap-2 mb-6 px-4 py-2 rounded-full bg-linear-to-r from-blue-600/80 to-purple-600/80 border border-blue-600/20">
									<Sparkles className="w-4 h-4 text-white" />
									<span className="text-sm font-semibold text-white">
										Advocacia Trabalhista & Terceiro Setor
									</span>
								</div>
							</div>

							{/* Container da foto */}
							<div className=" relative border-5 border-[#272646] rounded-3xl shadow-2xl">
								<div className="relative w-full h-112.5 sm:h-137.5 lg:h-155 rounded-[22px] overflow-hidden">
									<Image
										src="/images/tamires.jpg"
										alt="Dra. Tamires Borges - Advogada"
										className="w-full h-full object-cover"
										width={800}
										height={400}
									/>

									{/* Badge flutuante */}
									<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
										<div className="flex items-center gap-3">
											<div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shrink-0">
												<Scale className="w-6 h-6 text-white" />
											</div>
											<div>
												<div className="font-bold text-gray-900">Dra. Tamires</div>
												<div className="text-sm text-gray-600">OAB/GO 00.000</div>
											</div>
											<div className="ml-auto">
												<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
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

						<div className="hidden md:inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-linear-to-r from-blue-600/80 to-purple-600/80 border border-blue-600/20">
							<Sparkles className="w-4 h-4 text-white" />
							<span className="text-sm font-semibold text-white">
								Advocacia Trabalhista & Terceiro Setor
							</span>
						</div>

						{/* Título principal */}
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
							Soluções jurídicas
							<span className="block mt-2 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								claras e estratégicas
							</span>
						</h1>

						{/* Descrição */}
						<p className="text-lg sm:text-xl text-main/90 mb-6 leading-relaxed">
							Atuação especializada em <strong className="text-main">Direito do Trabalho</strong> e
							assessoria jurídica para organizações do <strong className="text-main">Terceiro Setor</strong>,
							com foco em segurança jurídica, ética e resultados sustentáveis.
						</p>

						<p className="text-base text-main/90 mb-8 leading-relaxed">
							Compromisso com atendimento personalizado, linguagem acessível e
							estratégias jurídicas alinhadas à realidade de cada cliente.
						</p>

						{/* Diferenciais em cards */}
						<div className="grid sm:grid-cols-3 gap-4 mb-8">
							<div className="flex flex-col items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
								<Scale className="w-8 h-8 text-blue-600 mb-2" />
								<p className="text-sm font-semibold text-gray-900">Experiência</p>
								<p className="text-xs text-gray-600 mt-1">4+ anos atuando</p>
							</div>
							<div className="flex flex-col items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
								<TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
								<p className="text-sm font-semibold text-gray-900">Resultados</p>
								<p className="text-xs text-gray-600 mt-1">98% de satisfação</p>
							</div>
							<div className="flex flex-col items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
								<Users className="w-8 h-8 text-blue-600 mb-2" />
								<p className="text-sm font-semibold text-gray-900">Confiança</p>
								<p className="text-xs text-gray-600 mt-1">500+ clientes</p>
							</div>
						</div>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href="/contato"
								className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl  text-white font-semibold bg-foreground hover:bg-accent hover:text-main *:transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
							>
								Agende uma Reunião
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
							</a>

							<a
								href="/areas/trabalhista"
								className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold bg-white hover:text-white hover:bg-linear-to-r hover:from-foreground/90 hover:to-accent transition-all duration-300"
							>
								Áreas de Atuação
							</a>
						</div>

						{/* Social proof */}
						<div className="mt-10 pt-8 border-t border-gray-200">
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