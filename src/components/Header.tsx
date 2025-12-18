'use client'
import { useState } from "react";
import { Menu, X, Scale, ChevronDown } from "lucide-react";


export const Header = () => {
	const [open, setOpen] = useState(false);
	const [areasOpen, setAreasOpen] = useState(false);

	return (
		<header className="w-full fixed top-0 left-0 bg-background backdrop-blur-lg shadow-sm z-50 border-b border-white">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<a href="/" className="flex items-center gap-3 group">
						<div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
							<Scale className="w-5 h-5 text-white" />
						</div>
						<div className="flex flex-col">
							<span className="text-lg font-bold text-main leading-tight">
								Tamires Borges
							</span>
							<span className="text-xs text-accent font-medium">
								Consultoria Jurídica
							</span>
						</div>
					</a>

					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center gap-1">
						<a
							href="/"
							className="px-4 py-2 text-sm font-medium text-main hover:bg-foreground hover:text-soft rounded-lg transition-all duration-200"
						>
							Início
						</a>

						{/* Dropdown Areas */}
						<div className="relative group">
							<button className="px-4 py-2 text-sm font-medium text-main hover:bg-foreground hover:text-soft rounded-lg transition-all duration-200 flex items-center gap-1">
								Áreas de Atuação
								<ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
							</button>
							<div className="absolute top-full left-0 mt-2 w-56 bg-foreground rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
								<div className="p-2">
									<a
										href="/areas/trabalhista"
										className="flex flex-col px-4 py-3 rounded-lg hover:bg-background transition-colors duration-200"
									>
										<span className="text-sm font-semibold text-accent">
											Direito Trabalhista
										</span>
										<span className="text-xs text-muted mt-0.5">
											Relações de trabalho e CLT
										</span>
									</a>
									<a
										href="/areas/terceiro-setor"
										className="flex flex-col px-4 py-3 rounded-lg hover:bg-background transition-colors duration-200"
									>
										<span className="text-sm font-semibold text-accent">
											Terceiro Setor
										</span>
										<span className="text-xs text-muted mt-0.5">
											ONGs e associações
										</span>
									</a>
								</div>
							</div>
						</div>

						<a
							href="/artigos"
							className="px-4 py-2 text-sm font-medium text-main hover:bg-foreground hover:text-soft rounded-lg transition-all duration-200"
						>
							Artigos
						</a>
						<a
							href="/contato"
							className="ml-4 px-6 py-2.5 text-sm font-semibold text-white bg-foreground/80 hover:bg-foreground rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
						>
							Agende uma Reunião
						</a>
					</div>

					{/* Mobile Button */}
					<button
						className="lg:hidden p-2 text-main hover:bg-foreground hover:text-soft rounded-lg transition-colors duration-200 cursor-pointer"
						onClick={() => setOpen(!open)}
						aria-label="Menu"
					>
						{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden bg-foreground/90  border-t border-accent overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"
					}`}
			>
				<div className="px-4 py-4 space-y-1">
					<a
						href="/"
						className="block px-4 py-3 text-sm font-medium text-white bg-foreground/20 hover:bg-foreground rounded-lg transition-colors duration-200"
						onClick={() => setOpen(false)}
					>
						Início
					</a>

					{/* Mobile Areas Dropdown */}
					<div>
						<button
							className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-white bg-foreground/20 hover:bg-foreground rounded-lg transition-colors duration-200"
							onClick={() => setAreasOpen(!areasOpen)}
						>
							Áreas de Atuação
							<ChevronDown
								className={`w-4 h-4 transition-transform duration-300 ${areasOpen ? "rotate-180" : ""
									}`}
							/>
						</button>
						<div
							className={`overflow-hidden transition-all duration-300 ${areasOpen ? "max-h-40" : "max-h-0"
								}`}
						>
							<a
								href="/areas/trabalhista"
								className="block pl-8 pr-4 py-2.5 text-sm text-white hover:bg-foreground rounded-lg transition-colors duration-200"
								onClick={() => setOpen(false)}
							>
								Direito Trabalhista
							</a>
							<a
								href="/areas/terceiroSetor"
								className="block pl-8 pr-4 py-2.5 text-sm text-white hover:bg-foreground rounded-lg transition-colors duration-200"
								onClick={() => setOpen(false)}
							>
								Terceiro Setor
							</a>
						</div>
					</div>

					<a
						href="/artigos"
						className="block px-4 py-3 text-sm font-medium text-white bg-foreground/20 hover:bg-foreground rounded-lg transition-colors duration-200"
						onClick={() => setOpen(false)}
					>
						Artigos
					</a>
					<a
						href="/contato"
						className="block text-center px-4 py-3 text-sm font-semibold text-main bg-background/80 hover:bg-accent rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-2"
						onClick={() => setOpen(false)}
					>
						Contato
					</a>
				</div>
			</div>
		</header>
	);
}