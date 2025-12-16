import { useState, useEffect } from "react";
import { Briefcase, Heart, ChevronRight, Scale } from "lucide-react";

export default function ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [activeArea, setActiveArea] = useState("");

	useEffect(() => {

		const path = window.location.pathname;
		if (path.includes("trabalhista")) setActiveArea("trabalhista");
		else if (path.includes("terceiro-setor")) setActiveArea("terceiro-setor");
	}, []);

	const areas = [
		{
			id: "trabalhista",
			title: "Direito Trabalhista",
			icon: Briefcase,
			description: "Defesa de direitos e relações de trabalho",
			href: "/areas/trabalhista",
			gradient: "from-blue-500 to-blue-600"
		},
		{
			id: "terceiro-setor",
			title: "Terceiro Setor",
			icon: Heart,
			description: "Assessoria para ONGs e associações",
			href: "/areas/terceiro-setor",
			gradient: "from-purple-500 to-purple-600"
		}
	];

	return (
		<section className="pt-20 min-h-screen bg-linear-to-b from-gray-50 to-white">
			{/* Hero Section */}
			<div className="relative bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
					<div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
					{/* Breadcrumb */}
					<div className="flex items-center gap-2 text-sm text-blue-100 mb-6">
						<a href="/" className="hover:text-white transition">
							Início
						</a>
						<ChevronRight className="w-4 h-4" />
						<span className="text-white font-medium">Áreas de Atuação</span>
					</div>

					<div className="flex items-start gap-6 mb-8">
						<div className="hidden sm:flex w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl items-center justify-center border border-white/20">
							<Scale className="w-8 h-8 text-white" />
						</div>
						<div className="flex-1">
							<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
								Áreas de Atuação
							</h1>
							<p className="text-lg sm:text-xl text-blue-100 max-w-3xl leading-relaxed">
								Atuação jurídica focada em soluções claras, estratégicas e humanizadas,
								com experiência especializada em Direito do Trabalho e Terceiro Setor.
							</p>
						</div>
					</div>

					{/* Cards de Áreas */}
					<div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mt-12">
						{areas.map((area) => {
							const Icon = area.icon;
							const isActive = activeArea === area.id;

							return (
								<a
									key={area.id}
									href={area.href}
									className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border transition-all duration-300 ${isActive
										? "border-white shadow-2xl scale-105 bg-white/20"
										: "border-white/20 hover:border-white/40 hover:bg-white/15 hover:scale-105"
										}`}
								>
									{/* Indicador de Ativo */}
									{isActive && (
										<div className="absolute top-4 right-4">
											<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
										</div>
									)}

									<div className="flex items-start gap-4">
										<div className={`w-14 h-14 rounded-xl bg-linear-to-br ${area.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
											<Icon className="w-7 h-7 text-white" />
										</div>
										<div className="flex-1">
											<h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">
												{area.title}
											</h3>
											<p className="text-blue-100 text-sm lg:text-base">
												{area.description}
											</p>
										</div>
										<ChevronRight className={`w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 ${isActive ? "text-white" : ""
											}`} />
									</div>
								</a>
							);
						})}
					</div>

					{/* Stats ou Call to Action */}
					<div className="mt-12 pt-8 border-t border-white/20">
						<div className="grid grid-cols-3 gap-4 lg:gap-8 text-center">
							<div>
								<div className="text-2xl lg:text-3xl font-bold mb-1">15+</div>
								<div className="text-sm lg:text-base text-blue-100">Anos de Experiência</div>
							</div>
							<div>
								<div className="text-2xl lg:text-3xl font-bold mb-1">500+</div>
								<div className="text-sm lg:text-base text-blue-100">Casos Atendidos</div>
							</div>
							<div>
								<div className="text-2xl lg:text-3xl font-bold mb-1">98%</div>
								<div className="text-sm lg:text-base text-blue-100">Satisfação</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Conteúdo específico da área */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
				<div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 lg:p-12">
					{children}
				</div>
			</div>

			{/* CTA Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
				<div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
					<h2 className="text-2xl lg:text-3xl font-bold mb-4">
						Precisa de Consultoria Jurídica?
					</h2>
					<p className="text-blue-100 mb-8 max-w-2xl mx-auto">
						Agende uma consulta e descubra como podemos ajudar você ou sua organização
						com soluções jurídicas personalizadas.
					</p>
					<a
						href="/contato"
						className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
					>
						Agendar Consulta
						<ChevronRight className="w-5 h-5" />
					</a>
				</div>
			</div>
		</section>
	);
}