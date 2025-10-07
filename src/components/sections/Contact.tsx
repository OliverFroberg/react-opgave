import Container from "@/components/Container";
import Card from "@/components/Card";

export default function Contact() {
	return (
		<Container title={"Contact"}>
			<Card title="Email Us" description="support@example.com - We respond within 24 hours" />
			<Card title="Call Us" description="+1 (555) 123-4567 - Available Mon-Fri 9AM-5PM EST" />
			<Card title="Visit Us" description="123 Main Street, Tech City, TC 12345" />
			<Card title="Social Media" description="Follow us on Twitter, LinkedIn, and Instagram" />
		</Container>
	)
}