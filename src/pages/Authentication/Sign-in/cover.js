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

export const Cover = () => <SimpleGrid columns={12} spacing={10}>
    <GridItem colSpan={[12, 7, 6, 4]}>
        <Basic />
    </GridItem>
    <GridItem colSpan={[12, 5, 6, 8]}>
        <Image src="https://source.unsplash.com/random/1800x900" alt="Sign-In" w="full" />
    </GridItem>
</SimpleGrid>;