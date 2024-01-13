'use client';

import { useSurveyContext } from '@/contexts/Survey/survey.context';

export default function SelectInput({ data }) {
	const { setAnswer } = useSurveyContext();
	function HandleAnswer(value) {
		return setAnswer(data.questionId, value);
	}
	return (
		<div className='flex flex-row items-center gap-2'>
			{data.mandatory === true ? null : (
				<span className='theme-font-secondary text-base'>
					(opcional)
				</span>
			)}
			<select
				className='w-full border-solid border theme-border-primary rounded-lg text-base p-4 theme-font-secondary'
				id=''
				onChange={(event) => {
					return HandleAnswer(event.target.value);
				}}
				defaultValue={'default'}
			>
				<option value='default' disabled>
					{data.content}
				</option>
				{data.itens.map((optionItem, index) => {
					return (
						<option
							value={optionItem.value}
							key={index}
							selected={
								data.answerValue === optionItem.value
									? true
									: false
							}
						>
							{optionItem.description}
						</option>
					);
				})}
			</select>
		</div>
	);
}
