import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react'
import Logo from './Logo';
import './styles/global.css';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className="bg-gray-900 h-screen w-screen flex flex-col items-center justify-center">
      <header className="flex flex-col items-center justify-center">
        <Logo />

        <Heading>Ignite Lab</Heading>

        <Text size="md" className="text-gray-400">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size="sm" className="font-semibold">
            Endereço de e-mail:
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input placeholder="Type your e-mail adress" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3 mt-3">
          <Text size="sm" className="text-gray-100 font-semibold">
            Sua senha:
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input placeholder="**********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2 mt-3">
          <Checkbox />
          <Text size="sm" className="text-gray-400">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type='submit' className='mt-4'> Entrar na plataforma </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" className="text-gray-400">
          Esqueceu sua senha?
        </Text>
        <Text size="sm" className="text-gray-400">          
          Não possui conta? Crie uma agora!
        </Text>
      </footer>
    </div>
  );
}


