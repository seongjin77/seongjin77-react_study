/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
/* 반드시 대문자로 만들어야함 */
/* 사용자 정의 함수를 컴퍼넌트라고 부른다 */
/* { } 대괄호는 데이터 바인딩문법이라 한다. */
/* 자동으로 변수를 랜더링하고 싶을때만 useState사용  */
/* useState에는 배열로 값을 담을 수 있다. */
/* useState는 변경시에 같은 데이터일 경우 바뀌지 않는다. */
const Modal = function (props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글제목</button>
    </div>
  );
};

///////////////APP 함수///////////////

function App() {
  const onClick = (e, i) => {};
  let post = "강남 맛집";
  let [글제목, b] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "옷 가게 추천",
  ]);
  let [현재날짜, c] = useState("7월 7일");
  let [like, increase] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, settitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "orange", fontSize: "15px" }}>블로그입니다</h4>
      </div>

      <buntton
        onClick={() => {
          let sort = [...글제목];
          sort.sort();
          b(sort);
        }}
      >
        정렬
      </buntton>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여름반팔 추천";
          copy[1] = "겨울 옷 추천";
          copy[2] = "가을 음식 추천";
          b(copy);
        }}
      >
        Change
      </button>

      {글제목.map(function (e, i) {
        // console.log(like[i])
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                settitle(i);
              }}
            >
              {e}
            </h4>
            <button onClick={()=>{
              let likebt = [...like];
              likebt[i] = likebt[i]+1;
              increase(likebt);

            }}>👍</button>
            {like[i]}

            <p>{현재날짜}</p>
          </div>
        );
      })}
      {modal === true ? <Modal title={title} 글제목={글제목} /> : null}
    </div>
  );
}

export default App;
