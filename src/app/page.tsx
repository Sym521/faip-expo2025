"use client";
import Image from "next/image";
import { getMessages } from "./i18n";
import { useLang } from "./LangContext";

export default function Home() {
	const { lang } = useLang();
	const t = getMessages(lang);

	return (
		<main className="max-w-md mx-auto px-2 pb-8">
			<section className="pb-8 text-left relative">
				<div className="font-inter text-[5rem] font-extrabold leading-16 tracking-tighter text-[#3280e6] mb-4">
					<p className="text-[#53beed]">
						Redesign
					</p>
					<p>
						Your Sleep
					</p>
					<p>
						With <span className="text-[#dd3869]">AI</span>
					</p>
					<Image
						src="/faip-illust.png"
						alt="Description of image"
						width={180}
						height={200}
						className="absolute -bottom-9 right-4 object-cover"
					/>
				</div>
			</section>
			<section
				id="overview"
				className="my-6 scroll-mt-20 border-2 border-slate-200 bg-white/40 backdrop-blur-sm rounded-lg shadow-md mr-2 px-2 py-4"
			>
				<h2 className="text-xl font-bold text-[#b74e70] mb-2">
					{t.menu.overview}
				</h2>
				<p className="text-blue-950/90 leading-relaxed">{t.overview}</p>
			</section>
			<section
				id="flow"
				className="my-6 scroll-mt-20 border-2 border-slate-200 bg-white/40 backdrop-blur-sm rounded-lg shadow-md mr-2 px-2 py-4"
			>
				<h2 className="text-xl font-bold text-[#b74e70] mb-2">{t.menu.flow}</h2>
				{t.flow_contents.map((line: string, idx: number) => (
					<p key={idx} className="text-blue-950/90 leading-relaxed">{line}</p>
				))}
			</section>
			<section
				id="future"
				className="my-6 scroll-mt-20 border-2 border-slate-200 bg-white/40 backdrop-blur-sm rounded-lg shadow-md mr-2 px-2 py-4"
			>
				<h2 className="text-xl font-bold text-[#b74e70] mb-2">{t.menu.future}</h2>
				<p className="text-blue-950/90 leading-relaxed">{t.future}</p>
			</section>
			{/* footer */}
			<footer
				className="mt-10 border-t border-blue-950/20 pt-4"
			>
				<section id="team" className="mb-4">
					<h3 className="text-lg font-semibold text-[#53beed] mb-1">
						{t.menu.team}
					</h3>
					<p className="text-blue-950/90">{t.footer.team}</p>
				</section>
				<section id="contact">
					<h3 className="text-lg font-semibold text-[#53beed] mb-1">
						{t.menu.contact}
					</h3>
					<p className="text-blue-950/90">{t.footer.contact}</p>
				</section>
				<div className="mt-4 text-xs text-blue-950/60 text-center">
					&copy; {new Date().getFullYear()} NeurestX
				</div>
			</footer>
		
		</main>
	);
}
