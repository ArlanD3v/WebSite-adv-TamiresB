
import Link from "next/link";

function TrabalhistaPage() {
	return (

		<article className="space-y-16">
			{/* Introdução */}
			<section className="max-w-3xl ">
				<h2 className="text-3xl font-semibold text-azul/90 mb-6">
					Direito do Trabalho
				</h2>
				<p className="text-zinc-600 text-lg leading-relaxed">
					Atuação jurídica voltada à proteção de direitos, prevenção de conflitos
					e construção de relações de trabalho seguras, éticas e equilibradas.
					Cada caso é analisado de forma individual, com linguagem clara e
					estratégias alinhadas à realidade de cada cliente.
				</p>
			</section>

			{/* Serviços */}
			<section>
				<h3 className="text-2xl font-semibold text-azul/80 mb-8">
					Atuação na área trabalhista
				</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{["Rescisão contratual e verbas trabalhistas", "Assédio moral e sexual no ambiente de trabalho", "Horas extras, adicionais e equiparação salarial", "Reconhecimento de vínculo empregatício", "Orientação preventiva para empresas e empregadores", "Acompanhamento em audiências e processos trabalhistas"].map((item) => (
						<div
							key={item}
							className="p-6 rounded-2xl bg-foreground border border-border-soft"
						>
							<p className="text-muted">{item}</p>
						</div>
					))}
				</div>
			</section>

			{/* Diferencial */}
			<section className="bg-foreground/70 rounded-3xl p-8 border border-border-soft">
				<h3 className="text-2xl font-semibold mb-4 bg-linear-to-bl from-yellow-700/25 to-yellow-800 bg-clip-text text-transparent">
					Atendimento humanizado e estratégico
				</h3>
				<p className="text-text-muted leading-relaxed max-w-3xl">
					A advocacia trabalhista exige sensibilidade, responsabilidade e
					conhecimento técnico. O atendimento é pautado pela escuta ativa,
					transparência nas orientações e comprometimento com soluções jurídicas
					seguras e eficazes.
				</p>
			</section>

			{/* CTA */}
			<section className="text-center">
				<h3 className="text-2xl text-azul font-semibold mb-4">
					Precisa de orientação trabalhista?
				</h3>
				<p className="text-text-muted mb-6">
					Entre em contato para uma análise responsável e personalizada do seu
					caso.
				</p>
				<Link
					href="/contato"
					className="inline-block px-8 py-3 rounded-xl bg-amber-900/60 text-white hover:bg-amber-900/80 transition"
				>
					Fale comigo!
				</Link>
			</section>
		</article>
	);
}

export default TrabalhistaPage