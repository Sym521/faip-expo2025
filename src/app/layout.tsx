"use client";

import {
	Inter,
	Roboto,
	Noto_Sans_JP,
	Zen_Kaku_Gothic_New,
} from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
import { LangProvider } from "./LangContext";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal", "italic"],
});

const notoSansJP = Noto_Sans_JP({
	variable: "--font-noto-sans-jp",
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
	variable: "--font-zen-kaku-gothic-new",
	subsets: ["latin"],
	weight: ["400"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className={`${inter.variable} ${roboto.variable} ${notoSansJP.variable} ${zenKakuGothicNew.variable} min-h-screen bg-darkblue/2`}
			>
				<LangProvider>
					<Menu />
					<div className="pt-4 font-zen-kaku-gothic-new">{children}</div>
					<ScrollToTopButton />
				</LangProvider>
			</body>
		</html>
	);
}
