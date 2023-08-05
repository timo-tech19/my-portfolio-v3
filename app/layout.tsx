import ModalProvider from "@/providers/modal-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Timo Heman | Portfolio",
	description:
		"This is my portfolio website where I showcase some of my best work and skills.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ModalProvider />
				{children}
			</body>
		</html>
	);
}
