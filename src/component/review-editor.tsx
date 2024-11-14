import { createReviewAction } from "@/actions/create-review.action";

export default function ReviewEditor({bookId}: {bookId: string}){
	return (
		<div>
			<form className="flex flex-col gap-1" action={createReviewAction}>
				<input name="bookId" value={bookId} hidden readOnly />
				<input className="w-[100px] p-1 border border-gray-400" name="author" type="text" placeholder="유저"  required/>
				<textarea className="w-full h-[80px] p-1 border border-gray-400 resize-none" name="content" placeholder="내용"  required/>
				<div className="text-right">
					<button className="w-full p-3 rounded-[5px] bg-sky-500 text-white hover:bg-sky-600" type="submit">등록</button>
				</div>
			</form>
		</div>
	);
}