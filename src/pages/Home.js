import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/module/users";
import { del } from "../redux/module/users";
import { toggle } from "../redux/module/users";
import { setbody } from "../redux/module/body";
import { settitle } from "../redux/module/title";
import { resetbody } from "../redux/module/body";
import { resettitle } from "../redux/module/title";

function Home() {
  const dispatch = useDispatch();
  const title = useSelector((store) => store.reducer_title);
  const body = useSelector((store) => store.reducer_body);
  const user = useSelector((store) => store.reducer_user);

  const titlechange = (e) => {
    dispatch(settitle(e));
  };

  const bodychange = (e) => {
    dispatch(setbody(e));
  };

  const addBtn = () => {
    dispatch(add(title, body));
    dispatch(resettitle(""));
    dispatch(resetbody(""));
  };

  const delBtn = (id) => {
    dispatch(del(id));
  };

  const toggleBtn = (id, isDone) => {
    dispatch(toggle(id, isDone));
  };

  return (
    <div>
      <div>Todo Chellenge</div>
      <div>
        제목
        <input type="text" value={title} onChange={titlechange} />
      </div>
      <div>
        내용
        <input type="text" value={body} onChange={bodychange} />
      </div>
      <button onClick={addBtn}>추가하기</button>
      <div>
        <h1>working</h1>
        {user
          .filter((user) => user.isDone === false)
          .map((user) => {
            return (
              <div key={user.id}>
                <Link to={`/detail/${user.id}`}>상세보기</Link>
                <div>제목 : {user.title}</div>
                <div>내용 : {user.body}</div>
                <button onClick={() => delBtn(user.id)}>삭제하기</button>
                <button onClick={() => toggleBtn(user.id, user.isDone)}>
                  {user.isDone ? "취소하기" : "완료하기"}
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <h1>Done</h1>
        {user
          .filter((user) => user.isDone === true)
          .map((user) => {
            return (
              <div key={user.id}>
                <Link to={`/detail/${user.id}`}>상세보기</Link>
                <div>제목 : {user.title}</div>
                <div>내용 : {user.body}</div>
                <button onClick={() => delBtn(user.id)}>삭제하기</button>
                <button onClick={() => toggleBtn(user.id, user.isDone)}>
                  {user.isDone ? "취소하기" : "완료하기"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
