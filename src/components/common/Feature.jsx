import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import { Link } from "react-router-dom";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Link className="hover:text-red-400" to={href}>
          Learn more
        </Link>
      </Stack>
    </Box>
  );
};

export default function Feature() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Slogan
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          "Level up your React skills while helping beginners: Small projects,
          big impact!"
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Share"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={"Share your knowledge and expertise with beginners."}
            href={"#"}
          />
          <Card
            heading={"Small Help"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Help beginners learn React by providing them with small projects to work on."
            }
            href={"#"}
          />
          <Card
            heading={"Improve"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Improve your own React skills by building projects for beginners."
            }
            href={"#"}
          />
          <Card
            heading={"Inspire others "}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Inspire others to get involved in the React community and give back to beginners."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
