import sql from '@/db/sql';

// sql logic

export default async (req, res) => {
  const rslt = {
    questions: ['who let the dogs out?', 'who let the dogs back in?', 'who are the watchmen?']
  };
  res.status(200).json(rslt);
};
