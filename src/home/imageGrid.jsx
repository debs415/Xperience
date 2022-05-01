import { Box, SimpleGrid, Text, Image, VStack } from "@chakra-ui/react";

const Feature = ({ title, icon }) => {
	return (
		<VStack>
			{icon}
			<Text>{title}</Text>
		</VStack>
	);
};

export default function SimpleThreeColumns() {
	return (
		<Box p={4}>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
				<Feature
					icon={
						<Image
							boxSize="130px"
							objectFit="contain"
							src="/safe.png"
							alt="Saftey"
						/>
					}
					title={"Contribute 100% anonymously"}
				/>
				<Feature
					icon={
						<Image
							boxSize="130px"
							objectFit="contain"
							src="/edit.png"
							alt="Edit"
						/>
					}
					title={"Manage your ratings"}
				/>
				<Feature
					icon={
						<Image
							boxSize="130px"
							objectFit="contain"
							src="/like.png"
							alt="Like"
						/>
					}
					title={"Upvote and downvote reviews"}
				/>
			</SimpleGrid>
		</Box>
	);
}
