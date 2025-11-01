"use client";

import Image from "next/image";
import { getMessages } from "@/app/i18n";
import { useLang } from "@/app/LangContext";
import Link from "next/link";

export default function HeatmapPage() {
	const { lang } = useLang();
	const t = getMessages(lang);

	return (
		<main className="max-w-md mx-auto px-4 pb-8">
			<section className="pb-8 text-left relative">
				<div className="font-roboto text-[5rem] font-bold leading-16 tracking-tighter text-[#3280e6] mb-4">
					<p className="text-myakusky">Our</p>
					<p>Current</p>
					<p className="text-[#dd3869]">Work</p>
					<Image
						src="/faipIllust.png"
						alt="FAIP illustration"
						width={180}
						height={200}
						className="absolute -bottom-9 right-4 object-cover"
					/>
				</div>
			</section>
			<div className="mt-4 -mb-2">
				<Link
					href="/#currentWork"
					className="text-darkblue hover:underline text-xl font-semibold"
				>
					{"<"}Back
				</Link>
			</div>
			<section
				id="future"
				className="my-6 scroll-mt-20 border-2 border-slate-200 bg-white/40 backdrop-blur-sm rounded-lg shadow-md mr-2 px-2 py-4"
			>
				<h2 className="text-2xl font-bold text-myakupink mb-2">
					{t.snoreDetectionPage.snoreDetectionHeadline}
				</h2>
				{t.snoreDetectionPage.snoreDetectionContents.map(
					(line: string, idx: number) => {
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
									className="px-2 mt-2 text-darkblue leading-relaxed font-semibold"
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
					},
				)}
			</section>
			<div className="mt-2">
				<Link
					href="/#currentWork"
					className="text-darkblue hover:underline text-xl font-semibold"
				>
					{"<"}Back
				</Link>
			</div>
		</main>
	);
}
