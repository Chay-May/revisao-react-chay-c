import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
  } from '@chakra-ui/react';

  import login from "../assets/login.jpg"


  const LoginForm = ({form, navigate, onChange, login}) => {
    return ( 
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={login}
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Entre na sua conta</Heading>
            <FormControl id="email">
              <FormLabel>E-mail</FormLabel>
              <Input
              type="email" 
              name="email" 
              onChange={onChange}
              value={form.email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input 
              type="password" 
              name="password"
              onChange={onChange} 
              value={form.senha}
              />
            </FormControl>
            <Stack spacing={6}>
              <Button bg={'#a7c686'} color={"#3b331f"} variant={'solid'} 
              onClick={()=>login(login, navigate)}
              >
                Entrar
              </Button>
              <Button bg={'#a7c686'} color={"#3b331f"} variant={'solid'}
              >
                Cadastrar usuário
              </Button>
            </Stack>
          </Stack>
        </Flex>
        
      </Stack>
    );
  }

  export default LoginForm;