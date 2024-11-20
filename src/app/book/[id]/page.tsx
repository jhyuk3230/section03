import { BookData, BookProps, ReviewData } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReviewItem from "@/component/review-item";
import ReviewEditor from "@/component/review-editor";

// 다이나믹페이지일경우 404로 이동
// export const dynamicParams = false;

// 강제로 스태틱페이지로 변경
// ※id지정 안한페이지로 이동시 해당 페이지는 다이나믹페이지
export async function generateStaticParams(){
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {cache: "force-cache"});

	if (!response.ok) return []

	const books: BookData[] = await response.json();

	return books.map((book) => ({id: book.id.toString(),}))
}

async function BookDetail({bookId}:{bookId: string}) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`, {cache: "force-cache"});
	if (!response.ok) {
		if (response.status === 404) notFound();
		return <div>에러</div>
	}
	const book: BookData = await response.json();

	return (
		<div className="flex flex-col gap-[10px]">
			<div className="h-[600px] flex justify-center items-center bg-no-repeat bg-cover relative before:content-[''] before:w-full before:h-full before:bg-[rgba(0,0,0,.5)] before:absolute before:left-0 before:top-0" style={{backgroundImage: `url('${book.coverImgUrl}')`}}>
				<div className="w-[300px] relative [&_img]:!h-auto">
					<Image src={book.coverImgUrl} alt={book.title} fill className="!relative" priority />
				</div>
			</div>
			<h3 className="text-[20px] font-bold text-black">{book.title}</h3>
			<p className="text-[18px] font-medium text-black">{book.subTitle}</p>
			<div className="text-[12px] font-normal text-gray-500">{book.author} | {book.publisher}</div>
			<div className="p-4 bg-gray-100 text-[16px] font-normal text-black whitespace-pre-line">{book.description}</div>
		</div>
	)
}

async function ReviewList({bookId}: {bookId: string}){
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`, {next: {tags: [`review-${bookId}`]}});

	if (!response.ok) throw new Error(`Review fetch failed : ${response.statusText}`);

	const reviews: ReviewData[] = await response.json();

	return (
		<ul className="border-t border-t-black">
			{reviews.map((review) => (<ReviewItem key={`review-item-${review.id}`} {...review} />))}
		</ul>
	)
}

export default async function Book({ params }: BookProps) {
	const resolvedParams = await params;
  return (
    <div className="flex flex-col gap-[50px]">
      <BookDetail bookId={resolvedParams.id} />
      <ReviewEditor bookId={resolvedParams.id} />
      <ReviewList bookId={resolvedParams.id} />
    </div>
  );
}

// export default async function Book(detailParams: { params: {id: string}}) {
// 	const params = await detailParams.params;
// 	return (
// 		<div className="flex flex-col gap-[50px]">
// 			<BookDetail bookId={params.id} />
// 			<ReviewEditor />
// 		</div>
// 	)
// }