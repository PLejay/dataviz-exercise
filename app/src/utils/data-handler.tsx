import { Month, Post } from '../types';

export const getMonthFromDateString = (dateString: string): Month => {
  // Convert Unix timestamp to a Javascript date, then extract the month
  return new Date(Number(dateString)).toLocaleString('default', {
    month: 'short',
  }) as Month;
};

export const getPostNumberByMonth = (posts: Post[]) => {
  const postsByMonth = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };

  posts.forEach((post) => {
    const monthCreated = getMonthFromDateString(post.createdAt);
    postsByMonth[monthCreated] += 1;
  });

  return postsByMonth;
};
