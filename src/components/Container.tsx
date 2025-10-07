import {ReactNode} from "react";

export type ContainerProps = {
	title: string,
	children: ReactNode
}

export default function Container({children, title}: ContainerProps) {
	return (
		<section className="flex flex-col gap-4 container mx-auto shadow-sm border-1 border-gray-300 p-2 rounded-xl">
			<h1 id={title} className={"text-3xl font-bold text-center"}>{title}</h1>
			<div className="grid grid-cols-4 gap-4" children={children}/>
		</section>
	);
}