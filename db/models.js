// dependencies

// export question model
export const Question = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    'questions',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      questionStr: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );
  return Question;
};
