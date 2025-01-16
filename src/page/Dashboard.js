import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  let auth = localStorage.getItem("token");
  // console.log(typeof auth, JSON.parse(auth)?.firstName)

  function handleLogout() {
    console.log("handleLogout");
    localStorage.clear();
    // window.location.reload()
    window.location.pathname="login"
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href=""></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {
            !auth ?
              <Nav className="me-auto">
                <Link className='nav-link' to="/Registration">Registration</Link>
                <Link className='nav-link' to="/Login">Login</Link>
              </Nav> :
              <Nav className="me-auto">
                <Link className='nav-link' to="Home">Home</Link>
             
                <NavDropdown title="User" id="basic-nav-dropdown">
                  <NavDropdown.Item href="AddUser">Add User</NavDropdown.Item>
                  <NavDropdown.Item href="Userlist">
                    User-List
                  </NavDropdown.Item>
                  </NavDropdown>
                  <Nav className="me-auto">
              <NavDropdown title="College" id="basic-nav-dropdown">
                  <NavDropdown.Item href="Addcollege">Add College</NavDropdown.Item>
                  <NavDropdown.Item href="Collegelist">
                    College-list
                  </NavDropdown.Item>
                  </NavDropdown>
                  </Nav>
                  <Nav className="me-auto">
              <NavDropdown title="Student" id="basic-nav-dropdown">
                  <NavDropdown.Item href="Studentform">Add Student</NavDropdown.Item>
                  <NavDropdown.Item href="Studentlist">
                    Student-List
                  </NavDropdown.Item>
                  </NavDropdown>
                  </Nav>
                  <Nav className="me-auto">
              <NavDropdown title="Marksheet" id="basic-nav-dropdown">
                  <NavDropdown.Item href="Marksheetform">Add Marksheet</NavDropdown.Item>
                  <NavDropdown.Item href="Marksheetlist">
                    Marksheet-List
                  </NavDropdown.Item>
                  </NavDropdown>
                  </Nav>
                  <Nav className="me-auto">
              <NavDropdown title="Role" id="basic-nav-dropdown">
                  <NavDropdown.Item href="Addrole">Add Role</NavDropdown.Item>
                  <NavDropdown.Item href="Rolelist">
                    Role-List
                  </NavDropdown.Item>
                  </NavDropdown>
                  </Nav>
                  
                <Link className='nav-link' to="/login" onClick={() => handleLogout()}>Logout({JSON.parse(auth)?.firstName})</Link>
                
              </Nav>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Dashboard;