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

export type ValueByMonth = {
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
  prevalence?: number; // Measured as the sum of likelihood over a given time period
}

export type TopicByMonth = {
  Jan: {
    [topic: string]: number;
  };
  Feb: {
    [topic: string]: number;
  };
  Mar: {
    [topic: string]: number;
  };
  Apr: {
    [topic: string]: number;
  };
  May: {
    [topic: string]: number;
  };
  Jun: {
    [topic: string]: number;
  };
  Jul: {
    [topic: string]: number;
  };
  Aug: {
    [topic: string]: number;
  };
  Sep: {
    [topic: string]: number;
  };
  Oct: {
    [topic: string]: number;
  };
  Nov: {
    [topic: string]: number;
  };
  Dec: {
    [topic: string]: number;
  };
};
