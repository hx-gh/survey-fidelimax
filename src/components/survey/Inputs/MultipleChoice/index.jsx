'use client';
import { useSurveyContext } from '@/contexts/Survey/survey.context';
import { useRef } from 'react';

export default function MultipleChoiceList({ data }) {
	const { setAnswer } = useSurveyContext();
	const selectedOptions = useRef([]);
	function handleCheckboxChange(value) {
		selectedOptions.current = selectedOptions.current.includes(value)
			? selectedOptions.current.filter((item) => item !== value)
			: [...selectedOptions.current, value];

		return setAnswer(data.questionId, selectedOptions.current);
	}
	const isOptionSelected = (value) => {
		return selectedOptions.current.includes(value);
	};

	return (
		<div>
			<div className='flex flex-row items-center gap-2 w-full'>
				<h1 className='text-base theme-font-black'>
					{data.content}
				</h1>
				{data.mandatory === true ? null : (
					<span className='theme-font-secondary text-base'>
						(opcional)
					</span>
				)}
			</div>
			{data.horizontal === true ? (
				<div className='grid grid-cols-3 md:grid-flow-col md:auto-cols-fr gap-4 pt-3'>
					{data.itens.map((optionItem, index) => {
						return (
							<label
								htmlFor={`${index}-baloon`}
								key={index}
								className={`border-solid border theme-border-primary rounded-lg py-1 px-2 text-sm w-auto flex items-center justify-center ${
									isOptionSelected(optionItem.value)
										? 'bg-slate-300'
										: ''
								}`}
							>
								<input
									type='checkbox'
									id={`${index}-baloon`}
									className='hidden'
									value={optionItem.value}
									onChange={() =>
										handleCheckboxChange(
											optionItem.value
										)
									}
								/>
								{optionItem.description}
							</label>
						);
					})}
				</div>
			) : (
				<div className='flex flex-col gap-4 pt-3'>
					{data.itens.map((optionItem, index) => {
						return (
							<div key={index} className='flex items-center'>
								<input
									type='checkbox'
									id={`${index}-list`}
									className='border-solid border-2 theme-border-primary'
									value={optionItem.value}
									onChange={() =>
										handleCheckboxChange(
											optionItem.value
										)
									}
								/>
								<label
									htmlFor={`${index}-list`}
									className='ml-4 theme-font-gray text-sm'
								>
									{optionItem.description}
								</label>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
