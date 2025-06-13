"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
import { LangProvider } from "./LangContext";

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
	return (
		<html lang="ja">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-base via-sky to-pink`}
			>
				<LangProvider>
					<Menu />
					<div className="pt-20">{children}</div>
				</LangProvider>
			</body>
		</html>
	);
}
