import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './AppNavBar.css'
import { Route, Routes, Link } from 'react-router-dom';
//route 페이지 이동 처리
//routes uri에 담겨있는 정보를 획득
//link  실제로 페이지를 이동하는 역할 link위치에 컴포넌트 뿌려줌

function AppNavBar(){
return(
<>
      <div className='App'>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link> 
                <Link to={"/"}>HOME</Link>
                </Nav.Link>
              <Nav.Link>
                <Link to={"detail"}>상세페이지</Link>
                
                </Nav.Link>
              <Nav.Link> 
                <Link to ={"cart"}>장바구니페이지</Link>
                </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* 라우팅 정보를 한꺼번에 모아놓는 장소 */}
                {/* 스프리에서 사용하는 컨트롤러 클래스 */}

        <Routes>
          <Route path='/' element={<div>메인페이지</div>}/>
             <Route path='/detail' element={<div>상세페이지</div>}></Route>
                <Route path='/cart' element={<div>장바구니페이지</div>}></Route>
        </Routes>

      </div>

</>

)


}

export default AppNavBar;