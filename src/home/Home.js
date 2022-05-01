import React from "react";
import {
	Text,
	HStack,
	Heading,
	Box,
	Image,
	render,
	Flex,
	Container,
	VStack,
	Stack,
	Button,
} from "@chakra-ui/react";
import SearchBar from "./searchBar";
import ImageGrid from "./imageGrid.jsx";
function StackEx() {
	return (
		<VStack spacing={20} marginTop={120}>
			<Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
				<Heading fontSize={"3xl"}>
					Explore part-time job reviews from university students
				</Heading>
				<Text color={"gray.600"} fontSize={"xl"}>
					Learn about companies and role reviews
				</Text>

				<SearchBar />
				<Button> Share your experience!</Button>
			</Stack>
			<ImageGrid />
		</VStack>
	);
}

export default StackEx;
