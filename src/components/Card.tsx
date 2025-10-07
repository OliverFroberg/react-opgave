export type CardProps = {
	title: string;
	description: string;
}

export default function Card({title, description}: CardProps) {
	return (
		<div className="shadow-sm border-1 border-gray-300 p-4 rounded-xl">
			<h2 className="text-2xl font-bold">{title}</h2>
			<p className="text-gray-600">{description}</p>
		</div>
	)
}