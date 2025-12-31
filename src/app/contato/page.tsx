'use client'
import { useState } from "react";
import { Mail, Send, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Header } from "@/src/components/Header";
import { CTAButton } from "@/src/components/CTAButton";

export default function ContatoPage() {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('loading');
		setErrorMessage('');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatus('success');
				setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
				setTimeout(() => setStatus('idle'), 5000);
			} else {
				setStatus('error');
				setErrorMessage('Erro ao enviar mensagem. Tente novamente.');
			}
		} catch (error) {
			setStatus('error');
			setErrorMessage('Erro ao enviar mensagem. Tente novamente.');
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	return (
		<section className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-purple-50">
			<Header />
			<CTAButton />

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
				{/* Header */}
				<div className="text-center mb-12 sm:mb-16">
					<div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-700/20 backdrop-blur-sm border border-amber-300/30">
						<Mail className="w-4 h-4 text-amber-800" />
						<span className="text-sm font-semibold text-amber-900">
							Entre em contato
						</span>
					</div>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
						<span className="bg-linear-to-r from-amber-800 to-yellow-700 bg-clip-text text-transparent">
							Vamos conversar sobre
						</span>
						<br />
						<span className="bg-linear-to-r from-yellow-700 to-amber-600 bg-clip-text text-transparent">
							seu caso?
						</span>
					</h1>
					<p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
						Preencha o formulário abaixo e retornarei o mais breve possível
						para entender suas necessidades.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
					{/* Coluna Esquerda - Informações */}
					<div className="lg:col-span-1 space-y-4">
						{/* Informações Adicionais */}
						<div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg">
							<h3 className="text-lg font-bold text-azul mb-4">Informações</h3>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<MapPin className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
									<div>
										<p className="text-sm font-semibold text-gray-900">Atuação</p>
										<p className="text-sm text-gray-600">Todo Brasil</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Clock className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
									<div>
										<p className="text-sm font-semibold text-gray-900">Horário</p>
										<p className="text-sm text-gray-600">Seg - Sex: 9h às 18h</p>
									</div>
								</div>
							</div>
						</div>

						{/* Card decorativo com call-to-action */}
						<div className="bg-linear-to-br from-amber-600 to-yellow-600 rounded-2xl p-6 shadow-xl">
							<div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
								<Mail className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-lg font-bold text-white mb-2">Resposta Rápida</h3>
							<p className="text-white/90 text-sm">
								Respondo todas as mensagens em até 24 horas úteis.
								Sua dúvida é importante para mim.
							</p>
						</div>
					</div>

					{/* Coluna Direita - Formulário */}
					<div className="lg:col-span-2">
						<div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-200/50 shadow-xl">
							<h2 className="text-2xl sm:text-3xl font-bold text-azul mb-2">Envie uma mensagem</h2>
							<p className="text-zinc-600 mb-6 sm:mb-8">
								Preencha os campos abaixo com suas informações e dúvidas.
							</p>

							{status === 'success' && (
								<div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
									<CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
									<div>
										<p className="text-sm font-semibold text-green-900">Mensagem enviada com sucesso!</p>
										<p className="text-sm text-green-700">Retornarei em breve.</p>
									</div>
								</div>
							)}

							{status === 'error' && (
								<div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
									<AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
									<div>
										<p className="text-sm font-semibold text-red-900">Erro ao enviar mensagem</p>
										<p className="text-sm text-red-700">{errorMessage}</p>
									</div>
								</div>
							)}

							<form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
								<div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
									<div>
										<label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
											Nome completo *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											value={formData.name}
											onChange={handleChange}
											className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 bg-white"
											placeholder="Seu nome"
										/>
									</div>
									<div>
										<label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
											Telefone *
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											required
											value={formData.phone}
											onChange={handleChange}
											className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 bg-white"
											placeholder="(00) 00000-0000"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
										E-mail *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 bg-white"
										placeholder="seu@email.com"
									/>
								</div>

								<div>
									<label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
										Assunto *
									</label>
									<select
										id="subject"
										name="subject"
										required
										value={formData.subject}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 bg-white"
									>
										<option value="">Selecione um assunto</option>
										<option value="trabalhista">Direito Trabalhista</option>
										<option value="terceiro-setor">Terceiro Setor</option>
										<option value="consultoria">Consultoria Preventiva</option>
										<option value="outro">Outro</option>
									</select>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
										Mensagem *
									</label>
									<textarea
										id="message"
										name="message"
										required
										value={formData.message}
										onChange={handleChange}
										rows={6}
										className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 resize-none bg-white"
										placeholder="Descreva seu caso ou dúvida..."
									/>
								</div>

								<button
									type="submit"
									disabled={status === 'loading'}
									className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-amber-700 to-yellow-600 text-white font-semibold hover:from-amber-800 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
								>
									{status === 'loading' ? (
										<>
											<svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
												<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
											</svg>
											Enviando...
										</>
									) : (
										<>
											Enviar mensagem
											<Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
										</>
									)}
								</button>

								<p className="text-xs text-gray-500 mt-4">
									* Campos obrigatórios. Seus dados estão protegidos e não serão compartilhados.
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}