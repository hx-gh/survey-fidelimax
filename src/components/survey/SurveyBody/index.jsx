'use client';

import EnumerationRating from '../Inputs/EnumerationRating';
import StarRating from '../Inputs/StarRating';
import MultipleChoiceList from '../Inputs/MultipleChoice';
import SelectInput from '../Inputs/Select';
import TextArea from '../Inputs/TextArea';
import SingleChoice from '../Inputs/SingleChoice';
import { useSurveyContext } from '@/contexts/Survey/survey.context';
import DropdownActionButton from '../Dropdown';
import { sendError, sendFakePost, sendSuccess } from '@/utils/api';
import { useModalContext } from '@/contexts/Modal/modal.context';

export default function SurveyBody({ SurveyJson }) {
	const { openModal, closeModal } = useModalContext();
	const { surveyState } = useSurveyContext();
	async function HandleFakePost() {
		sendFakePost(surveyState).then((res) => {
			console.log(res);
		});
	}
	async function HandleError() {
		sendError().then((res) => {
			console.log(res);
			openModal({ title: 'Erro', displayItem: `${res.error}` });
		});
	}
	async function HandleSuccess() {
		sendSuccess().then((res) => {
			console.log(res);
		});
	}
	function renderSurvey() {
		var surveyComponents = [];
		SurveyJson.itens.forEach((surveyItem, index) => {
			switch (surveyItem.typeQuestion) {
				//Stars Question
				case 1:
					return surveyComponents.push(
						<div
							className='flex flex-col gap-3 my-8'
							key={index}
						>
							<StarRating key={index} data={surveyItem} />
						</div>
					);
				//Enumeration Question
				case 2:
					return surveyComponents.push(
						<div
							className='flex flex-col gap-3 my-8'
							key={index}
						>
							<EnumerationRating data={surveyItem} />
						</div>
					);
				//TextArea Question
				case 3:
					return surveyComponents.push(
						<div
							className='flex flex-col gap-3 my-8'
							key={index}
						>
							<TextArea data={surveyItem} />
						</div>
					);
				//Select Question
				case 4:
					return surveyComponents.push(
						<div
							className='flex flex-col gap-3 my-8'
							key={index}
						>
							<SelectInput data={surveyItem} />
						</div>
					);
				//Multiple choice Baloon
				//Single Choise
				case 5:
					return surveyComponents.push(
						<div
							className='flex flex-col gap-3 my-8'
							key={index}
						>
							<SingleChoice data={surveyItem} />
						</div>
					);
				//Multiple choice List
				case 6:
					return surveyComponents.push(
						<div
							className='flex flex-col gap-3 my-8'
							key={index}
						>
							<MultipleChoiceList data={surveyItem} />
						</div>
					);
				default:
					return console.log(
						'Switch with bug, falling into default'
					);
			}
		});
		return surveyComponents;
	}
	return (
		<div className='w-full h-full p-4'>
			<div>{renderSurvey()}</div>
			<div>
				<DropdownActionButton
					HandleFakePost={HandleFakePost}
					HandleError={HandleError}
					HandleSuccess={HandleSuccess}
				/>
			</div>
		</div>
	);
}
