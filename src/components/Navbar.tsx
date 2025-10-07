export default function Navbar() {
	const Bookmark = ({id, name}: {id: string, name: string}) => {
		return (
			<li><a href={`#${id}`} className={"text-blue-500 hover:text-blue-700"}>{name}</a></li>
		)
	}

	return (
		<nav>
			<ul className={"flex gap-4 justify-center"}>
				<Bookmark id={"Home"} name={"Home"}/>
				<Bookmark id={"About"} name={"About"}/>
				<Bookmark id={"Contact"} name={"Contact"}/>
				<Bookmark id={"News"} name={"News"}/>
			</ul>
		</nav>
	)
}