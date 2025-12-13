import { url } from "inspector";
import { useMemo } from "react";

interface WhatsAppData {
	url: string
	phone: string
}

export const useWhatsApp = (): WhatsAppData => {
	const WhatsAppData = useMemo(() => {
		const phoneNumber = '71992269463'
		const message = "Olá, tenho um problema e preciso de uma ajuda especializada."

		return {
			url: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
			phone: phoneNumber,
		}
	}, [])
	return WhatsAppData
}
