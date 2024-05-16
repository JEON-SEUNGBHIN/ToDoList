import React from 'react';

const Button = ({ goal, goals, setGoals, doneGoals, setDoneGoals, isDoneList }) => {
  // 특정 Todo를 삭제하는 함수
  const removeGoal = (id) => {
    if (isDoneList) {
      setDoneGoals(doneGoals.filter((goal) => goal.id !== id));
    } else {
      setGoals(goals.filter((goal) => goal.id !== id));
    }
  };

  // Todo의 완료 상태를 변경하는 함수
  const changeGoal = (id) => {
    const updatedGoals = isDoneList ? doneGoals.filter((goal) => goal.id !== id) : goals.filter((goal) => goal.id !== id);
    const targetGoal = isDoneList ? doneGoals.find((goal) => goal.id === id) : goals.find((goal) => goal.id === id);

    if (isDoneList) {
      setDoneGoals(updatedGoals);
      setGoals([...goals, { ...targetGoal, complete: false }]);
    } else {
      setGoals(updatedGoals);
      setDoneGoals([...doneGoals, { ...targetGoal, complete: true }]);
    }
  };

  return (
    <>
      <button onClick={() => removeGoal(goal.id)} className='deletebtn'>삭제하기</button>
      <button onClick={() => changeGoal(goal.id)} className={goal.complete ? 'incomplete-btn' : 'complete-btn'}>
        {goal.complete ? "취소" : "완료"}
      </button>
    </>
  );
};

export default Button;
