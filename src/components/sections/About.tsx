import Container from "@/components/Container";
import Card from "@/components/Card";

export default function About() {
	return (
		<Container title={"About"}>
			<Card title="Our Mission" description="Empowering communities through innovative technology solutions since 2015" />
			<Card title="Our Team" description="A diverse group of 50+ talented professionals from around the globe" />
			<Card title="Core Values" description="Integrity, innovation, and customer satisfaction drive everything we do" />
			<Card title="Global Reach" description="Serving clients in over 30 countries across 5 continents" />
			<Card title="Awards" description="Recognized as Industry Leader of the Year for three consecutive years" />
			<Card title="Sustainability" description="Committed to carbon-neutral operations by 2026" />
		</Container>
	)
}