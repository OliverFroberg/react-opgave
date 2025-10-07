import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import News from "@/components/sections/News";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";

export default function Page() {
	return (
		<div className={"flex flex-col gap-50 p-10"}>
			<Navbar/>

			<Home/>
			<About/>
			<Contact/>
			<News/>
		</div>
	);
}