// sequelize dependencies
import db from '@/db/sequelize';

// export result
export default async (req, res) => {
  const testQuestions = {
    questions: ['who let the dogs out?', 'who let the dogs back in?', 'who are the watchmen?']
  };
  db.Question.findAll({
    raw: true
  }).then((resp) => {
    const rslt = resp.map((question) => question.questionStr);
    res.status(200).json(rslt);
  });
};
