import { ReviewData } from "@/types";
import ReviewItemDeleteBtn from "./review-item-delete-btn";

// export default function ReviewItem({ id, content, author, createdAt, bookId }: ReviewData){
export default function ReviewItem({ id, content, author, createdAt, bookId }: ReviewData){
	return (
		<li className="py-[10px] border-b border-b-gray-300">
			<h4 className="text-[14px] font-bold text-black">{author}</h4>
			<div className="my-[5px] text-[14px] font-normal text-black">{content}</div>
			<div className="flex justify-end items-center gap-[10px]">
				<p className="text-[12px] font-bold text-gray-500">{new Date(createdAt).toLocaleString()}</p>
				<ReviewItemDeleteBtn reviewId={id} bookId={bookId} />
			</div>
		</li>
	)
}