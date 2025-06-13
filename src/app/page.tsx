"use client";
import { getMessages } from "./i18n";
import { useLang } from "./LangContext";

export default function Home() {
	const { lang } = useLang();
	const t = getMessages(lang);

	return (
		<main className="max-w-md mx-auto px-2 pb-8">
			<section id="overview" className="py-10 scroll-mt-20">
				<h2 className="text-xl font-bold text-pink mb-2">{t.menu.overview}</h2>
				<p className="text-base text-navy/90 leading-relaxed">{t.overview}</p>
			</section>
			<section id="flow" className="py-10 scroll-mt-20">
				<h2 className="text-xl font-bold text-sky mb-2">{t.menu.flow}</h2>
				<p className="text-base text-navy/90 leading-relaxed">{t.flow}</p>
			</section>
			<section id="future" className="py-10 scroll-mt-20">
				<h2 className="text-xl font-bold text-navy mb-2">{t.menu.future}</h2>
				<p className="text-base text-navy/90 leading-relaxed">{t.future}</p>
			</section>
			<footer className="mt-10 border-t border-navy/20 pt-8">
				<section id="team" className="mb-6">
					<h3 className="text-lg font-semibold text-pink mb-1">
						{t.menu.team}
					</h3>
					<p className="text-base text-navy/90">{t.footer.team}</p>
				</section>
				<section id="contact">
					<h3 className="text-lg font-semibold text-sky mb-1">
						{t.menu.contact}
					</h3>
					<p className="text-base text-navy/90">{t.footer.contact}</p>
				</section>
				<div className="mt-6 text-xs text-navy/60 text-center">
					&copy; 2025 Expo2025 Team
				</div>
			</footer>
		</main>
	);
}
