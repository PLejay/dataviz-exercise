export type Month =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec';

export type ValuePerMonth = {
  Jan: number;
  Feb: number;
  Mar: number;
  Apr: number;
  May: number;
  Jun: number;
  Jul: number;
  Aug: number;
  Sep: number;
  Oct: number;
  Nov: number;
  Dec: number;
};

export interface Post {
  id: string;
  title?: string;
  body?: string;
  published?: boolean;
  createdAt: string;
  likelyTopics: Topic[];
}

export interface Topic {
  label: string;
  likelihood: number;
}
