'use client';
import { useSurveyContext } from '@/contexts/Survey/survey.context';
export default function TextArea({ data }) {
	const { setAnswer } = useSurveyContext();
	function HandleAnswer(value) {
		return setAnswer(data.questionId, value);
	}
	return (
		<div>
			<div className='flex flex-row items-center gap-2 mb-2'>
				<h1 className='text-base theme-font-black font-semibold'>
					{data.content}
				</h1>
				{data.mandatory === true ? null : (
					<span className='theme-font-secondary text-base'>
						(opcional)
					</span>
				)}
			</div>
			<div className='mb-4'>
				<textarea
					className='w-full border-solid border theme-border-primary rounded-lg resize-none text-base p-4'
					id=''
					placeholder='Digite aqui...'
					rows={5}
					onBlur={(event) => {
						HandleAnswer(event.target.value);
					}}
				></textarea>
			</div>
		</div>
	);
}
