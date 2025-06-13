"use client";
import { getMessages } from "./i18n";
import { useLang } from "./LangContext";
import { AuroraText } from "./components/aurora-text";

export default function Home() {
	const { lang } = useLang();
	const t = getMessages(lang);

	return (
		<main className="max-w-md mx-auto px-2 pb-8">
			<section className="pt-2 text-left">
				<AuroraText
					className="text-6xl font-extrabold"
					colors={["b74e70", "#ff9190", "#5e72eb", "#53beed"]}
					speed={2}
				>
					Redesign Your Sleep With AI
				</AuroraText>
			</section>
			<section id="overview" className="py-10 scroll-mt-20">
				<h2 className="text-xl font-bold text-[#b74e70] mb-2">
					{t.menu.overview}
				</h2>
				<p className=" text-blue-950/90 leading-relaxed">{t.overview}</p>
			</section>
			<section id="flow" className="py-10 scroll-mt-20">
				<h2 className="text-xl font-bold text-[#b74e70] mb-2">{t.menu.flow}</h2>
				<p className=" text-blue-950/90 leading-relaxed">{t.flow}</p>
			</section>
			<section id="future" className="py-10 scroll-mt-20">
				<h2 className="text-xl font-bold text-[#b74e70] mb-2">
					{t.menu.future}
				</h2>
				<p className=" text-blue-950/90 leading-relaxed">{t.future}</p>
			</section>
			{/* footer */}
			<footer className="mt-10 border-t border-blue-950/20 pt-8">
				<section id="team" className="mb-6">
					<h3 className="text-lg font-semibold text-[#53beed] mb-1">
						{t.menu.team}
					</h3>
					<p className="text-blue-950/90">{t.footer.team}</p>
				</section>
				<section id="contact">
					<h3 className="text-lg font-semibold text-[#53beed] mb-1">
						{t.menu.contact}
					</h3>
					<p className="text-snow text-blue-950/90">{t.footer.contact}</p>
				</section>
				<div className="mt-6 text-xs text-blue-950/60 text-center">
					&copy; {new Date().getFullYear()} NeurestX
				</div>
			</footer>
		</main>
	);
}
