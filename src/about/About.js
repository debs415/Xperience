import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Success() {
	return (
		<Box textAlign="center" py={10} px={6}>
			<Heading as="h2" size="xl" mt={6} mb={2}>
				We've got you!
			</Heading>
			<Text color={"gray.500"}>
				This platform enables the student to scout for part time jobs that fit
				their requirements. All a student has to do is search for the job he or
				she wishes to join, our platform will then present them with reviews
				from ex-employees that worked in that company in recent years. The
				reviews would contain some standardized rubrics like the ones mentioned
				above and the reviewers own personal experience (if any) outside of the
				said rubrics. The student can then choose whether or not they should
				take that job or search for some other work. Since all of this happens
				instantaneously this saves the student a lot of time and optimizes the
				scouting process for them.
			</Text>
		</Box>
	);
}
