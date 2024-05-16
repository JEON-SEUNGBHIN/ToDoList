// 새로운 Todo를 추가하는 함수
function addGoal(e, title, content, setGoals, setTitle, setContent, goals) {
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
}

// 특정 Todo를 삭제하는 함수
function removeGoal(id, isDoneList, setDoneGoals, doneGoals, setGoals, goals) {
  // 완료된 목록인지 확인 후 해당 목록에서 Todo 제거
  if (isDoneList) {
    setDoneGoals(doneGoals.filter((goal) => goal.id !== id));
  } else {
    setGoals(goals.filter((goal) => goal.id !== id));
  }
}

// Todo의 완료 상태를 변경하는 함수
function changeGoal(id, isDoneList, setDoneGoals, doneGoals, setGoals, goals) {
  // 완료된 목록인지에 따라 해당 Todo를 찾아 상태 변경
  const goal = isDoneList ? doneGoals.find((goal) => goal.id === id) : goals.find((goal) => goal.id === id);
  const updatedGoals = isDoneList ? doneGoals.filter((goal) => goal.id !== id) : goals.filter((goal) => goal.id !== id);
  if (isDoneList) {
    // 완료된 목록에서 Todo를 제거하고 미완료 목록에 추가
    setDoneGoals(updatedGoals);
    setGoals([...goals, { ...goal, complete: false }]);
  } else {
    // 미완료 목록에서 Todo를 제거하고 완료된 목록에 추가
    setGoals(updatedGoals);
    setDoneGoals([...doneGoals, { ...goal, complete: true }]);
  }
}

export { addGoal, removeGoal, changeGoal }; // 다른 파일에서 이 함수들을 사용할 수 있도록 내보내기
