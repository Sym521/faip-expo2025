"use client";
import { useState } from "react";
import { getMessages } from "../i18n";
import { useLang } from "../LangContext";

const menuItems = [
	{ id: "overview", icon: "📄" },
	{ id: "flow", icon: "⚡" },
	{ id: "future", icon: "🕒" },
	{ id: "team", icon: "👥" },
	{ id: "contact", icon: "✉️" },
];

export default function Menu() {
	const [open, setOpen] = useState(false);
	const { lang, setLang } = useLang();
	const t = getMessages(lang);

	return (
		<div className="fixed top-4 right-4 z-50">
			<button
				aria-label="menu"
				className="w-12 h-12 rounded-full bg-gradient-to-br from-pink via-sky to-navy text-base flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 border-2 border-white/80"
				onClick={() => setOpen((v) => !v)}
			>
				<span
					className={`block w-6 h-0.5 bg-base mb-1 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
				></span>
				<span
					className={`block w-6 h-0.5 bg-base mb-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}
				></span>
				<span
					className={`block w-6 h-0.5 bg-base transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
				></span>
			</button>
			<div
				className={`absolute right-0 mt-2 w-48 bg-base rounded-xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
				style={{ backdropFilter: "blur(8px)" }}
			>
				<ul className="flex flex-col py-2">
					{menuItems.map((item) => (
						<li key={item.id}>
							<a
								href={`#${item.id}`}
								className="flex items-center gap-2 px-6 py-3 text-navy hover:bg-sky hover:text-base transition-colors duration-200"
								onClick={() => setOpen(false)}
							>
								<span>{item.icon}</span>
								{t.menu[item.id as keyof typeof t.menu]}
							</a>
						</li>
					))}
				</ul>
				<button
					className="w-full py-2 bg-pink text-base font-bold hover:bg-navy hover:text-base transition-colors duration-200 flex items-center justify-center gap-2"
					onClick={() => setLang(lang === "ja" ? "en" : "ja")}
				>
					<span role="img" aria-label="language" className="text-lg">
						🌐
					</span>
					{t.switch}
				</button>
			</div>
		</div>
	);
}
