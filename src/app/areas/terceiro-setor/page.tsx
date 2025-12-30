import Link from "next/link";
import { Heart, Sparkles, Award, Users, CheckCircle, Target } from "lucide-react";

function TerceiroSetorPage() {
	return (
		<article className="space-y-10 sm:space-y-14 lg:space-y-16">

			<section className="relative">
				{/* Decoração de fundo */}
				<div className="absolute -inset-4 bg-linear-to-br from-blue-200/30 to-purple-100/30 rounded-3xl blur-2xl"></div>

				<div className="relative bg-linear-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-200/50 shadow-xl">
					<div className="flex items-start gap-4 sm:gap-6 mb-6">
						<div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-amber-600 to-yellow-700 rounded-2xl flex items-center justify-center shadow-lg shrink-0 animate-float">
							<Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
						</div>
						<div className="flex-1">
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-azul/90 mb-3 sm:mb-4">
								Terceiro Setor
							</h2>
							<p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
								Assessoria jurídica especializada para <strong className="text-amber-800">organizações da sociedade civil</strong>,
								ONGs, associações e fundações. Atuação voltada à conformidade legal,
								governança transparente e fortalecimento institucional para que sua
								organização possa focar no impacto social.
							</p>
						</div>
					</div>

					{/* Mini stats */}
					<div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-blue-200/50">
						{[
							{ icon: Target, label: "Impacto Social", value: "100%" },
							{ icon: Users, label: "ONGs", value: "50+" },
							{ icon: Award, label: "Compliance", value: "Total" }
						].map((stat, index) => {
							const Icon = stat.icon;
							return (
								<div key={index} className="flex flex-col items-center text-center">
									<Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mb-1.5 sm:mb-2" />
									<p className="text-xs sm:text-sm font-bold text-azul">{stat.value}</p>
									<p className="text-xs text-zinc-600 hidden sm:block">{stat.label}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Serviços */}
			<section>
				<div className="flex items-center gap-3 mb-6 sm:mb-8">
					<div className="w-1 h-8 sm:h-10 bg-linear-to-b from-amber-600 to-azul rounded-full"></div>
					<h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-azul/80">
						Atuação no terceiro setor
					</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
					{[
						{ text: "Constituição de ONGs, associações e fundações", gradient: "from-amber-100 to-purple-50" },
						{ text: "Elaboração e revisão de estatutos sociais", gradient: "from-amber-100 to-blue-50" },
						{ text: "Obtenção e manutenção de títulos e certificações", gradient: "from-amber-50 to-purple-50" },
						{ text: "Assessoria em convênios e parcerias público-privadas", gradient: "from-amber-50 to-red-100" },
						{ text: "Governança corporativa e compliance institucional", gradient: "from-amber-100 to-emerald-50" },
						{ text: "Orientação sobre prestação de contas e transparência", gradient: "from-amber-100 to-green-100" }
					].map((item, index) => (
						<div
							key={index}
							className={`group relative bg-linear-to-br ${item.gradient} rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-blue-200/50 hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 hover:scale-102 overflow-hidden`}
						>
							{/* Decoração de fundo */}
							<div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>

							<div className="relative flex items-start gap-3">
								<CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
								<p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
									{item.text}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Diferencial 1*/}
			<section className="relative">
				<div className="absolute inset-0 bg-linear-to-br from-amber-100/40 to-purple-100/40 rounded-3xl blur-3xl"></div>

				<div className="relative bg-linear-to-br from-amber-600/40 via-yellow-600/10 to-purple-700/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-900 shadow-2xl">
					<div className="flex items-center gap-3 mb-4 sm:mb-6">
						<div className="w-12 h-12 bg-linear-to-br from-amber-600 to-yellow-700 rounded-xl flex items-center justify-center shadow-lg">
							<Sparkles className="w-6 h-6 text-white" />
						</div>
						<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-linear-to-r from-amber-700 via-azul to-yellow-600 bg-clip-text text-transparent">
							Compromisso com o propósito social
						</h3>
					</div>

					<p className="text-zinc-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-6">
						Organizações do terceiro setor <strong className="text-yellow-700">transformam realidades e promovem mudanças
							significativas</strong> na sociedade. O trabalho jurídico oferecido é pautado pela
						compreensão profunda do propósito social de cada entidade, com soluções
						práticas, acessíveis e alinhadas aos valores de transparência e responsabilidade.
					</p>

					{/* Lista de benefícios */}
					<div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-azul/30">
						{[
							"Soluções jurídicas sob medida",
							"Conhecimento do marco regulatório",
							"Suporte em todas as etapas",
							"Foco em governança e transparência"
						].map((benefit, index) => (
							<div key={index} className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
								<span className="text-sm text-zinc-600">{benefit}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Diferenciais 2*/}
			<section>
				<div className="flex items-center gap-3 mb-6 sm:mb-8">
					<div className="w-1 h-8 sm:h-10 bg-linear-to-b from-black to-amber-600 rounded-full"></div>
					<h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-azul/80">
						Por que escolher este suporte jurídico?
					</h3>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
					{[
						{
							icon: "📋",
							title: "Linguagem Acessível",
							desc: "Orientações claras e objetivas, sem juridiquês desnecessário",
							gradient: "from-amber-100 to-purple-50"
						},
						{
							icon: "🤝",
							title: "Atendimento Humanizado",
							desc: "Escuta ativa e compreensão das necessidades específicas",
							gradient: "from-amber-100 to-blue-50"
						},
						{
							icon: "⚖️",
							title: "Expertise Especializada",
							desc: "Conhecimento técnico focado no terceiro setor",
							gradient: "from-amber-50 to-purple-50"
						}
					].map((item, index) => (
						<div
							key={index}
							className={`group relative bg-linear-to-br ${item.gradient} rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-blue-200/50 hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden`}
						>
							{/* Decoração animada */}
							<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

							<div className="relative">
								<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br from-amber-600/10 to-purple-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<span className="text-2xl sm:text-3xl">{item.icon}</span>
								</div>
								<h4 className="font-bold text-azul mb-2 text-base sm:text-lg">
									{item.title}
								</h4>
								<p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
									{item.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* CTA com design impactante */}
			<section className="relative">
				<div className="absolute inset-0 bg-linear-to-br from-amber-600/50 to-pink-600/20 rounded-3xl blur-2xl"></div>

				<div className="relative bg-linear-to-br from-amber-600/90 to-purple-600/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center shadow-2xl border-none overflow-hidden">
					{/* Decoração de fundo */}
					<div className="absolute top-0 left-0 w-full h-full opacity-10">
						<div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
						<div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
					</div>

					<div className="relative">
						<div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-700 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl animate-float">
							<Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
						</div>

						<h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4">
							Sua organização precisa de assessoria jurídica?
						</h3>
						<p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
							Agende uma conversa e descubra como podemos fortalecer a estrutura
							legal da sua instituição para maximizar o impacto social.
						</p>

						<Link
							href="/contato"
							className="group inline-flex items-center gap-2 px-8 sm:px-10 py-4 rounded-xl bg-white text-azul hover:bg-amber-100 transition-all duration-300 hover:scale-105 shadow-2xl text-sm sm:text-base font-bold"
						>
							Fale comigo!
							<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</Link>

						{/* Trust indicators */}
						<div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-white/50">
							<div className="flex items-center gap-2 text-white/90">
								<Users className="w-4 h-4" />
								<span className="text-sm font-semibold">50+ ONGs atendidas</span>
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

export default TerceiroSetorPage;