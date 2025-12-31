import Link from "next/link";
import { Briefcase, Shield, Users, TrendingUp, Award, FileText, Scale, Handshake, FileCheck } from "lucide-react";

function TrabalhistaPage() {
	return (
		<article className="space-y-10 sm:space-y-14 lg:space-y-16">
			{/* Introdução com visual impactante */}
			<section className="relative">
				{/* Decoração de fundo */}
				<div className="absolute -inset-4 bg-linear-to-br from-amber-200/30 to-yellow-100/30 rounded-3xl blur-2xl"></div>

				<div className="relative bg-linear-to-br from-white/80 to-amber-50/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-200/50 shadow-xl">
					<div className="flex items-start gap-4 sm:gap-6 mb-6">
						<div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-amber-800 to-amber-900 rounded-2xl flex items-center justify-center shadow-lg shrink-0 animate-float">
							<Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
						</div>
						<div className="flex-1">
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-azul/90 mb-3 sm:mb-4">
								Direito Trabalhista
							</h2>
							<p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
								Orientação completa sobre <strong className="text-amber-900">direitos e deveres trabalhistas</strong>,
								tanto para empregadores quanto para empregados. Atuação baseada na CLT,
								Constituição Federal, legislações específicas e normas coletivas, com foco
								em soluções jurídicas claras, estratégicas e alinhadas à realidade de cada cliente.
							</p>
						</div>
					</div>

					{/* Mini stats */}
					<div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-amber-200/50">
						{[
							{ icon: Shield, label: "Proteção Legal", value: "100%" },
							{ icon: Users, label: "Clientes", value: "500+" },
							{ icon: Award, label: "Experiência", value: "4+ anos" }
						].map((stat, index) => {
							const Icon = stat.icon;
							return (
								<div key={index} className="flex flex-col items-center text-center">
									<Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-800 mb-1.5 sm:mb-2" />
									<p className="text-xs sm:text-sm font-bold text-azul">{stat.value}</p>
									<p className="text-xs text-zinc-600 hidden sm:block">{stat.label}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Serviços com design moderno */}
			<section>
				<div className="flex items-center gap-3 mb-6 sm:mb-8">
					<div className="w-1 h-8 sm:h-10 bg-linear-to-b from-amber-800 to-yellow-600 rounded-full"></div>
					<h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-azul/80">
						Serviços na área trabalhista
					</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
					{[
						{
							icon: Scale,
							title: "Orientação jurídica sobre direitos trabalhistas",
							text: "Orientação completa sobre direitos e deveres previstos pela CLT, Constituição Federal, legislações específicas e normas coletivas como acordos ou convenções de sindicatos.",
							gradient: "from-amber-100 to-yellow-50"
						},
						{
							icon: FileText,
							title: "Elaboração e revisão de contratos e documentos",
							text: "Elaboração, revisão e negociação de contratos de trabalho, termos de rescisão (TRCT), notificações de demissão, aviso prévio e demais documentos relacionados ao vínculo empregatício.",
							gradient: "from-yellow-100 to-amber-50"
						},
						{
							icon: Users,
							title: "Representação em audiências",
							text: "Representação completa do cliente durante as audiências trabalhistas, onde são debatidas as questões levantadas pelas partes.",
							gradient: "from-amber-50 to-yellow-100"
						},
						{
							icon: Handshake,
							title: "Negociação e acordos",
							text: "Atuação como intermediário entre empregador e empregado para negociar acordos mais rápidos e benéficos para ambas as partes, evitando longas disputas judiciais.",
							gradient: "from-yellow-50 to-amber-100"
						},
						{
							icon: FileCheck,
							title: "Acompanhamento do processo",
							text: "Acompanhamento completo do andamento processual, observando prazos legais e tomando medidas como interposição de recursos, contestações e execução de sentença.",
							gradient: "from-amber-100 to-yellow-100"
						},
						{
							icon: TrendingUp,
							title: "Consultoria preventiva",
							text: "Consultoria preventiva para empresas, ajudando a evitar problemas trabalhistas e orientando sobre rescisão contratual e cumprimento de obrigações legais.",
							gradient: "from-yellow-100 to-amber-100"
						}
					].map((item, index) => {
						const Icon = item.icon;
						return (
							<div
								key={index}
								className={`group relative bg-linear-to-br ${item.gradient} rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-amber-200/50 hover:border-amber-400/50 hover:shadow-xl transition-all duration-300 hover:scale-102 overflow-hidden`}
							>
								{/* Decoração de fundo */}
								<div className="absolute top-0 right-0 w-24 h-24 bg-amber-800/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>

								<div className="relative">
									<div className="flex items-center gap-3 mb-3">
										<div className="w-10 h-10 bg-amber-800/10 rounded-lg flex items-center justify-center shrink-0">
											<Icon className="w-5 h-5 text-amber-800" />
										</div>
										<h4 className="text-base sm:text-lg font-bold text-azul/90">{item.title}</h4>
									</div>
									<p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
										{item.text}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{/* Diferencial com design premium */}
			<section className="relative">
				<div className="absolute inset-0 bg-linear-to-br from-amber-100/40 to-yellow-100/40 rounded-3xl blur-3xl"></div>

				<div className="relative bg-linear-to-br from-amber-800/10 via-yellow-800/10 to-amber-700/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-300/30 shadow-xl">
					<div className="flex items-center gap-3 mb-4 sm:mb-6">
						<div className="w-18 h-12 bg-linear-to-br from-amber-800 to-yellow-700 rounded-xl flex items-center justify-center shadow-lg">
							<Shield className="w-6 h-6 text-white" />
						</div>
						<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-linear-to-r from-amber-900 via-yellow-800 to-amber-800 bg-clip-text text-transparent">
							Atendimento personalizado e estratégico
						</h3>
					</div>

					<p className="text-zinc-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-6">
						A advocacia trabalhista exige <strong className="text-amber-900">conhecimento técnico,
							responsabilidade e sensibilidade</strong>. O atendimento é pautado pela escuta ativa,
						transparência nas orientações e comprometimento com soluções jurídicas
						seguras e eficazes para empregadores e empregados.
					</p>

					{/* Lista de benefícios */}
					<div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-amber-300/30">
						{[
							"Análise personalizada do seu caso",
							"Linguagem clara e acessível",
							"Acompanhamento em todas as etapas processuais",
							"Estratégias alinhadas aos seus objetivos",
							"Consultoria preventiva para empresas",
							"Negociação eficiente de acordos"
						].map((benefit, index) => (
							<div key={index} className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 bg-amber-800 rounded-full"></div>
								<span className="text-sm text-zinc-600">{benefit}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA com design impactante */}
			<section className="relative">
				<div className="absolute inset-0 bg-linear-to-br from-amber-800/20 to-yellow-700/20 rounded-3xl blur-2xl"></div>

				<div className="relative bg-linear-to-br from-amber-900/90 to-yellow-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center shadow-2xl border border-amber-700/50 overflow-hidden">
					{/* Decoração de fundo */}
					<div className="absolute top-0 left-0 w-full h-full opacity-10">
						<div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
						<div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
					</div>

					<div className="relative">
						<div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl animate-float">
							<Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
						</div>

						<h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4">
							Precisa de orientação trabalhista?
						</h3>
						<p className="text-amber-100 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
							Entre em contato para uma análise personalizada do seu caso.
							Seja você empregador ou empregado, conte com orientação jurídica
							responsável e estratégica para proteger seus direitos.
						</p>

						<Link
							href="/contato"
							className="group inline-flex items-center gap-2 px-8 sm:px-10 py-4 rounded-xl bg-white text-amber-900 hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-2xl text-sm sm:text-base font-bold"
						>
							Fale comigo!
							<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</Link>

						{/* Trust indicators */}
						<div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-white/20">
							<div className="flex items-center gap-2 text-white/90">
								<Users className="w-4 h-4" />
								<span className="text-sm font-semibold">500+ clientes</span>
							</div>
							<div className="flex items-center gap-1 text-white/90">
								<span className="text-yellow-300">★★★★★</span>
								<span className="text-sm font-semibold ml-1">4.9/5.0</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</article>
	);
}

export default TrabalhistaPage;