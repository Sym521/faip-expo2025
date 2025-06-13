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
				className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-[#53beed]/70 text-base flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-120 border-2 border-stone-100/80"
				onClick={() => setOpen((v) => !v)}
			>
			</button>
			<div
				className={`absolute right-0 mt-2 w-48 bg-stone-50 rounded-xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
				style={{ backdropFilter: "blur(8px)" }}
			>
				<ul className="flex flex-col py-2">
					{menuItems.map((item) => (
						<li key={item.id}>
							<a
								href={`#${item.id}`}
								className="flex items-center gap-2 px-6 py-3 text-blue-950 hover:bg-[#b74e70]/10 hover:text-base transition-colors duration-200"
								onClick={() => setOpen(false)}
							>
								<span>{item.icon}</span>
								{t.menu[item.id as keyof typeof t.menu]}
							</a>
						</li>
					))}
				</ul>
				<button
					className="w-full py-2 bg-[#53beed]/10 text-base font-bold hover:bg-[#132d59]/90 hover:text-stone-100 transition-colors duration-200 flex items-center justify-center gap-2"
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
