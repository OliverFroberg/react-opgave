import Container from "@/components/Container";
import Card from "@/components/Card";

export default function News() {
	return (
		<Container title={"News"}>
			<Card title="Product Launch" description="Introducing our revolutionary AI-powered analytics platform" />
			<Card title="Partnership Announcement" description="Strategic collaboration with TechCorp to expand services" />
			<Card title="Industry Recognition" description="Named Best Tech Startup by Innovation Magazine 2024" />
			<Card title="New Office Opening" description="Expanding operations with new headquarters in Silicon Valley" />
			<Card title="Customer Milestone" description="Celebrating 1 million active users worldwide" />
			<Card title="Platform Update" description="Major update brings enhanced security and 50% faster performance" />
			<Card title="Community Event" description="Annual tech conference scheduled for November 15-17" />
			<Card title="Research Breakthrough" description="Our team publishes groundbreaking study on machine learning" />
		</Container>
	)
}