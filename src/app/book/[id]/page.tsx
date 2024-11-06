import ClientComponent from "@/component/client-component"

export default async function Book({params}: {params:Promise<{id: string}>}) {
	const {id} = await params
	return <div>
			books {id}
			<ClientComponent>
				<></>
			</ClientComponent>
		</div>
}