import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "acoustic",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/Acoustic-guitar.jpg",
		description:
			"literature in the form of prose, especially novels, that describes imaginary events and people",
	},
	{
		_id: uuid(),
		categoryName: "electric",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/electric-guitar.jpg",
		description:
			"Non-fiction is writing that gives information or describes real events, rather than telling a story.",
	},
	{
		_id: uuid(),
		categoryName: "hollowbody",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/hollowbody-guitar.jpg",
		description:
			"Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
	},

	{
		_id: uuid(),
		categoryName: "classic",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/classic.jpg",
		description:
			"Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
	},
];
