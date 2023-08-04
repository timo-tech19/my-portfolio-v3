"use client";

import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
	return (
		<Transition show={open} appear as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={onClose}>
				<div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm' />
				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className='relative w-full max-w-3xl overflow-hidden flex items-center justify-center'>
								<div onClick={onClose} className='absolute right-0 top-0'>
									<Image src='/close.svg' alt='Close' width={30} height={30} />
								</div>
								{children}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Modal;
