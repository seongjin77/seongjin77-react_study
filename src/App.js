import logo from './logo.svg';
import './App.css';
function Header(props){
  
  console.log(props,props.title);
    return  <header>
            <h1><a href="/">{props.title}</a></h1>
            </header>
}
/* 반드시 대문자로 만들어야함 */
/* 사용자 정의 함수를 컴퍼넌트라고 부른다 */
function Nav(props){
    const lis = [
      
    ]
    for (let i=0; i<props.topics.length; i++){
        let t = props.topics[i];
        lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>);
    }
    return <nav>
       <ol>
          {lis}
       </ol>
            </nav>

}
function Article(props){
  return  <article>
          <h2>{props.title}</h2>
          {props.body}
           </article>
}
function App() {

  const topics = [
        {id: 1, title: 'html', body: 'html is ...'},
        {id: 2, title: 'css', body: 'css is ...'},
        {id: 3, title: 'javascript', body: 'javascript is ...'}
  ];
  return (
    <div>
     <Header title='REACT'></Header>
     <Header title='REACT'></Header>
      <Nav topics={topics}></Nav>
      <Article title='welcome' body='hello, web'></Article>
    </div>
  );
}

export default App;
