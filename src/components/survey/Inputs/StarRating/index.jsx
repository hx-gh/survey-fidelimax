'use client';
import Image from 'next/image';
import BlankStarSVG from '../../../../../public/icons/star_blank.svg';
import FullStarSVG from '../../../../../public/icons/star_full.svg';
import { useState } from 'react';
import { useSurveyContext } from '@/contexts/Survey/survey.context';

export default function StarRating({ data }) {
	const { setAnswer } = useSurveyContext();
	const [rating, setRating] = useState(
		data.answerValue ? data.answerValue : 0
	);
	function HandleAnswer(value) {
		setRating(value);
		return setAnswer(data.questionId, value);
	}
	const [hover, setHover] = useState(0);
	return (
		<div>
			<div className='flex flex-row items-center gap-2'>
				<h1 className='theme-font-black text-3xl font-semibold'>
					{data.title
						? data.title
						: 'Título da pergunta deve ficar aqui'}
				</h1>
				{data.mandatory === true ? null : (
					<span className='theme-font-secondary text-base'>
						(opcional)
					</span>
				)}
			</div>
			<div className='flex flex-col align-center gap-2'>
				<span className='text-base theme-font-black'>
					{data.content}
				</span>
				<div>
					<div className='flex flex-row align-center gap-8 py-4'>
						{[...Array(5)].map((star, index) => {
							return (
								<button
									type='button'
									key={index + 1}
									onClick={() => HandleAnswer(index + 1)}
									onMouseEnter={() =>
										setHover(index + 1)
									}
									onMouseLeave={() => setHover(rating)}
								>
									{index + 1 <= (hover || rating) ? (
										<Image
											src={FullStarSVG}
											alt=''
											className='w-16 h-auto'
										/>
									) : (
										<Image
											src={BlankStarSVG}
											alt=''
											className='w-16 h-auto'
										/>
									)}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
