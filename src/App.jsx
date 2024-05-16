import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  // 처음 세팅
  const initialState1 = [
    { id: 0, title: "리액트 공부하기", content: "리액트 기초 공부하기", complete: false }
  ];

  const initialState2 = [
    { id: 1, title: "리액트 공부하기", content: "리액트 기초 공부하기", complete: true }
  ];

  // Todo 초기값
  const [goals, setGoals] = useState(initialState1); // 현재의 Todo 목록
  const [doneGoals, setDoneGoals] = useState(initialState2); // 완료된 Todo 목록
  const [title, setTitle] = useState(""); // Todo 제목 입력 상태
  const [content, setContent] = useState(""); // Todo 내용 입력 상태

  // ul css
  const goalsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // 자동으로 그리드 컬럼 생성, 최소 너비는 200px, 공간이 허락하는 한 최대로 늘어남
    gap: '10px',
    padding: '1rem'
  };

  // li css
  const goalStyle = {
    backgroundColor: 'white',
    border: '1px solid rgb(255,157,138)',
    borderRadius: '5px',
    padding: '1rem',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column', // 세로 정렬
    gap: '10px'
  };

  // li btn css
  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // 버튼 사이 간격 설정
    marginTop: '10px'
  };

  // 새로운 Todo를 추가하는 함수
  const addGoal = (e) => {
    e.preventDefault(); // 기본 이벤트 방지
    // 제목 또는 내용이 빈 경우 알림 표시 후 종료
    if (!title || !content) {
      alert("제목과 내용 모두 입력하세요.");
      return;
    }
    // Todo 목록을 업데이트하고 입력 필드를 초기화
    setGoals([...goals, { id: Date.now(), title, content, complete: false }]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <header>
        <h1>ToDo List</h1>
        <img src='src/img/flower2.png' alt='flower' />
      </header>
      {/* Todo 추가를 위한 폼 */}
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
          onChange={(e) => setContent(e.target.value)} />
        {/* Todo 추가 버튼 */}
        <button type='submit' className='addbtn'>추가하기</button>
      </form>
      {/* 진행 중인 Todo 목록 */}
      <h2>Working!!!🔥</h2>
      <ul style={goalsStyle}>
        {goals.map((goal) => (
          <li key={goal.id} style={goalStyle}>
            <h3>{goal.title}</h3>
            <span>{goal.content}</span>
            {/* Todo 삭제 및 완료 버튼 */}
            <div style={buttonContainerStyle}>
              <Button 
                goal={goal} 
                goals={goals} 
                setGoals={setGoals} 
                doneGoals={doneGoals} 
                setDoneGoals={setDoneGoals} 
                isDoneList={false} 
              />
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h3></h3>
      </div>
      {/* 완료된 Todo 목록 */}
      <h2>Done..!👏🏻</h2>
      <ul style={goalsStyle}>
        {doneGoals.map((goal) => (
          <li key={goal.id} style={goalStyle}>
            <h3>{goal.title}</h3>
            <span>{goal.content}</span>
            {/* 완료된 Todo 삭제 및 완료 버튼 */}
            <div style={buttonContainerStyle}>
              <Button 
                goal={goal} 
                goals={goals} 
                setGoals={setGoals} 
                doneGoals={doneGoals} 
                setDoneGoals={setDoneGoals} 
                isDoneList={true} 
              />
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
