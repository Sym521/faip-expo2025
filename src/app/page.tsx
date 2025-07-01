"use client";
import Image from "next/image";
import { getMessages } from "./i18n";
import { useLang } from "./LangContext";
import Link from "next/link";

export default function Home() {
	const { lang } = useLang();
	const t = getMessages(lang);

	return (
		<main className="max-w-md mx-auto px-4 pb-8">
			<section className="pb-8 text-left relative">
				<div className="font-inter text-[5rem] font-extrabold leading-16 tracking-tighter text-[#3280e6] mb-4">
					<p className="text-myakusky">Redesign</p>
					<p>Your Sleep</p>
					<p>
						With <span className="text-[#dd3869]">AI</span>
					</p>
					<Image
						src="/faipIllust.png"
						alt="FAIP illustration"
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
				<h2 className="text-2xl font-bold text-myakupink mb-2">
					{t.menu.overview}
				</h2>
				<p className="px-1 text-darkblue leading-relaxed">{t.overview}</p>
				<Image
					src="/overview.png"
					alt="Overview image"
					width={500}
					height={300}
					quality={100}
					className="mt-2 rounded-lg object-cover max-w-full"
				/>
			</section>
			<section
				id="flow"
				className="my-6 scroll-mt-20 border-2 border-slate-200 bg-white/40 backdrop-blur-sm rounded-lg shadow-md mr-2 px-2 py-4"
			>
				<h2 className="text-2xl font-bold text-myakupink mb-2">
					{t.menu.flow}
				</h2>
				{t.flow_contents.map((line: string, idx: number) => {
					// 画像挿入用: 文字列が [img:パス] の形式なら画像を表示
					const imgMatch = line.match(/^\[img:(.+)\]$/);
					if (imgMatch) {
						return (
							<div key={idx} className="my-2 flex justify-center">
								<Image
									src={imgMatch[1]}
									alt="Description of flow"
									width={500}
									height={300}
									quality={100}
									className="mt-2 rounded-lg object-cover max-w-full"
								/>
							</div>
						);
					}
					return (
						<p key={idx} className="px-1 text-darkblue leading-relaxed">
							{line}
						</p>
					);
				})}
			</section>
			<section
				id="future"
				className="my-6 scroll-mt-20 border-2 border-slate-200 bg-white/40 backdrop-blur-sm rounded-lg shadow-md mr-2 px-2 py-4"
			>
				<h2 className="text-2xl font-bold text-myakupink mb-2">
					{t.menu.future}
				</h2>
				{t.future_contents.map((line: string, idx: number) => {
					const boldMatch = line.match(/^\*\*(.+)\*\*$/);
					const imgMatch = line.match(/^\[img:(.+)\]$/);
					if (imgMatch) {
						return (
							<div key={idx} className="my-2 flex justify-center">
								<Image
									src={imgMatch[1]}
									alt="Description of achievement"
									width={500}
									height={300}
									quality={100}
									className="mt-2 rounded-lg object-cover max-w-full"
								/>
							</div>
						);
					}
					if (boldMatch) {
						return (
							<p
								key={idx}
								className="px-2 text-darkblue leading-relaxed font-semibold"
							>
								{boldMatch[1]}
							</p>
						);
					}
					return (
						<p key={idx} className="px-2 text-darkblue leading-relaxed">
							{line}
						</p>
					);
				})}
			</section>
			<section
				id="achievements"
				className="my-6 scroll-mt-20 border-2 border-slate-200 bg-white/40 backdrop-blur-sm rounded-lg shadow-md mr-2 px-2 py-4"
			>
				<h2 className="text-2xl font-bold text-myakupink mb-2">
					{t.menu.achievements}
				</h2>
				<div className="my-2">
					<Link
						href="https://dcon.ai/dcon2024/"
						className="text-lg font-bold text-[#2784ac] hover:underline"
					>
						{t.achievement_title_dcon}
					</Link>
					{t.achievement_text_dcon.map((line: string, idx: number) => {
						const imgMatch = line.match(/^\[img:(.+)\]$/);
						if (imgMatch) {
							return (
								<div key={idx} className="my-2 flex justify-center">
									<Image
										src={imgMatch[1]}
										alt="Description of dcon achievement"
										width={500}
										height={300}
										quality={100}
										className="mt-2 rounded-lg object-cover max-w-full"
									/>
								</div>
							);
						}
						return (
							<p
								key={idx}
								className="px-2 text-base text-darkblue leading-relaxed"
							>
								{line}
							</p>
						);
					})}
				</div>
				<div className="my-2">
					<Link
						href="https://www.oita-ct.ac.jp/2024/12/26/20241225_45thjesko/"
						className="text-lg font-bold text-[#2784ac] hover:underline"
					>
						{t.achievement_title_jes}
					</Link>
					{t.achievement_text_jes.map((line: string, idx: number) => {
						const imgMatch = line.match(/^\[img:(.+)\]$/);
						if (imgMatch) {
							return (
								<div key={idx} className="my-2 flex justify-center">
									<Image
										src={imgMatch[1]}
										alt="Description of jes"
										width={500}
										height={300}
										quality={100}
										className="mt-2 rounded-lg object-cover max-w-full"
									/>
								</div>
							);
						}
						return (
							<p
								key={idx}
								className="px-2 text-base text-darkblue leading-relaxed"
							>
								{line}
							</p>
						);
					})}
				</div>
			</section>

			{/* footer */}
			<footer className="mt-10 border-t border-darkblue/20 pt-4">
				<section id="team" className="mb-4">
					<h3 className="text-lg font-semibold text-myakusky">
						{t.menu.team}
					</h3>
					<p className="mt-1 text-lg font-bold">NeurestX</p>
					{t.footer.team_contents.map((line: string, idx: number) => {
						const boldMatch = line.match(/^\*\*(.+)\*\*$/);
						const imgMatch = line.match(/^\[img:(.+)\]$/);
						if (imgMatch) {
							return (
								<div key={idx} className="my-2 flex justify-center">
									<Image
										src={imgMatch[1]}
										alt="About us"
										width={500}
										height={300}
										quality={100}
										className="mt-2 rounded-lg object-cover max-w-full"
									/>
								</div>
							);
						}

						if (boldMatch) {
							return (
								<p
									key={idx}
									className="px-1 text-myakupink leading-relaxed font-semibold"
								>
									{boldMatch[1]}
								</p>
							);
						}

						return (
							<p
								key={idx}
								className="px-1 text-base text-darkblue leading-relaxed"
							>
								{line}
							</p>
						);
					})}
				</section>
				<section id="contact">
					<h3 className="text-lg font-semibold text-myakusky mb-1">
						{t.menu.contact}
					</h3>
					<Link
						href="mailto:sugarkouga0926@gmail.com"
						className="text-darkblue"
					>
						{t.footer.contact}
					</Link>
				</section>
				<div className="mt-4 text-xs text-darkblue/60 text-center">
					&copy; {new Date().getFullYear()} NeurestX
				</div>
			</footer>
		</main>
	);
}
