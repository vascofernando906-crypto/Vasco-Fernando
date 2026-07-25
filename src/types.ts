export type TabType = 'inicio' | 'solucoes' | 'monitoramento' | 'projetos' | 'sobre' | 'contactos' | 'clientes';

export interface SecuritySolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  specs: string[];
  idealFor: string[];
  badge?: string;
  imageUrl: string;
}

export interface CameraFeed {
  id: string;
  name: string;
  location: string;
  status: 'ONLINE' | 'GRAVANDO' | 'ALERTA';
  type: string;
  resolution: string;
  nightVision: boolean;
  fps: number;
  imageUrl: string;
}

export interface ProjectCard {
  id: string;
  title: string;
  category: 'Residencial' | 'Comercial' | 'Corporativo' | 'Institucional';
  location: string; // [ADICIONAR CIDADE]
  year: string;     // [ADICIONAR ANO]
  solutionType: string;
  servicesPerformed: string[];
  equipments: string[]; // [ADICIONAR EQUIPAMENTOS]
  description: string;
  problem: string;
  solutionProvided: string;
  beforeImageUrl?: string;
  afterImageUrl: string;
  galleryImages: string[];
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  serviceDesired: string;
  camerasCount?: string;
  needsMonitoring: boolean;
  needsTechnicalVisit: boolean;
  cityLocation: string;
  message: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  companyName?: string;
  city: string;
  rating: number;
  comment: string;
  date: string;
  propertyType: string;
}
