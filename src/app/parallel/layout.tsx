import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({children, sidebar, feed}: {children: ReactNode; sidebar: ReactNode; feed:ReactNode}) {
	return (
		<div>
			<ul>
				<li><Link href={`/parallel`}>parallel</Link></li>
				<li><Link href={`/parallel/setting`}>setting</Link></li>
			</ul>
			{sidebar}{feed}{children}
		</div>
	)
}