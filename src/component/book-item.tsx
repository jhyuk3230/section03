import { BookData } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function BookItem({id, title, subTitle, author, publisher, coverImgUrl}: BookData) {
	return(
		<>
			<li className="py-4 border-b border-b-gray-200 list-none" key={id}>
				<Link href={`/book/${id}`} className="flex items-center gap-[10px]">
					<Image src={coverImgUrl} alt={title} width={100} height={100} />
					<div className="flex flex-col">
						<h3 className="text-[18px] font-bold text-black">{title}</h3>
						<p className="mb-[10px] text-[14px] font-medium text-gray-600">{subTitle}</p>
						<div className="text-[12px] font-medium text-gray-400">
							{author} | {publisher}
						</div>
					</div>
				</Link>
			</li>
		</>
	)
}