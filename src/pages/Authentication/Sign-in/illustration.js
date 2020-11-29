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
    FormHelperText,
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
    Divider,
    Container,
    Center,
    InputGroup,
    InputRightElement,
    SimpleGrid
  } from '@chakra-ui/react';
  import { Basic } from "./basic"; 

export const Illustration = () => <SimpleGrid columns={12} spacing={10}>
    <GridItem colSpan={12} display={["unset", "unset", "none"]} maxH="80vh">
        <Image maxH="80vh" src="https://source.unsplash.com/random/600x600?fade" objectFit="cover" alt="Sign-In" w="full" />
    </GridItem>
    <GridItem display={["none", "none", "unset"]} colSpan={[null, null,2]} my={5} />
    <GridItem colSpan={[12, 12, 4]} my={5} >
        <Center h="100vh"><Basic /></Center>
    </GridItem>
    <GridItem colSpan={[null, null, 4]} display={["none", "none", "unset"]}>
        <Center h="100%"><Image src="https://source.unsplash.com/random/550x400?fade" alt="Sign-In" w="full" /></Center>
    </GridItem>
    <GridItem display={["none", "none", "unset"]} colSpan={[null, null, 2]} my={5} />
</SimpleGrid>;