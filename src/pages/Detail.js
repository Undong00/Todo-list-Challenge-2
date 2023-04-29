import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

function Detail() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.reducer_user);
  const param = useParams();
  const todo = user.find((todo) => todo.id === param.id);

  return (
    <div>
      <div>ID: {todo.id}</div>
      <div>제목: {todo.title}</div>
      <div>내용: {todo.body}</div>
      <button onClick={() => navigate("/")}>이전으로</button>
    </div>
  );
}

export default Detail;
