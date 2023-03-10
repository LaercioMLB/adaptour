import { Box, HStack, Link, List, ListItem } from "@chakra-ui/react";

export function MenuList() {
  const listItem = [
    {
      name: "Quem somos",
      url: "#",
    },
    {
      name: "Contato",
      url: "#",
    },
    {
      name: "Suporte",
      url: "#",
    },
  ];
  return (
    <List>
      <HStack spacing={5}>
        {listItem.map((list) => (
          <Box key={list.name}>
            <Link
              _hover={{
                color: "orange.500",
                transition: "0.2s",
                textDecoration: "underline",
              }}
              href={list.url}
            >
              <ListItem>{list.name}</ListItem>
            </Link>
          </Box>
        ))}
      </HStack>
    </List>
  );
}
