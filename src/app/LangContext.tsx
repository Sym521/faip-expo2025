"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Lang } from "./i18n";

interface LangContextProps {
	lang: Lang;
	setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
	const [lang, setLang] = useState<Lang>("ja");
	return (
		<LangContext.Provider value={{ lang, setLang }}>
			{children}
		</LangContext.Provider>
	);
}

export function useLang() {
	const ctx = useContext(LangContext);
	if (!ctx) throw new Error("useLang must be used within LangProvider");
	return ctx;
}
