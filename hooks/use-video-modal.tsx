import { create } from "zustand";

interface VideoModalStore {
	isOpen: boolean;
	url: string;
	onOpen: (url: string) => void;
	onClose: () => void;
}

const useVideoModal = create<VideoModalStore>((set) => ({
	isOpen: false,
	url: "",
	onOpen: (url) => set({ url, isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useVideoModal;
