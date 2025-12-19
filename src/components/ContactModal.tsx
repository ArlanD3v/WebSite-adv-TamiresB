import { X } from "lucide-react";
import Image from "next/image";
import { useWhatsApp } from "../hooks/useWhatsApp";

type Props = {
	open: boolean;
	onClose: () => void;
};

export const ContactModal = ({ open, onClose }: Props) => {
	const { url: whatsappUrl } = useWhatsApp()
	if (!open) return null;

	return (
		<div className="fixed inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center z-50 p-4">
			<div className="bg-background/90 rounded-2xl p-6 w-full max-w-sm shadow-2xl relative">
				<button
					onClick={onClose}
					className="absolute top-1 right-2 text-gray-500 hover:text-gray-700"
				>
					<X className="text-main w-5 h-5 m-1 cursor-pointer" />
				</button>
				<h2 className="text-center  text-lg mb-2 font-bold text-shadow-lg">Estou disponivel nos canais</h2>
				<div className="flex flex-col gap-3">

					<a
						href={whatsappUrl}
						target="_blank"
						className="flex items-center justify-center gap-4  w-full text-center py-2  shadow-lg bg-green-600  text-white rounded-2xl hover:bg-green-700 transition-all"

					>
						<Image
							className="w-8 h-8"
							src="/images/Wpp.png"
							alt="Imagem whatsapp"
							width={50}
							height={50}
						/>
						WhatsApp
					</a>

					<a
						href="https://www.instagram.com/borgesadv_preta/"
						target="_blank"
						className="flex items-center justify-center gap-4 w-full text-center py-2 shadow-lg bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-all"
					>
						<Image
							className="w-8 h-8"
							src="/images/insta.png"
							alt="Imagem instagram"
							width={50}
							height={50}
						/>
						Instagram
					</a>

				</div>
			</div>
		</div>
	);
}
