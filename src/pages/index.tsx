import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

// Flex por padrão é uma div -> as="" serve para alterar esse padrão
// Stack seria basicamente um empilhamento, se coloca em volta do conteúdo empilhado e pode definir um espaçamento padrão (spacing)

export default function SignIn() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          size="lg"   
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}