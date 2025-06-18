"use client";

import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
import { LangProvider } from "./LangContext";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

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
				className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#132d59]/2`}
			>
				<LangProvider>
					<Menu />
					<div className="pt-4">{children}</div>
				</LangProvider>
			</body>
		</html>
	);
}
