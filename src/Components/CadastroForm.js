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

  import logo from "../assets/cadastroform.jpg"


  const CadastroForm = ({onChange, form, cadastro, navigate}) => {
    return ( 
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Crie uma nova conta</Heading>
            <FormControl id="name">
              <FormLabel>Nome</FormLabel>
              <Input type="text" name="name" onChange={onChange} 
              value={form.name}/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>E-mail</FormLabel>
              <Input type="email" name="email" onChange={onChange} 
              value={form.email}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" name="password" onChange={onChange} value={form.senha}/>
            </FormControl>
            <Stack spacing={6}>
              <Button bg={'#a7c686'} color={"#3b331f"} variant={'solid'} onClick={()=>cadastro(form, navigate)}>
                Criar
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={logo}
          />
        </Flex>
      </Stack>
    );
  }

  export default CadastroForm;