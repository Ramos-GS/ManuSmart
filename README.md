# Comando de criação

npx create-next-app@latest frontend


# Executar
npm run dev


# Icones
https://lucide.dev/
https://react-icons.github.io/react-icons/
npm install react-icons --save


# PRD - Product Requirements Document (Template)

# Introdução & objetivo

O Sistema de Gerenciamento de Manutenção é uma aplicação web destinada a otimizar o gerenciamento das atividades de manutenção em uma grande empresa industrial que fabrica peças automotivas. O objetivo principal é resolver problemas relacionados à falta de organização, comunicação ineficiente e perda de tempo e produtividade, criando uma solução que permita melhor controle e visibilidade sobre as operações de manutenção. Diferencia-se dos concorrentes ao proporcionar uma interface amigável e intuitiva, além de funcionalidades robustas de gerenciamento de máquinas, manutenções, estoque de peças e equipes, tudo isso de forma integrada e segura.

# Por que implementar isto?
A necessidade de inovação em um setor que enfrenta desafios constantes em eficiência e segurança. A visão é criar uma solução que não apenas resolva problemas imediatos, mas também posicione a empresa na vanguarda da transformação digital, elevando seus padrões operacionais e competitividade.

Implementar o Sistema de Gerenciamento de Manutenção é essencial para:

- *Motivação Pessoal e Visão:* Melhorar a eficiência operacional e garantir a segurança dos colaboradores, minimizando interrupções na produção.
- *Evidências de Sucesso Inicial:* Empresas que adotam sistemas automatizados de gerenciamento de manutenção relatam aumento de produtividade e redução de custos operacionais.
- *Oportunidades de Mercado:* A indústria automotiva é altamente competitiva e precisa de soluções que garantam a continuidade dos processos produtivos.
- *Oportunidades de Monetização:* A solução pode ser licenciada para outras empresas do setor, expandindo o alcance e gerando receitas adicionais.

---

# **Público alvo**

O público-alvo principal são empresas industriais, especialmente aquelas que operam na fabricação de peças automotivas, que buscam otimizar seus processos de manutenção. 

*[Priorizar Usuários:* Os usuários mais críticos para o sucesso inicial do produto são os gerentes de manutenção e as equipes técnicas, pois eles são diretamente responsáveis pela implementação e uso do sistema. ]

| Perfil de usuário | Descrição, necessidades e interesses. |
| --- | --- |
| Gerentes de manutenção | Necessitam de ferramentas para gerenciar, monitorar e relatar o status das manutenções de forma eficiente. |
| Técnicos de manutenção | Precisam de acesso rápido e fácil às informações sobre máquinas e manutenções, além de comunicar o progresso das tarefas. |
| Administradores do sistema | Requerem funcionalidades para configurar e gerenciar acessos e permissões de usuários no sistema. |

# Personas

1. *José Silva:* Gerente de manutenção com 10 anos de experiência, precisa de relatórios detalhados para tomar decisões informadas e otimizar os custos de manutenção.
2. *Maria Fernandes:* Técnica de manutenção, busca um sistema fácil de usar que permita registrar rapidamente os detalhes das tarefas e acessar o histórico das máquinas.
3. *Carlos Pereira:* Administrador de TI, responsável por garantir que o sistema seja seguro e funcione corretamente, além de gerenciar os acessos dos usuários.

---

# Requisitos Funcionais

1. *F1: Gerenciamento de Máquinas:* Sistema deve permitir o cadastro de máquinas com informações detalhadas, incluindo histórico de manutenção. *P1*
   - Critérios de aceitação: Usuário pode adicionar, visualizar e editar informações de máquinas; sistema gera relatórios de histórico.
2. *F2: Gerenciamento de Manutenções:* Cadastro e acompanhamento de solicitações de manutenção, com gestão de status e atribuição de equipes. *P1*
   - Critérios de aceitação: Usuário pode criar, atualizar e monitorar solicitações; sistema notifica equipes designadas.
3. *F3: Controle de Estoque de Peças:* Registro e acompanhamento de peças de reposição, com visualização de estoque em tempo real. *P2*
   - Critérios de aceitação: Usuário pode registrar entrada e saída de peças; sistema gera alertas de baixo estoque.

### Casos de uso

> *Caso de uso 1:* O gerente de manutenção utiliza o sistema para gerar relatórios semanais de manutenção para otimizar o planejamento de recursos.
> 

> *Caso de uso 2:* Técnicos acessam o sistema via dispositivos móveis para atualizar o status das manutenções em tempo real, melhorando a comunicação.
> 

> *Caso de uso 3:* Administradores configuram novos usuários e ajustam permissões de acesso conforme as necessidades da equipe.
> 

---

# Requisitos Não Funcionais

1. *NF1: Interface amigável e intuitiva:* A interface deve ser fácil de usar para todos os níveis de usuários, com navegação intuitiva. *P1*
2. *NF2: Responsividade:* Aplicação deve ser completamente funcional em computadores, tablets e smartphones. *P1*
3. *NF3: Segurança:* Implementar criptografia de dados e controles de acesso para garantir a proteção dos dados. *P2*

### 📊 Métricas

| Medida | Estado atual | Esperado | Resultados |
| --- | --- | --- | --- |
| Tempo médio de resposta | 3 segundos | 1 segundo | Melhorar experiência do usuário |
| Taxa de retenção de usuários | 50% | 75% | Aumentar a adoção do sistema |
| Incidentes de segurança | 2 por mês | 0 por mês | Garantir proteção de dados |

---
