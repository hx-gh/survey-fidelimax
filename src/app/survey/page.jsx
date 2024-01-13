import styles from './survey.module.css';
import SurveyBody from '@/components/survey/SurveyBody';
import Modal from '@/contexts/Modal';
import { ModalProvider } from '@/contexts/Modal/modal.context';
import { SurveyProvider } from '@/contexts/Survey/survey.context';

export default async function Survey({ props }) {
	const surveyJson = await getSurvey();
	return (
		<div className={`relative w-full`}>
			<div className='h-full w-10/12 md:w-5/12 mx-auto flex flex-col justify-center gap-4'>
				<div className='w-full'>
					<h1 className='text-white font-semibold text-5xl'>
						Pesquisa de Satisfação
					</h1>
					<span>{props}</span>
				</div>
				<div
					className={`bg-white w-full rounded-md gap-8 px-5 py-2`}
				>
					<SurveyProvider initialJson={surveyJson}>
						<SurveyBody SurveyJson={surveyJson} />
					</SurveyProvider>
				</div>
			</div>
		</div>
	);
}
async function getSurvey() {
	const res = await fetch(
		'https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json',
		{ method: 'GET' }
	);
	const surveyJson = await res.json();
	surveyJson.itens.forEach((item, i) => {
		item.questionId = i;
	});
	console.log(surveyJson);
	return surveyJson;
}
