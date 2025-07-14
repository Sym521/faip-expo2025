"use client";
import { useState, useEffect } from "react";
import { getMessages } from "../i18n";
import { useLang } from "../LangContext";

const menuItems = [
	{ id: "overview", icon: "📄" },
	{id: "issuesAndBackground", icon: "📝" },
	{ id: "architecture", icon: "⚡" },
	{ id: "achievements", icon: "🏆" },
	{ id: "currentWorks", icon: "🔧" },
	{ id: "future", icon: "🕒" },
	{ id: "team", icon: "👥" },
	{ id: "contact", icon: "✉️" },
];

export default function Menu() {
	const [open, setOpen] = useState(false);
	const [showGuide, setShowGuide] = useState(false);
	const { lang, setLang } = useLang();
	const t = getMessages(lang);

	// 初回アクセス時にガイドポップアップを表示
	useEffect(() => {
		const hasSeenGuide = localStorage.getItem("hasSeenMenuGuide");
		if (!hasSeenGuide) {
			// 少し遅延してからポップアップを表示
			const timer = setTimeout(() => {
				setShowGuide(true);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleCloseGuide = () => {
		setShowGuide(false);
		localStorage.setItem("hasSeenMenuGuide", "true");
	};

	return (
		<div className="fixed top-4 right-4 z-50">
			{/* メニューガイドポップアップ */}
			{showGuide && (
				<div className="fixed inset-0 bg-slate-700/10 flex items-center justify-center p-4" style={{ zIndex: 60 }}>
					<div className="absolute top-16 right-12 bg-snow font-zen-kaku-gothic-new rounded-xl shadow-2xl max-w-sm w-1/2 mx-2 p-4 text-center">
						<h3 className="text-lg font-bold text-darkblue mb-3">
							{t.menuGuide.title}
						</h3>
						<p className="text-gray-600 text-sm mb-4 leading-relaxed">
							{t.menuGuide.description}
						</p>
						<button
							onClick={handleCloseGuide}
							className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-snow font-bold rounded-4xl transition-all duration-200"
						>
							{t.menuGuide.closeButton}
						</button>
					</div>
				</div>
			)}
			
			<button
				aria-label="menu"
				className="w-12 h-12 rounded-full bg-gradient-to-br from-red-200 to-myakusky/60 text-base flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-120 border-2 border-stone-100/80"
				onClick={() => setOpen((v) => !v)}
			></button>
			<div
				className={`absolute right-0 mt-2 w-48 bg-stone-50 rounded-xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-lvh opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
				style={{ backdropFilter: "blur(8px)" }}
			>
				<ul className="flex flex-col">
					{menuItems.map((item) => (
						<li key={item.id}>
							<a
								href={`#${item.id}`}
								className="flex items-center gap-1 px-6 py-2.5 font-noto-sans-jp text-darkblue hover:bg-myakupink/10 hover:text-base transition-colors duration-200"
								onClick={() => setOpen(false)}
							>
								<span>{item.icon}</span>
								{t.menu[item.id as keyof typeof t.menu]}
							</a>
						</li>
					))}
				</ul>
				<button
					className="w-full py-2 bg-myakusky/20 text-base font-noto-sans-jp font-bold hover:bg-darkblue/90 hover:text-stone-100 transition-colors duration-200 flex items-center justify-center"
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
