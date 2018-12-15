export class CalendarApp {
  id?: string | number;
  start: Date;
  end?: Date;
  title: string;
  color?: {
    primary?: string;
    secondary?: string;
  };
  uploaded?: boolean;
  updated?: boolean;
}
