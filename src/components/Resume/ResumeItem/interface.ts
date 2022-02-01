export interface I_Month {
  start: number;
  end: number;
}

export interface I_ResumeItemProps {
  from: number;
  to: number;
  month?: I_Month;
  title: string;
  subtitle: string;
  text: string;
}
