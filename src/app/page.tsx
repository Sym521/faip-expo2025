"use client";
import Image from "next/image";
import { getMessages } from "./i18n";
import { useLang } from "./LangContext";
import Link from "next/link";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
	const { lang } = useLang();
	const t = getMessages(lang);

	return (
		<main className="max-w-md mx-auto px-4 pb-8">
			<section className="pb-8 text-left relative">
				<div className="font-roboto text-[5rem] font-bold leading-16 tracking-tighter text-[#3280e6] mb-4">
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
				id="issues-and-background"
				className="my-6 scroll-mt-20 border-2 border-slate-200 bg-white/40 backdrop-blur-sm rounded-lg shadow-md mr-2 px-2 py-4"
			>
				<h2 className="text-2xl font-bold text-myakupink mb-2">
					{t.menu.issuesAndBackground}
				</h2>

				{t.issues_and_background_contents.map((line: string, idx: number) => {
					// 画像挿入用: 文字列が [img:パス] の形式なら画像を表示
					const imgMatch = line.match(/^\[img:(.+)\]$/);
					if (imgMatch) {
						return (
							<div key={idx} className="my-2 flex justify-center">
								<Image
									src={imgMatch[1]}
									alt="Description of issue"
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
					)
				}
				)}

			</section>
			<section
				id="architecture"
				className="my-6 mr-2 px-2 py-4 scroll-mt-20 border-2 border-slate-200 bg-white/40 backdrop-blur-sm rounded-lg shadow-md"
			>
				<h2 className="text-2xl font-bold text-myakupink mb-2">
					{t.menu.architecture}
				</h2>
				{t.architecture_contents.map((line: string, idx: number) => {
					// 画像挿入用: 文字列が [img:パス] の形式なら画像を表示
					const boldMatch = line.match(/^\*\*(.+)\*\*$/);
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
									className="mt-2 rounded-lg object-cover shadow-md max-w-full"
								/>
							</div>

						);
					}
					if (boldMatch) {
						return (
							<p
								key={idx}
								className="px-2 my-2 text-darkblue leading-relaxed text-xl font-semibold"
							>
								{boldMatch[1]}
							</p>
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
				id="currentWork"
				className="my-6 scroll-mt-20 border-2 border-slate-200 bg-white/40 backdrop-blur-sm rounded-lg shadow-md mr-2 px-2 py-4"
			>
				<h2 className="text-2xl font-bold text-myakupink mb-2">
					{t.menu.currentWorks}
				</h2>
				<div className="grid grid-cols-2 gap-4">
					{[
						{
							href: "/currentWork/heatmap",
							image: "/heatmap.png",
							alt: "圧力分布ヒートマップ",
							headline: t.currentWork_headlines.heatmap,
							description: t.currentWork_description.heatmap
						},
						{
							href: "/currentWork/snoreDetection",
							image: "/snoreDetectionThumbnail.png",
							alt: "いびき検出",
							headline: t.currentWork_headlines.snoreDetection,
							description: t.currentWork_description.snoreDetection
						}
					].map((item, index) => (
						<Link key={index} href={item.href}>
							<div className="border border-slate-200 bg-white/60 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-4">
								<div className="aspect-video relative mb-3">
									<Image
										src={item.image}
										alt={item.alt}
										fill
										className="object-cover rounded-md"
									/>
								</div>
								<h3 className="text-lg font-semibold text-darkblue mb-2">
									{item.headline}
								</h3>
								<p className="text-sm text-darkblue/80 leading-relaxed">
									{item.description}
								</p>
							</div>
						</Link>
					))}
				</div>
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
						href="https://www.ergonomics.jp/official/wp-content/uploads/2024/10/Programma_Workshop_int_Oct_2024_final.pdf"
						className="text-lg font-bold text-[#2784ac] hover:underline"
					>
						{t.achievement_title_ssc}
					</Link>
					{t.achievement_text_ssc.map((line: string, idx: number) => {
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
						{t.achievement_title_jesk45}
					</Link>
					{t.achievement_text_jesk45.map((line: string, idx: number) => {
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
						href="https://pub.confit.atlas.jp/ja/event/jes66/"
						className="text-lg font-bold text-[#2784ac] hover:underline"
					>
						{t.achievement_title_jes66}
					</Link>
					{t.achievement_text_jes66.map((line: string, idx: number) => {
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
						href="https://pub.confit.atlas.jp/en/event/jes66/presentation/E2-04"
						className="text-lg font-bold text-[#2784ac] hover:underline"
					>
						{t.achievement_title_journal_article}
					</Link>
					<p className="px-2 text-base text-darkblue leading-relaxed">
						{t.achievement_text_journal_article}
					</p>
				</div>

			</section>

			{/* footer */}
			<footer className="mt-10 border-t border-darkblue/20 pt-4">
				<section id="team" className="mb-4">
					<h3 className="text-lg font-semibold text-myakusky">
						{t.menu.team}
					</h3>
					<p className="mt-1 text-lg font-bold">NeurestX</p>
					<div>
						<p className="text-base text-darkblue">
							Leader: Kouga SATO
						</p>
						<Image
							src="/kougaSato.jpg"
							alt="Kouga Sato"
							width={150}
							height={150}
							className="rounded-4xl my-4 mx-auto"
						/>
					</div>

					{t.footer.team_contents.map((line: string, idx: number) => {
						const boldMatch = line.match(/^\*\*(.+)\*\*$/);
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
					<div className="ml-1 text-darkblue">
						<Link
							className="hover:underline"
							href="mailto:sugarkouga0926@gmail.com"
						>
							{t.footer.contact}
						</Link>
						<div className="hover:underline">
							<TwitterLogoIcon className="w-5 h-5 text-darkblue inline-block" />
							<Link
								href="https://twitter.com/sugarkouga926"
							>
								: @sugarkouga0926
							</Link>
						</div>
					</div>
				</section>
				<div className="flex mx-auto justify-center mt-6 space-x-2 space-y-1 text-xs text-darkblue/60 text-center">
					<p>&copy; {new Date().getFullYear()} NeurestX</p>
					<p>|</p>
					<p>Created with ❤️ by <Link href="https://x.com/esulikesbread" className="hover:underline">@esulikesbread</Link></p>
				</div>
			</footer>
		</main>
	);
}
