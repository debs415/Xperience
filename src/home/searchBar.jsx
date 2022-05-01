import {
	Stack,
	InputLeftElement,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export default function SimpleThreeColumns() {
	return (
		<InputGroup>
			<InputLeftElement
				pointerEvents="none"
				children={<SearchIcon color="gray.300" />}
			/>
			<Input type="text" placeholder="Search for companies" />
		</InputGroup>
	);
}
