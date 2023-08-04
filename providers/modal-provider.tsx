"use client";

import { useEffect, useState } from "react";
import VideoModal from "@/components/video-modal";

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<>
			<VideoModal />
		</>
	);
};

export default ModalProvider;
