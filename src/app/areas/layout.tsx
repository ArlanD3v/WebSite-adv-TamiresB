'use client'
import { useState, useEffect } from "react";
import { Briefcase, Heart, ChevronRight, Scale } from "lucide-react";
import { Header } from "@/src/components/Header";

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
			gradient: "bg-amber-800/75"
		},
		{
			id: "terceiro-setor",
			title: "Terceiro Setor",
			icon: Heart,
			description: "Assessoria para ONGs e associações",
			href: "/areas/terceiro-setor",
			gradient: "bg-blue-600/80"
		}
	];

	return (

		<section className="min-h-screen  bg-linear-to-tr from-amber-100 to-red-100">
			<Header />
			{/* Hero Section */}
			<div className="relative  bg-linear-to-br from-amber-100 to-red-100 text-azul overflow-hidden">

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

					<div className="flex items-start gap-6 mb-4">
						<div className="hidden mt-7 sm:flex w-16 h-16 bg-background/90 backdrop-blur-sm rounded-2xl items-center justify-center border border-white/20">
							<Scale className="w-8 h-8 text-foreground" />
						</div>
						<div className="flex-1 mt-8">
							<h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2 bg-linear-to-bl from-back to-yellow-800 bg-clip-text text-transparent">
								Áreas
								<span className="ml-2 mt-2 bg-linear-to-bl from-yellow-700/25 to-yellow-800 bg-clip-text text-transparent">
									de atuação
								</span>

							</h1>
							<p className="text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed">
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
									className={`group relative bg-amber-800/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border transition-all duration-300 ${isActive
										? "border-muted shadow-2xl bg-foreground/20"
										: "border-white/20 hover:border-white/40 hover:bg-amber-800/30 hover:scale-104"
										}`}
								>
									{/* Indicador de Ativo */}
									{isActive && (
										<div className="absolute top-[45%] right-5">
											<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
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
											<p className="text-muted text-sm lg:text-base">
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
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
				<div className="bg-amber-700/20 rounded-3xl shadow-lg border border-gray-100 p-6 lg:p-12">
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
						Agendar Reunião
						<ChevronRight className="w-5 h-5" />
					</a>
				</div>
			</div>
		</section>
	);
}