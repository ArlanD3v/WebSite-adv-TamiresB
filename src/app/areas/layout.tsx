'use client'
import { useState, useEffect } from "react";
import { Briefcase, Heart, Scale } from "lucide-react";
import { Header } from "@/src/components/Header";
import { CTAButton } from "@/src/components/CTAButton";


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
			description: "Proteção de direitos, construindo provas, argumentando no processo e acompanhando do início ao fim",
			href: "/areas/trabalhista",
			gradient: "bg-amber-800/75"
		},
		{
			id: "terceiro-setor",
			title: "Terceiro Setor",
			icon: Heart,
			description: "Segurança e sustentabilidade jurídica para organizações da sociedade civil",
			href: "/areas/terceiro-setor",
			gradient: "bg-blue-600/80"
		}
	];


	return (
		<section className="min-h-screen bg-linear-to-tr from-amber-100 to-red-100">
			<Header />
			<CTAButton />

			{/* Hero Section */}
			<div className="relative bg-linear-to-br mt-10 from-amber-100 to-red-100 text-azul overflow-hidden">
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-16 mb-8">

					<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
						{/* Ícone - oculto em mobile */}
						<div className="hidden sm:flex w-14 h-14 lg:w-16 lg:h-16 bg-background/90 backdrop-blur-sm rounded-2xl items-center justify-center border border-white/20 shrink-0">
							<Scale className="w-7 h-7 lg:w-8 lg:h-8 text-foreground" />
						</div>

						<div className="flex-1">
							<h1 className="text-center sm:text-left text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
								<span className="bg-linear-to-bl from-amber-700 to-yellow-600 bg-clip-text text-transparent">
									Como posso
								</span>
								<span className="ml-2 block sm:inline sm:ml-2 bg-linear-to-bl from-yellow-700/25 to-yellow-800 bg-clip-text text-transparent">
									te ajudar?
								</span>
							</h1>
							<p className="text-center sm:text-left text-base sm:text-lg lg:text-xl text-zinc-600 max-w-3xl leading-relaxed">
								Atuação jurídica focada em soluções claras, estratégicas e humanizadas,
								com experiência especializada em Direito do Trabalho e Terceiro Setor.
							</p>
						</div>
					</div>

					{/* Cards de Áreas*/}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8 sm:mt-12">
						{areas.map((area) => {
							const Icon = area.icon;
							const isActive = activeArea === area.id;

							return (
								<a
									key={area.id}
									href={area.href}
									className={`group relative bg-amber-800/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border transition-all duration-300 ${isActive
										? "border-muted shadow-2xl bg-foreground/20"
										: "border-white/20 hover:border-white/40 hover:bg-amber-800/30 hover:scale-102"
										}`}
								>
									{/* Indicador de Ativo */}
									{isActive && (
										<div className="absolute top-5 right-5 sm:top-6 sm:right-6">
											<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
										</div>
									)}

									<div className="flex items-start gap-3 sm:gap-4">
										<div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br ${area.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 shrink-0`}>
											<Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-azul/90 mb-1.5 sm:mb-2 group-hover:translate-x-1 transition-transform duration-300">
												{area.title}
											</h3>
											<p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
												{area.description}
											</p>
										</div>
									</div>
								</a>
							);
						})}
					</div>
				</div>
			</div>

			{/* Conteúdo específico da área */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
				<div className="bg-amber-700/20 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-8 lg:p-12">
					{children}
				</div>
			</div>


		</section>
	);
}