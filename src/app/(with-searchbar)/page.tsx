export default function Page() {
	return(
		<>
			<h2>지금 추천하는 도서</h2>
			<ul>
				<li className="py-4 border-b border-b-gray-200">
					<a href="" className="flex gap-[10px]">
						<img src="" alt="" />
						<div>
							<h3>title</h3>
							<p>text</p>
						</div>
					</a>
				</li>
			</ul>
			<h2>등록된 모든 도서</h2>
			<ul>
				<li className="py-4 border-b border-b-gray-200">
					<a href="" className="flex gap-[10px]">
						<img src="" alt="" />
						<div>
							<h3>title</h3>
							<p>text</p>
						</div>
					</a>
				</li>
			</ul>
		</>
	)
}