import Container from "@/components/Container";
import Card from "@/components/Card";

export default function Home() {
	return (
		<Container title={"Home"}>
			<Card title="Welcome" description="Discover innovative solutions tailored to your needs" />
			<Card title="Get Started" description="Join thousands of satisfied customers worldwide" />
			<Card title="Latest Updates" description="Check out our newest features and improvements" />
		</Container>
	)
}