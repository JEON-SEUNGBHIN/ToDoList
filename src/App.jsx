import { useState } from 'react';
import './App.css';
import { addGoal, removeGoal, completeGoal } from './components/Button';

function App() {
  // 처음 세팅
  const initialState = [
    { id: 0, title: "리액트 공부하기", content: "리액트 기초 공부하기", complete: false }
  ];

  // Todo 초기값
  const [goals, setGoals] = useState(initialState);
  const [doneGoals, setDoneGoals] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const goalsStyle = {
    display: 'flex',
    flexDirection: 'column', // 세로 정렬
    padding: '1rem',
    gap: '10px'
  };
  const goalStyle = {
    border: '1px solid black',
    borderRadius: '5px',
    padding: '1rem',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column', // 세로 정렬
    gap: '10px'
  };
  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px', // 버튼 사이 간격 설정
    marginTop: '10px'
  };

  return (
    <>
      <header>
        <h1>ToDo List</h1>
      </header>
      <form onSubmit={(e) => addGoal(e, title, content, setGoals, setTitle, setContent, goals)}>
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
          onChange={(e) => setContent(e.target.value)} />
        <button type='submit'>추가하기</button>
      </form>
      <h2>Working!!!</h2>
      <ul style={goalsStyle}>
        {goals.map((goal) => (
          <li key={goal.id} style={goalStyle}>
            <span>{goal.title}</span>
            <span>{goal.content}</span>
            <div style={buttonContainerStyle}>
              <button onClick={() => removeGoal(goal.id, false, setDoneGoals, doneGoals, setGoals, goals)}>삭제하기</button>
              <button onClick={() => completeGoal(goal.id, false, setDoneGoals, doneGoals, setGoals, goals)}>
                {goal.complete ? "취소" : "완료"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h3></h3>
      </div>
      <h2>Done..!</h2>
      <ul style={goalsStyle}>
        {doneGoals.map((goal) => (
          <li key={goal.id} style={goalStyle}>
            <span>{goal.title}</span>
            <span>{goal.content}</span>
            <div style={buttonContainerStyle}>
              <button onClick={() => removeGoal(goal.id, true, setDoneGoals, doneGoals, setGoals, goals)}>삭제하기</button>
              <button onClick={() => completeGoal(goal.id, true, setDoneGoals, doneGoals, setGoals, goals)}>
                {goal.complete ? "취소" : "완료"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h3></h3>
      </div>
    </>
  );
}

export default App;
