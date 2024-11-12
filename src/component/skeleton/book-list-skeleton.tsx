function BookItemSkeleton(){
	return (
		<li className="py-4 border-b border-b-gray-200 list-none">
			<div className="flex items-center gap-[10px]">
				<div className="w-[100px] h-[120px] flex-shrink-0 bg-gray-300"></div>
				<div className="w-full flex flex-col">
					<h3 className="w-full h-[27px] text-[18px] bg-gray-300 font-bold text-black"></h3>
					<p className="w-full h-[21px] mb-[10px] bg-gray-300 text-[14px] font-medium text-gray-600"></p>
					<div className="text-[12px] font-medium text-gray-400 flex justify-start items-center gap-1">
						 <span className="w-[80px] h-[18px] inline-block bg-gray-300"></span> | <span className="w-[80px] h-[18px] inline-block bg-gray-300"></span>
					</div>
				</div>
			</div>
		</li>
	);
}


export default function BookListSkeleton({count}: {count: number}){
	return (
		<ul>
			{new Array(count).fill(0).map((_,idx)=><BookItemSkeleton key={`book-item-skeleton-${idx}`} />)}
		</ul>
	);
}