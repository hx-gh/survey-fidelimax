'use client';
export default function validateJson(jsonData) {
	const validateItem = (item) => {
		if (
			item.mandatory &&
			(item.answerValue === undefined ||
				item.answerValue === null ||
				item.answerValue === '')
		) {
			return false;
		}

		return true;
	};

	if (!jsonData || !jsonData.itens || jsonData.itens.length === 0) {
		return false;
	}

	for (const item of jsonData.itens) {
		if (!validateItem(item)) {
			return false;
		}
	}

	return true;
}
