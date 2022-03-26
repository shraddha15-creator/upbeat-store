import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: "Acoustic Guitar",
		brand: "Yamaha",
		OriginalPrice: "5999",
		offerPrice: "4999",
		categoryName: "acoustic",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/ac-one.jpg",
		fastDelivery: true,
		inStock: true,
		rating: "4",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: true,
	},
	{
		_id: uuid(),
		title: "Classic Guitar",
		brand: "Ovation",
		OriginalPrice: "4999",
		offerPrice: "3999",
		categoryName: "classis",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/classic.jpg",
		fastDelivery: true,
		inStock: true,
		rating: "4",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: false,
	},
	{
		_id: uuid(),
		title: "Electric Guitar",
		brand: "Guild",
		OriginalPrice: "10999",
		offerPrice: "9999",
		categoryName: "electric",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/el-four.jpg",
		fastDelivery: true,
		inStock: false,
		rating: "4.1",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: true,
	},
	{
		_id: uuid(),
		title: "Hollowbody Guitar",
		brand: "Gibson",
		OriginalPrice: "13999",
		offerPrice: "12999",
		categoryName: "hollowbody",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/guitar-two.jpg",
		fastDelivery: true,
		inStock: true,
		rating: "4.8",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: true,
	},
	{
		_id: uuid(),
		title: "Classis Guitar",
		brand: "Washburn",
		OriginalPrice: "9999",
		offerPrice: "8099",
		categoryName: "classic",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/classic.jpg",
		fastDelivery: false,
		inStock: true,
		rating: "2.5",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: false,
	},
	{
		_id: uuid(),
		title: "Acoustic Guitar",
		brand: "Yamaha",
		OriginalPrice: "8999",
		offerPrice: "6099",
		categoryName: "acoustic",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/Acoustic-guitar.jpg",
		fastDelivery: false,
		inStock: false,
		rating: "3.6",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: false,
	},
	{
		_id: uuid(),
		title: "Acoustic Guitar",
		brand: "Ovation",
		OriginalPrice: "6999",
		offerPrice: "4599",
		categoryName: "acoustic",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/guitar-one.jpg",
		fastDelivery: true,
		inStock: true,
		rating: "4.2",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: false,
	},
	{
		_id: uuid(),
		title: "Hollowbody Guitar",
		brand: "Seagull",
		OriginalPrice: "11999",
		offerPrice: "9999",
		categoryName: "hollowbody",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/guitar-two.jpg",
		fastDelivery: false,
		inStock: true,
		rating: "4.5",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: true,
	},
	{
		_id: uuid(),
		title: "Classic Guitar",
		brand: "Guild",
		OriginalPrice: "15999",
		offerPrice: "10999",
		categoryName: "classic",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/classic.jpg",
		fastDelivery: true,
		inStock: true,
		rating: "3",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: false,
	},
	{
		_id: uuid(),
		title: "Electric Guitar",
		brand: "Gibson",
		OriginalPrice: "7999",
		offerPrice: "6999",
		categoryName: "electric",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/el-four.jpg",
		fastDelivery: false,
		inStock: true,
		rating: "4",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: false,
	},
	{
		_id: uuid(),
		title: "Electric Guitar",
		brand: "Yamaha",
		OriginalPrice: "18999",
		offerPrice: "16999",
		categoryName: "electric",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/el-two.jpg",
		fastDelivery: true,
		inStock: false,
		rating: "4.4",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: true,
	},
	{
		_id: uuid(),
		title: "Electric Guitar",
		brand: "Gibson",
		OriginalPrice: "14999",
		offerPrice: "12999",
		categoryName: "electric",
		img: "https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/el-thr.jpg",
		fastDelivery: true,
		inStock: false,
		rating: "4.3",
		productDescription:
			"features a traditional, solid-wood, double-cutaway design in an Orange finish, and a maple neck with jatoba tonewood fretboard — all in an easy-playing size. It’s the perfect first guitar for the beginner, or for the more experienced player who can appreciate its feature-rich appointments.",
		isTopProduct: true,
	},
];
