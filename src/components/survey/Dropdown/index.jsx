import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import ChevronDownSVG from '../../../../public/icons/chevron_down.svg';
import { useSurveyContext } from '@/contexts/Survey/survey.context';

export default function DropdownActionButton({
	HandleFakePost,
	HandleError,
	HandleSuccess,
}) {
	const { surveyState } = useSurveyContext();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};
	const closeDropdown = (event) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target)
		) {
			setIsOpen(false);
		}
	};
	useEffect(() => {
		window.addEventListener('click', closeDropdown);

		return () => {
			window.removeEventListener('click', closeDropdown);
		};
	}, []);
	return (
		<div className='relative inline-block text-left'>
			<div>
				<button
					type='button'
					onClick={toggleDropdown}
					className='theme-button-primary rounded-full flex flex-row justify-around items-center w-44 h-14 px-6 py-2 theme-button-primary text-base font-bold '
				>
					<span>Enviar</span>
					<Image
						src={ChevronDownSVG}
						alt=''
						className='dark:invert'
					/>
				</button>
			</div>

			{isOpen && (
				<div
					className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
					role='menu'
					aria-orientation='vertical'
					aria-labelledby='options-menu'
				>
					<div className='py-1' role='none'>
						<button
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-start'
							onClick={() => {
								HandleFakePost();
								toggleDropdown();
							}}
						>
							Enviar Fake Post
						</button>
						<button
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-start'
							onClick={() => {
								HandleError();
								toggleDropdown();
							}}
						>
							Enviar Erro
						</button>
						<button
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-start'
							onClick={() => {
								HandleSuccess();
								toggleDropdown();
							}}
						>
							Enviar Sucesso
						</button>
						<button
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-start'
							onClick={() => {
								console.log(surveyState);
								toggleDropdown();
							}}
						>
							Trigger Console Log
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
