'use client';
import { useSurveyContext } from '@/contexts/Survey/survey.context';
import { useState } from 'react';
export default function EnumerationRating({ data }) {
	const { setAnswer } = useSurveyContext();
	const [rating, setRating] = useState(
		data.answerValue ? data.answerValue : 0
	);
	function HandleAnswer(value) {
		setRating(value);
		return setAnswer(data.questionId, value);
	}
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
			<div className='flex flex-col gap-2'>
				<span className='text-base theme-font-black'>
					{data.content}
				</span>
				<div className='flex flex-row align-center justify-between gap-4 py-6'>
					{[...Array(10)].map((number, index) => {
						return (
							<div
								className='flex flex-col align-center items-center'
								key={index}
							>
								<label htmlFor={`numberRating-${index + 1}`}>
									{index + 1}
								</label>
								<input
									className='rounded-lg my-2'
									type='radio'
									name={`enumeration-rating-${data.questionId}`}
									value={index + 1}
									defaultChecked={
										rating === index + 1 ? true : false
									}
									onClick={(event) => {
										return HandleAnswer(
											event.target.value
										);
									}}
									id={`numberRating-${index + 1}`}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
