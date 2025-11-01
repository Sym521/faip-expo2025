import Menu from "@/app/components/Menu";
export default function HeatmapPage({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="max-w-md mx-auto px-4 pb-8">
			<Menu />
			<div className="pt-4">{children}</div>
		</main>
	);
}
