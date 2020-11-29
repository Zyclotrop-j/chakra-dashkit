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

const timelineLine = {
    _before: {
        content: '""',
        position: "absolute",
        top: "1rem",
        left: "2rem",
        height: "100%",
        borderLeft: "1px solid #e3ebf6",
    }
};

export const Timeline = () => (<GridItem borderRadius="md" p={2} colSpan={5} bg="white">
    <VStack 
        spacing={4}
        align="stretch"
        p={3}
    >
        <Flex alignItems="center" pb={2} borderBottom="solid 1px" borderColor="gray.200">
            <Box p={2}><Heading size="sm">Recent Activity</Heading></Box>
            <Spacer />
            <Link href="https://chakra-ui.com" pr="1" color="blue.200">View All</Link>
        </Flex>
        <VStack
            spacing={4}
            align="stretch"
        >
            <Grid px={2} templateColumns="auto 1fr auto" gap={6} position="relative" alignItems="top" sx={timelineLine}>
                <Avatar size="md" name="Kent Dodds" src="https://bit.ly/kent-c-dodds">
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Box>
                    <VStack
                        spacing={1}
                        align="stretch"
                    >
                        <Heading fontSize="md" lineHeight="1"><Link href="#">Dianna Smiley</Link></Heading>
                        <Text fontSize="xs" color="gray.500">Uploaded the files "Launchday Logo" and "New Design".</Text>
                        <Text fontSize="xs" color="gray.500">2m ago</Text>
                    </VStack>
                </Box>
            </Grid>
            <Grid px={2} templateColumns="auto 1fr auto" gap={6} position="relative" alignItems="top" sx={timelineLine}>
                <Avatar size="md"  name="Segun Adebayo" src="https://bit.ly/sage-adebayo">
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Box>
                <VStack
                        spacing={1}
                        align="stretch"
                    >
                        <Heading fontSize="md" lineHeight="1"><Link href="#">Ab Hadley</Link></Heading>
                        <Text fontSize="xs" color="gray.500">Shared the "Why Dashkit?" post with 124 subscribers.</Text>
                        <Text fontSize="xs" color="gray.500">1h ago</Text>
                    </VStack>
                </Box>
            </Grid>
            <Grid px={2} templateColumns="auto 1fr auto" gap={6} position="relative" alignItems="top">
                <Avatar size="md"  name="Ryan Florence" src="https://bit.ly/ryan-florence">
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Box>
                    <VStack
                        spacing={1}
                        align="stretch"
                    >
                        <Heading fontSize="md" lineHeight="1"><Link href="#">Adolfo Hess</Link></Heading>
                        <Text fontSize="xs" color="gray.500">Exported sales data from Launchday's subscriber data.</Text>
                        <Text fontSize="xs" color="gray.500">3h ago</Text>
                    </VStack>
                </Box>
            </Grid>
        </VStack>

    </VStack>
</GridItem>);