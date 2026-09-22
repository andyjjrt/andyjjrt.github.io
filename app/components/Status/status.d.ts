export interface ServiceStatus {
  name: string;
  url: string;
  icon: string;
  slug: string;
  status: 'up' | 'down';
  uptime: string;
  uptimeDay: string;
  uptimeWeek: string;
  uptimeMonth: string;
  uptimeYear: string;
  time: number;
  timeDay: number;
  timeWeek: number;
  timeMonth: number;
  timeYear: number;
  dailyMinutesDown: Record<string, number>;
}

export interface ServiceSummary {
  url: string;
  status: 'up' | 'down';
  code: number;
  responseTime: number;
  lastUpdated: string;
  startTime: string;
  generator: string;
}

export type ServiceList = ServiceStatus[]