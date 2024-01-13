'use client';
import { useSurveyContext } from '@/contexts/Survey/survey.context';
import { useState } from 'react';
export default function SingleChoice({ data }) {
	const { setAnswer } = useSurveyContext();
	function HandleAnswer(value) {
		setSelected(value);
		return setAnswer(data.questionId, value);
	}
	const [selected, setSelected] = useState(
		data.answerValue ? data.answerValue : 0
	);
	return (
		<div className='flex flex-col gap-2'>
			<div>
				<span className='text-base theme-font-black'>
					{data.content}
				</span>
				{data.mandatory === true ? null : (
					<span className='theme-font-secondary text-base'>
						(opcional)
					</span>
				)}
			</div>
			<div className='flex flex-row align-center items-center gap-4'>
				{data.itens.map((questionItem, index) => {
					return (
						<div
							className='flex flex-row align-center items-center gap-2'
							key={index}
						>
							<input
								className='rounded-lg my-2'
								type='radio'
								name={`single-choice-${data.questionId}`}
								defaultChecked={
									selected === index ? true : false
								}
								value={questionItem.value}
								onClick={(event) => {
									return HandleAnswer(
										event.target.value
									);
								}}
								id={`singleChoice-${index}`}
							/>
							<label htmlFor={`singleChoice-${index}`}>
								{questionItem.description}
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);
}
