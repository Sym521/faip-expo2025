"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./Menu";
import { useState } from "react";
import { Lang } from "./i18n";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// クライアント側でのみ言語切替を管理
	const [lang, setLang] = useState<Lang>("ja");
	return (
		<html lang={lang}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-base via-sky to-pink`}
			>
				<Menu lang={lang} onLangChange={setLang} />
				<div className="pt-20">{children}</div>
			</body>
		</html>
	);
}
