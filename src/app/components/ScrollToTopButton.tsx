export const ScrollToTopButton = () => {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			onClick={handleScrollToTop}
			className="fixed bottom-4 right-4 p-2 w-12 h-12 bg-darkblue font-inter text-slate-50 text-xl font-bold rounded-full shadow-lg hover:bg-darkblue/80 transition-colors"
			aria-label="Scroll to top"
		>
			↑
		</button>
	);
};
