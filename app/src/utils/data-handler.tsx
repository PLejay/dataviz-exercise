import { Month, Post, TopicByMonth, ValueByMonth } from '../types';

const getMonthFromDateString = (dateString: string): Month => {
  // Convert Unix timestamp to a Javascript date, then extract the month
  return new Date(Number(dateString)).toLocaleString('default', {
    month: 'short',
  }) as Month;
};

export const getPostNumberByMonth = (posts: Post[]) => {
  const postsByMonth: ValueByMonth = {
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

export const getTopicsByMonth = (posts: Post[]) => {
  const topicsByMonth: TopicByMonth = {
    Jan: {},
    Feb: {},
    Mar: {},
    Apr: {},
    May: {},
    Jun: {},
    Jul: {},
    Aug: {},
    Sep: {},
    Oct: {},
    Nov: {},
    Dec: {},
  };

  posts.forEach((post) => {
    const monthCreated = getMonthFromDateString(post.createdAt);

    // For each month, sum the total likelihood for each topic
    // As a proxy for 'prevalence'/'popularity'
    post.likelyTopics.forEach((topic) => {
      if (topicsByMonth[monthCreated].hasOwnProperty(topic.label)) {
        topicsByMonth[monthCreated][topic.label] += topic.likelihood;
      } else {
        topicsByMonth[monthCreated][topic.label] = topic.likelihood;
      }
    });
  });

  return topicsByMonth;
};
