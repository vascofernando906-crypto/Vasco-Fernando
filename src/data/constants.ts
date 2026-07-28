import { SecuritySolution, CameraFeed, ProjectCard, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: 'VONA MOÇAMBIQUE',
  field: 'SOLUÇÕES DE SEGURANÇA RESIDENCIAL & CORPORATIVA',
  mainSlogan: 'A SUA SEGURANÇA, SOB O SEU CONTROLO.',
  secondarySlogan: 'Protegemos o que mais importa.',
  phone: '+258 84 569 8458',
  phoneRaw: '258845698458',
  whatsappUrl: 'https://wa.me/258845698458?text=Ol%C3%A1%20VONA%20Mo%C3%A7ambique%2C%20gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20uma%20solu%C3%A7%C3%A3o%20de%20seguran%C3%A7a.',
  facebookUrl: 'https://www.facebook.com/flexe123serie',
  facebookButtonText: 'VISITE-NOS NO FACEBOOK',
  whatsappAutoMessage: 'Olá VONA Moçambique, gostaria de solicitar informações sobre uma solução de segurança.',
  email: '[ADICIONAR EMAIL]',
  address: '[ADICIONAR ENDEREÇO]',
};

export const SOLUTIONS_LIST: SecuritySolution[] = [
  {
    id: 'vigilancia-presencial',
    title: 'Vigilância Presencial Permanente',
    subtitle: 'Proteção Física & Controlo de Acessos no Local',
    description: 'Proteção presencial para residências, empresas, estabelecimentos comerciais, condomínios, armazéns, escritórios, obras e outros espaços que necessitem de vigilância contínua. Profissionais qualificados para salvaguarda patrimonial.',
    iconName: 'UserCheck',
    badge: 'Presencial & 24h',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=800',
    features: [
      'Vigilância presencial contínua no local',
      'Controlo de entrada e saída de pessoas e veículos',
      'Controlo de acessos e verificação de identificação',
      'Observação atenta das áreas protegidas',
      'Registo rigoroso de ocorrências',
      'Rondas no perímetro, quando previstas no contrato',
      'Comunicação imediata de situações anormais',
      'Vigilância de instalações e património',
      'Integração total com sistemas CCTV',
      'Coordenação com monitoramento remoto, quando contratado'
    ],
    specs: ['Escala 24/7 ou Personalizada', 'Registo Diário de Livro de Ponto', 'Comunicação via Rádio/Móvel', 'Atendimento de Emergência'],
    idealFor: ['Empresas & Escritórios', 'Armazéns & Obras', 'Condomínios & Residências', 'Lojas & Estabelecimentos Comercial']
  },
  {
    id: 'bullet',
    title: 'Câmeras Bullet',
    subtitle: 'Proteção Perimetral & Fachadas',
    description: 'Cobertura de longo alcance e alta visibilidade para fachadas, muros, entradas e perímetros residenciais ou industriais.',
    iconName: 'Video',
    badge: 'Alta Visibilidade',
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
    features: [
      'Visão noturna infravermelha de longo alcance',
      'Estrutura blindada resistente a intempéries (IP67)',
      'Efeito dissuasor visual potente',
      'Detecção inteligente de movimento no perímetro'
    ],
    specs: ['Resolução 4K / 5MP / 2MP', 'Alcance IR 30m - 80m', 'Proteção Meteorológica IP67', 'Sensor CMOS Progressivo'],
    idealFor: ['Fachadas de Imóveis', 'Muros Perimétricos', 'Entradas de Garagem', 'Galpões Industriais']
  },
  {
    id: 'ptz',
    title: 'Câmeras Speed Dome / PTZ',
    subtitle: 'Rotação 360° e Zoom de Alta Potência',
    description: 'Rotação pan-tilt-zoom, zoom potente de alta precisão e ampla cobertura para grandes áreas, pátios e estacionamentos.',
    iconName: 'Camera',
    badge: 'Rotação 360°',
    imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?auto=format&fit=crop&q=80&w=800',
    features: [
      'Rotação contínua de 360° e inclinação de 90°',
      'Zoom óptico de até 32x sem perda de detalhes',
      'Rastreamento automático de alvos e patrulha programável',
      'Excelente desempenho sob baixa iluminação'
    ],
    specs: ['Zoom Óptico 25x/32x', 'Giro Horizontal 360° Contínuo', 'Preset de Posições Inteligentes', 'IR Inteligente Ultra-Longo'],
    idealFor: ['Pátios de Estacionamento', 'Condomínios Fechados', 'Áreas Industriais Amplas', 'Grandes Propriedades']
  },
  {
    id: 'ip-tech',
    title: 'Tecnologia IP',
    subtitle: 'Acesso Remoto & Qualidade Digital High-End',
    description: 'Sistemas modernos de videovigilância digital IP com altíssima resolução, acesso remoto encriptado e alta flexibilidade.',
    iconName: 'Globe',
    badge: 'Alta Resolução',
    imageUrl: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800',
    features: [
      'Transmissão de dados e áudio por cabo de rede (PoE)',
      'Integração direta com aplicativos mobile e redes corporativas',
      'Inteligência artificial para filtro de falsos alarmes',
      'Expansão simples e modular sem perda de qualidade'
    ],
    specs: ['Compressão H.265+', 'Alimentação PoE Directa', 'Encriptação de Dados TLS', 'Processamento de Vídeo em Nuvem/Local'],
    idealFor: ['Residências Modernas', 'Escritórios Corporativos', 'Redes de Lojas e Comércio', 'Instituições de Ensino']
  },
  {
    id: 'analog',
    title: 'Sistemas Analógicos HD',
    subtitle: 'Custo-Benefício e Robustez',
    description: 'Soluções analógicas HD adaptadas às necessidades técnicas, infraestruturas existentes e ao orçamento de cada projeto.',
    iconName: 'Cpu',
    badge: 'Económico',
    imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800',
    features: [
      'Transmissão de sinal em tempo real sem latência',
      'Excelente relação custo-benefício para upgrade de sistemas antigos',
      'Facilidade de substituição de equipamentos',
      'Compatibilidade multi-formato (TVI/CVI/AHD/CVBS)'
    ],
    specs: ['Tecnologia HD-TVI / HD-CVI', 'Gravação em DVR Híbrido', 'Cabos Coaxiais / UTP', 'Consumo Energético Otimizado'],
    idealFor: ['Projetos com Orçamento Definido', 'Substituição de Instalações Antigas', 'Pequeno Comércio', 'Habitações']
  },
  {
    id: 'nvr-dvr',
    title: 'Sistemas NVR / DVR',
    subtitle: 'Gravação, Armazenamento & Consulta',
    description: 'Central de gravação, armazenamento seguro de imagens em disco rígido de alta durabilidade e gestão intuitiva.',
    iconName: 'HardDrive',
    badge: 'Gravação Continuada',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    features: [
      'Discos rígidos especiais WD Purple / Seagate Skyhawk para operação 24/7',
      'Acesso seguro por senha, perfil de utilizador e app móvel',
      'Exportação rápida de evidências em USB ou nuvem',
      'Gravação inteligente por detecção de movimento para poupar espaço'
    ],
    specs: ['Canais de 4, 8, 16, 32 ou 64 Câmeras', 'NAND Flash/SATA Backup', 'Saída HDMI 4K', 'Suporte a RAID'],
    idealFor: ['Gestão de Gravações', 'Histórico de Ocorrências', 'Locais com Exigência de Auditoria', 'Tanto Residencial como Empresa']
  },
  {
    id: 'monitoring',
    title: 'Monitoramento Remoto & Presencial',
    subtitle: 'Acompanhamento Contínuo de Imagens',
    description: 'Soluções de monitoramento remoto pelo smartphone e acompanhamento presencial 24h conforme o serviço contratado.',
    iconName: 'ShieldCheck',
    badge: 'Suporte 24h/24h',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    features: [
      'Visualização imediata ao vivo de qualquer ponto de Moçambique ou do mundo',
      'Opção de acompanhamento presencial 24h/24h sob contrato de serviços',
      'Comunicação imediata com o proprietário em caso de atipicidade',
      'Alertas instantâneos no smartphone ao detectar intrusões'
    ],
    specs: ['Streaming Criptografado', 'Compatível com iOS e Android', 'Serviço sob Medida', 'Acesso Multi-utilizador'],
    idealFor: ['Casas de Família', 'Empresas sem Pessoal Local Noturno', 'Condomínios', 'Lojas e Armazéns']
  },
  {
    id: 'reports',
    title: 'Relatórios de Ocorrências',
    subtitle: 'Registo Organizado para Auditoria',
    description: 'Registo detalhado e organizado de eventos importantes para auditoria, controlo interno e acompanhamento patrimonial.',
    iconName: 'FileText',
    badge: 'Auditoria Garantida',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
    features: [
      'Documentação técnica com timestamps e recortes de imagem',
      'Histórico de acessos e modificações de sistema',
      'Envio periódico de diagnósticos do estado dos equipamentos',
      'Relatórios prontos para suporte a investigações de segurança'
    ],
    specs: ['Formatos PDF/Excel', 'Timeline de Eventos', 'Análise de Métrica de Ocorrência', 'Armazenamento em Backup'],
    idealFor: ['Empresas Corporativas', 'Gestão de Condomínios', 'Instituições de Ensino e Saúde', 'Lojas']
  },
  {
    id: 'maintenance',
    title: 'Manutenção & Assistência Técnica',
    subtitle: 'Preventiva e Corretiva Especializada',
    description: 'Manutenção periódica, substituição de cabeamento, limpeza de lentes e alinhamento para o seu sistema nunca falhar.',
    iconName: 'Wrench',
    badge: 'Assistência Contínua',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    features: [
      'Visitas periódicas de revisão técnica preventiva',
      'Diagnóstico célere de problemas em câmeras, conetores e fontes',
      'Reconfiguração de redes e reativação de acessos remotos no celular',
      'Equipa técnica qualificada com foco em prontidão'
    ],
    specs: ['Atendimento Prioritário', 'Troca de Componentes Danificados', 'Limpeza de Ópticas', 'Verificação Energética'],
    idealFor: ['Sistemas Existentes com Falhas', 'Manutenção Preventiva Anual', 'Clientes VONA MOÇAMBIQUE']
  }
];

export const TIMELINE_STEPS = [
  { step: '01', title: 'CONTACTO', desc: 'Contacto inicial do cliente por chamada, WhatsApp ou formulário.' },
  { step: '02', title: 'VISITA TÉCNICA', desc: 'Agendamento de deslocamento da equipa ao imóvel para levantamento.' },
  { step: '03', title: 'ANÁLISE DO LOCAL', desc: 'Mapeamento detalhado das estruturas, acessos e perímetro do imóvel.' },
  { step: '04', title: 'IDENTIFICAÇÃO DE PONTOS CEGOS', desc: 'Detaillada verificação de ângulos sem visibilidade e áreas vulneráveis.' },
  { step: '05', title: 'PLANEAMENTO DA SOLUÇÃO', desc: 'Desenvolvimento do projeto com indicação exata de câmeras e cabos.' },
  { step: '06', title: 'INSTALAÇÃO', desc: 'Execução limpa e profissional com passagem técnica de cabos e fixação.' },
  { step: '07', title: 'CONFIGURAÇÃO DO ACESSO REMOTO', desc: 'Instalação do app no smartphone e computador do cliente com senha segura.' },
  { step: '08', title: 'TESTES', desc: 'Ajuste fino de foco, iluminação noturna, gravação e notificações.' },
  { step: '09', title: 'ENTREGA', desc: 'Orientação ao cliente sobre a utilização do sistema e entrega formal.' },
  { step: '10', title: 'SUPORTE E MANUTENÇÃO', desc: 'Assistência técnica contínua e acompanhamento pós-instalação.' }
];

export const SAMPLE_PROJECT_CARDS: ProjectCard[] = [
  {
    id: 'proj-1',
    title: 'Sistema de Videovigilância Perimetral Residencial',
    category: 'Residencial',
    location: '[ADICIONAR CIDADE]',
    year: '[ADICIONAR ANO]',
    solutionType: 'Câmeras IP 4K + NVR + Acesso no Celular',
    servicesPerformed: [
      'Instalação de 8 Câmeras IP Bullet e Dome',
      'Passagem de cabos de rede blindados',
      'Configuração de NVR com gravação 24/7',
      'Configuração de acesso remoto em 4 smartphones'
    ],
    equipments: ['[ADICIONAR EQUIPAMENTOS]'],
    description: 'Instalação completa de videovigilância cobrindo portão principal, quintal, garagem e perímetro traseiro do imóvel residencial.',
    problem: 'Imóvel com fraca visibilidade no portão da frente e pontos cegos na lateral traseira durante o período noturno.',
    solutionProvided: 'Posicionamento estratégico de câmeras Bullet infravermelhas cobrindo 100% dos perímetros e câmera Dome na área de lazer.',
    afterImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'proj-2',
    title: 'Monitoramento Integrado para Armazém Corporativo',
    category: 'Corporativo',
    location: '[ADICIONAR CIDADE]',
    year: '[ADICIONAR ANO]',
    solutionType: 'Câmeras PTZ Speed Dome + NVR 32 Canais',
    servicesPerformed: [
      'Identificação e eliminação de 12 pontos cegos',
      'Instalação de Speed Dome PTZ com zoom de 30x',
      'Integração com posto de monitoramento interno',
      'Configuração de alertas de movimento noturno'
    ],
    equipments: ['[ADICIONAR EQUIPAMENTOS]'],
    description: 'Projeto corporativo para monitorar entrada de mercadorias, docas de carregamento e perímetro exterior de grande área comercial.',
    problem: 'Necessidade de acompanhar movimentação de carga pesada e controlar entradas não autorizadas fora do horário comercial.',
    solutionProvided: 'Implementação de câmeras Speed Dome PTZ com patrulhamento pré-programado e NVR de alta capacidade de armazenamento.',
    afterImageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'proj-3',
    title: 'Segurança Eletrónica para Espaço Comercial & Lojas',
    category: 'Comercial',
    location: '[ADICIONAR CIDADE]',
    year: '[ADICIONAR ANO]',
    solutionType: 'Câmeras Full HD + DVR + Relatório de Eventos',
    servicesPerformed: [
      'Monitoramento de caixas registradoras e balcão',
      'Instalação de câmeras discretas HD',
      'Acesso do proprietário via smartphone a partir de qualquer local'
    ],
    equipments: ['[ADICIONAR EQUIPAMENTOS]'],
    description: 'Instalação focada na proteção do caixa, área de produtos e entrada de clientes com acompanhamento em tempo real.',
    problem: 'Dificuldade de controle das operações da loja e ausência de registo de imagens das transações presenciais.',
    solutionProvided: 'Câmeras com alta definição cobrindo os pontos de pagamento e gravação contínua protegida em DVR trancado em bastidor.',
    afterImageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'proj-4',
    title: 'Adequação e Proteção para Instituição de Ensino',
    category: 'Institucional',
    location: '[ADICIONAR CIDADE]',
    year: '[ADICIONAR ANO]',
    solutionType: 'Rede IP Inteligente + Monitoramento de Acessos',
    servicesPerformed: [
      'Cobertura de corredores, pátios e entradas',
      'Passagem de infraestrutura tubulada para proteção de cabos',
      'Treinamento da equipa responsável de segurança'
    ],
    equipments: ['[ADICIONAR EQUIPAMENTOS]'],
    description: 'Projeto institucional focado na segurança dos alunos, colaboradores e infraestrutura tecnológica da instituição.',
    problem: 'Necessidade de controlo de acessos rigoroso nos portões e fiscalização contínua dos pátios de recreação.',
    solutionProvided: 'Rede de câmeras IP integradas com monitores centralizados na secretaria e acesso restrito aos administradores.',
    afterImageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export const DEMO_CAMERA_FEEDS: CameraFeed[] = [
  {
    id: 'cam-1',
    name: 'CAM 01 - Portão Principal',
    location: 'Entrada Residencial / Empresarial',
    status: 'ONLINE',
    type: 'Câmera IP Bullet 4K',
    resolution: '3840x2160 @ 30fps',
    nightVision: true,
    fps: 30,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'cam-2',
    name: 'CAM 02 - Quintal & Garagem',
    location: 'Perímetro Externo',
    status: 'GRAVANDO',
    type: 'Speed Dome PTZ 360°',
    resolution: '2560x1440 @ 30fps',
    nightVision: true,
    fps: 30,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'cam-3',
    name: 'CAM 03 - Recepção & Escritório',
    location: 'Área Interna Corporativa',
    status: 'ONLINE',
    type: 'Câmera Dome Full HD IP',
    resolution: '1920x1080 @ 25fps',
    nightVision: false,
    fps: 25,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'cam-4',
    name: 'CAM 04 - Doca / Armazém de Carga',
    location: 'Área de Logística Comercial',
    status: 'ALERTA',
    type: 'Câmera Bullet Térmica / IR',
    resolution: '2560x1440 @ 30fps',
    nightVision: true,
    fps: 30,
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000'
  }
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Cliente VONA',
    companyName: 'Residência Privada',
    city: 'Moçambique',
    rating: 5,
    comment: 'A instalação foi rápida e extremamente profissional. Agora acompanho o portão e a casa diretamente do meu smartphone onde quer que eu esteja. Recomendo fortemente a VONA Moçambique.',
    date: 'Depoimento Verificado',
    propertyType: 'Residencial'
  },
  {
    id: 't-2',
    clientName: 'Gestor Corporativo',
    companyName: 'Empresa Comercial',
    city: 'Moçambique',
    rating: 5,
    comment: 'Fizeram uma visita técnica detalhada e identificaram pontos cegos que nós nem sabíamos que existiam no armazém. O sistema de monitoramento remoto é excelente.',
    date: 'Depoimento Verificado',
    propertyType: 'Corporativo'
  }
];
