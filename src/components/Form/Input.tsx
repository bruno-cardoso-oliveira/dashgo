import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

// ...rest pega o restante das propriedades que o campo input pode receber, propriedades que foram fornecidas pelo extends ChakraInputProps
// FormControl -> Funciona como se fosse uma div, assim para retirar o espaçamento definido pelo spacing do Stack entre o Label e o Input 

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input ({ name, label, ...rest }: InputProps) {
    return (
        <FormControl> 
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            
            <ChakraInput 
                name={name} 
                id={name} 
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgcolor: "gray.900"
                }}
                size="lg"
                {...rest}
            />
        </FormControl> 
    );
}