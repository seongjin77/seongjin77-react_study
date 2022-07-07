import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
/* 반드시 대문자로 만들어야함 */
/* 사용자 정의 함수를 컴퍼넌트라고 부른다 */

function Article(props){
  return  <article>
          <h2>{props.title}</h2>
          {props.body}
           </article>
}
function Header(props){
  
  // console.log(props,props.title);
    return  <header>
            <h1><a href="/" onClick={(event)=>{
                event.preventDefault(); // a태그 기본 동작 방지, 클릭해도 페이지 넘김x
                props.onchangeMode();
            }}>{props.title}</a></h1>
            </header>
}
function Nav(props){
  const lis = []
  for (let i=0; i<props.topics.length; i++){
        let t = props.topics[i];
        lis.push(<li key={t.id}>
          <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
            event.preventDefault();
            props.onchangeMode(event.target.id);
          }}>{t.title}</a></li>);
    }
    return <nav>
       <ol>
          {lis}
       </ol>
            </nav>

}/// Nav 함수 끝
///////////////APP 함수///////////////
function App() {
  const [mode, setMode] = useState('WELCOME');
  const topics = [
        {id: 1, title: 'html', body: 'html is ...'},
        {id: 2, title: 'css', body: 'css is ...'},
        {id: 3, title: 'javascript', body: 'javascript is ...'}
  ];
  let content = null;
  if(mode === 'WELCOME'){
      content = <Article title='welcome' body='hello, web'></Article>
  } else if (mode === 'READ') {
      content = <Article title='Read' body='hello, Read'></Article>
  }
  return (
    <div>
     <Header title='REACT' onchangeMode={()=>{
       setMode = 'WELCOME';
     }}></Header>
      <Nav topics={topics} onchangeMode={(id)=>{
        setMode = 'READ';
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
