import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react' // tudo que tem provider se trata de contexto
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return ( // ChakraProvider foi colocado em volta de todo o return para que todo conteúdo tenha acesso aos themesi
    <ChakraProvider theme={theme}> 
         <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
