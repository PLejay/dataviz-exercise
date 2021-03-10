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
