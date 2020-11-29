import {
    Flex,
    Box,
    Spacer,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Grid,
    GridItem,
    Tag,
    Wrap,
    WrapItem,
    Text,
    Square,
    VStack,
    StackDivider,
    Heading,
    Switch,
    FormControl,
    FormLabel,
    Tabs,
    TabList,
    Tab,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    VisuallyHidden,
    IconButton,
    Avatar,
    AvatarBadge,
    Checkbox,
    Input,
    Divider
} from '@chakra-ui/react';
import { SampleTable, SampleMenu } from "./tables";

export const Table1 = ({ demo3 }) => (<GridItem borderRadius="md" p={2} colSpan={4} bg="white">
<VStack 
    spacing={4}
    align="stretch"
    p={3}
>
    <Flex alignItems="center" pb={2} borderBottom="solid 1px" borderColor="gray.200">
        <Box p={2}><Heading size="sm">Projects</Heading></Box>
        <Spacer />
        <Link href="https://chakra-ui.com" pr="1" color="blue.200">View All</Link>
    </Flex>
    <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
    >
        <Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
            <Box>
                <Link href="https://chakra-ui.com" w="4rem">
                    <Image
                        borderRadius="md"
                        objectFit="fit"
                        w="4rem"
                        src="https://source.unsplash.com/random/800x600"
                        alt="Dan Abramov"
                    />
                </Link>
            </Box>
            <Box>
                <Heading fontSize="md" lineHeight="1"><Link href="#">Homepage Redesign</Link></Heading>
                <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
            </Box>
            <Box>
                <SampleMenu />
            </Box>
        </Grid>
        <Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
            <Box>
                <Link href="https://chakra-ui.com" w="4rem">
                    <Image
                        borderRadius="md"
                        objectFit="fit"
                        w="4rem"
                        src="https://source.unsplash.com/random/800x600"
                        alt="Dan Abramov"
                    />
                </Link>
            </Box>
            <Box>
                <Heading fontSize="md" lineHeight="1"><Link href="#">Travels & Time</Link></Heading>
                <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
            </Box>
            <Box>
                <SampleMenu />
            </Box>
        </Grid>
        <Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
            <Box>
                <Link href="https://chakra-ui.com" w="4rem">
                    <Image
                        borderRadius="md"
                        objectFit="fit"
                        w="4rem"
                        src="https://source.unsplash.com/random/800x600"
                        alt="Dan Abramov"
                    />
                </Link>
            </Box>
            <Box>
            <Heading fontSize="md" lineHeight="1"><Link href="#">Safari Exploration</Link></Heading>
                <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
            </Box>
            <Box>
                <SampleMenu />
            </Box>
        </Grid>
        {demo3 === 2 ? [
            (<Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
                <Box>
                    <Link href="https://chakra-ui.com" w="4rem">
                        <Image
                            borderRadius="md"
                            objectFit="fit"
                            w="4rem"
                            src="https://source.unsplash.com/random/800x600"
                            alt="Dan Abramov"
                        />
                    </Link>
                </Box>
                <Box>
                <Heading fontSize="md" lineHeight="1"><Link href="#">Safari Exploration</Link></Heading>
                    <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
                </Box>
                <Box>
                    <SampleMenu />
                </Box>
            </Grid>),
            (<Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
                <Box>
                    <Link href="https://chakra-ui.com" w="4rem">
                        <Image
                            borderRadius="md"
                            objectFit="fit"
                            w="4rem"
                            src="https://source.unsplash.com/random/800x600"
                            alt="Dan Abramov"
                        />
                    </Link>
                </Box>
                <Box>
                <Heading fontSize="md" lineHeight="1"><Link href="#">Safari Exploration</Link></Heading>
                    <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
                </Box>
                <Box>
                    <SampleMenu />
                </Box>
            </Grid>),
            (<Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
                <Box>
                    <Link href="https://chakra-ui.com" w="4rem">
                        <Image
                            borderRadius="md"
                            objectFit="fit"
                            w="4rem"
                            src="https://source.unsplash.com/random/800x600"
                            alt="Dan Abramov"
                        />
                    </Link>
                </Box>
                <Box>
                <Heading fontSize="md" lineHeight="1"><Link href="#">Safari Exploration</Link></Heading>
                    <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
                </Box>
                <Box>
                    <SampleMenu />
                </Box>
            </Grid>),
        ] : []}
    </VStack>
</VStack>
</GridItem>);