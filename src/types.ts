export interface ServiceItem {
  id: string;
  iconName: 'Globe' | 'TrendingUp' | 'Target' | 'MapPin' | 'Megaphone' | 'ShoppingCart' | 'Search' | 'Mail';
  title: string;
  description: string;
  bullets: string[];
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  iconType: 'college' | 'growth' | 'milestone' | 'star';
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
