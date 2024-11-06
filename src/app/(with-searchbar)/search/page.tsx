import ClientComponent from "@/component/client-component";

export default async function Search({ searchParams }: {searchParams: Promise<{q: string}>}) {
	const { q } = await searchParams;
	console.log(searchParams);
	return (
		<div>
			search page {q}
			<ClientComponent>
				<></>
			</ClientComponent>
		</div>
	)
}