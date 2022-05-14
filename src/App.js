import logo from './logo.svg';
import './App.css';
function Header(){
    return  <header>
            <h1><a href="/">WEB</a></h1>
            </header>
}

/* 사용자 정의 함수를 컴퍼넌트라고 부른다 */
function Nav(){
    return <nav>
       <ol>
         <li><a href="/">html</a></li>
         <li><a href="/">css</a></li>
         <li><a href="/">js</a></li>
         <li><a href="/">react</a></li>
       </ol>
            </nav>

}
function Article(){
  return  <article>
          <h2>Welcome</h2>
          Hello, WEB
           </article>
}
function App() {
  return (
    <div>
     <Header></Header>
     <Header></Header>
     <Header></Header>
      <Nav></Nav>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
