import { useState } from 'react'
import './App.css'

function App() {
  const initialState = [
    { id: 1, title: "리액트 공부하기", content: "리액트 기초 공부하기", complete: false }
  ];
  const [goals, setGoals] = useState(initialState);
  const [doneGoals, setDoneGoals] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addGoal = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("제목과 내용 모두 입력하세요.");
      return;
    }
    setGoals([...goals, {id: Date.now(), title, content, complete: false}]);
    setTitle("");
    setContent("");
  };

  const removeGoal = (id, isDoneList) => {
    if (isDoneList) {
      setDoneGoals(doneGoals.filter((goal) => goal.id !== id));
    } else {
      setGoals(goals.filter((goal) => goal.id !== id));
    }
  };

  const completeGoal = (id, isDoneList) => {
    const goal = isDoneList ? doneGoals.find((goal) => goal.id === id) : goals.find((goal) => goal.id === id);
    const updatedGoals = isDoneList ? doneGoals.filter((goal) => goal.id !== id) : goals.filter((goal) => goal.id !== id);
    if (isDoneList) {
      setDoneGoals(updatedGoals);
      setGoals([...goals, { ...goal, complete: false }]);
    } else {
      setGoals(updatedGoals);
      setDoneGoals([...doneGoals, { ...goal, complete: true }]);
    }
  };

  return (
    <>
      <header>
        <h1>ToDo List</h1>
      </header>
      <form onSubmit={addGoal}>
        <h4>제목</h4>
        <input
          type='text'
          placeholder='제목을 입력하세요'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h4>내용</h4>
        <input
          type='text'
          placeholder='내용을 입력하세요'
          value={content}
          onChange={(e) => setContent(e.target.value)}/>
        <button type='submit'>추가하기</button>
      </form>
      <h2>Working!!!</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.title},{goal.content}
            <button onClick={() => removeGoal(goal.id, false)}>삭제하기</button>
            <button onClick={() => completeGoal(goal.id, false)}>
              {goal.complete ? "취소" : "완료"}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h3></h3>
      </div>
      <h2>Done..!</h2>
      <ul>
        {doneGoals.map((goal) => (
          <li key={goal.id}>
            {goal.title},{goal.content}
            <button onClick={() => removeGoal(goal.id, true)}>삭제하기</button>
            <button onClick={() => completeGoal(goal.id, true)}>
              {goal.complete ? "취소" : "완료"}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h3></h3>
      </div>
    </>
  )
}

export default App
