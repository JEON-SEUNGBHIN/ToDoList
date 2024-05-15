import React from 'react';

function addGoal(e, title, content, setGoals, setTitle, setContent, goals) {
  e.preventDefault();
  if (!title || !content) {
    alert("제목과 내용 모두 입력하세요.");
    return;
  }
  // Todo 업데이트
  setGoals([...goals, { id: Date.now(), title, content, complete: false }]);
  setTitle("");
  setContent("");
}

function removeGoal(id, isDoneList, setDoneGoals, doneGoals, setGoals, goals) {
  if (isDoneList) {
    setDoneGoals(doneGoals.filter((goal) => goal.id !== id));
  } else {
    setGoals(goals.filter((goal) => goal.id !== id));
  }
}

function completeGoal(id, isDoneList, setDoneGoals, doneGoals, setGoals, goals) {
  const goal = isDoneList ? doneGoals.find((goal) => goal.id === id) : goals.find((goal) => goal.id === id);
  const updatedGoals = isDoneList ? doneGoals.filter((goal) => goal.id !== id) : goals.filter((goal) => goal.id !== id);
  if (isDoneList) {
    setDoneGoals(updatedGoals);
    setGoals([...goals, { ...goal, complete: false }]);
  } else {
    setGoals(updatedGoals);
    setDoneGoals([...doneGoals, { ...goal, complete: true }]);
  }
}
export { addGoal, removeGoal, completeGoal };
