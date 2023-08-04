"use client";

import useVideoModal from "@/hooks/use-video-modal";
import Modal from "./modal";
import ReactPlayer from "react-player/lazy";

const VideoModal = () => {
	const previewModal = useVideoModal();
	const url = useVideoModal((state) => state.url);

	if (!url) return null;

	return (
		<Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
			<ReactPlayer url={url} controls />
		</Modal>
	);
};

export default VideoModal;
