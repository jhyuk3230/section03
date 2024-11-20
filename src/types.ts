export interface BookData {
	id: number;
	title: string;
	subTitle: string;
	author: string;
	publisher: string;
	description: string;
	coverImgUrl: string;
}

export interface ReviewData {
	id: number;
	content: string;
	author: string;
	createdAt: string;
	bookId: number
}

export interface InterceptProps {
  params: Promise<{ id: string }>;
}

export interface BookProps {
  params: {id: string};
};