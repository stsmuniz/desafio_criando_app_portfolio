# Portfolio App - Bootcamp DIO

Este é um aplicativo React Native desenvolvido como parte do desafio do bootcamp da Digital Innovation One (DIO). O app exibe um perfil profissional com informações de contato e habilidades.

## Funcionalidades

- Tela Principal: Apresenta foto, nome e links para conexão profissional
- Tela de Habilidades: Exibe uma árvore de habilidades com níveis de proficiência
- Navegação: Interface de abas para alternar entre as telas

## Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- React Native Screens

## Pré-requisitos

Antes de executar o projeto, você precisa ter instalado:

- Node.js (versão 16 ou superior)
- npm, yarn ou pnpm
- Expo CLI (opcional)

## Como Executar

### Clone o repositório:

```bash
git clone <url-do-repositorio>
cd desafio_rn_portfolio
```

### Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### Execute o projeto:

```bash
npm start
# ou
yarn start
# ou
pnpm start
```

### Abra no dispositivo/emulador:

- Para Android: npm run android ou pressione 'a' no terminal do Expo
- Para iOS: npm run ios ou pressione 'i' no terminal do Expo (requer macOS)
- Para web: npm run web ou pressione 'w' no terminal do Expo

## Estrutura do Projeto

```
assets/          # Recursos estáticos (imagens, fontes, etc.)
src/
├── components/  # Componentes reutilizáveis
│   ├── LinkButton/
│   ├── ProfilePicture/
│   ├── ProfileSection/
│   └── RatingComponent/
├── routes/      # Configuração de navegação
└── screens/     # Telas do aplicativo
    ├── Index/   # Tela principal
    └── Skill/   # Tela de habilidades
App.tsx          # Componente principal
package.json     # Dependências do projeto
```

## Licença

Este projeto foi desenvolvido como parte do bootcamp da DIO.
