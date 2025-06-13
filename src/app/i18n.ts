import ja from "../i18n/ja.json";
import en from "../i18n/en.json";

export type Lang = "ja" | "en";
export type Messages = typeof ja;

const resources: Record<Lang, Messages> = { ja, en };

export function getMessages(lang: Lang): Messages {
	return resources[lang] || resources.ja;
}
