'use client'
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const CTAButton = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="contact-button flex fixed gap-2 bottom-6 right-6
				 bg-blue-600 hover:bg-blue-700 text-white
				 cursor-pointer  p-4 rounded-full shadow-xl transition-all duration-300"
			>
				<MessageCircle className="w-6 h-6" />

				<p className="hidden md:block">Como posso te ajudar hoje ?</p>
			</button>

			<ContactModal open={open} onClose={() => setOpen(false)} />
		</>
	);
}

