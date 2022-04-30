import { ReactNode } from "react";
import {
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	IconButton,
	HStack,
	Spacer,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = ["About", "Contact Us", "Login", "Sign Up"];

const NavLink = ({ children }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		href={"#"}
	>
		{children}
	</Link>
);
export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box
				bg={useColorModeValue("gray.100", "gray.900")}
				// color={useColorModeValue("yellow", "gray.800")}
				px={4}
			>
				<HStack spacing={8}>
					<Flex
						w="100%"
						h={16}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						{/* <Box> */}

						<Image
							boxSize="150px"
							objectFit="contain"
							src="/xperience.png"
							alt="Xperience logo"
						/>
						{/* </Box> */}
						<Spacer></Spacer>

						<HStack
							as={"nav"}
							spacing={8}
							display={{ base: "none", md: "flex" }}
						>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
							{/* show loginmodal when clicked  */}
							{/* <Button
								colorScheme="yellow"
								variant="contain"

								// border="2px"
								// borderRadius=
								// borderColor="black"
							>
								Login
							</Button> */}
						</HStack>

						<Flex alignItems={"center"}>
							<Stack direction={"row"} marginLeft={2}>
								<Button onClick={toggleColorMode}>
									{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
								</Button>
							</Stack>
						</Flex>
					</Flex>
				</HStack>
			</Box>
		</>
	);
}
