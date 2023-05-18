import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TextField, Button, Grid } from '@mui/material';
import chdoiso from './img/chuyen_doi_so.png'
import xdnentang from './img/xdnentang.png'
import app1 from './img/app1.PNG'
import app2 from './img/app2.JPG'
import app3 from './img/app3.PNG'
import app4 from './img/app4.PNG'
import formbg from './img/form_bg.png'
import BackupIcon from '@mui/icons-material/Backup';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { AccessAlarm, ThreeDRotation,  } from '@mui/icons-material';
function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">TECHNOFI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Về chúng tôi</Nav.Link>
              <Nav.Link href="#link">Dịch vụ</Nav.Link>
              <Nav.Link href="#link">Dự án đã thực hiện</Nav.Link>
              <Nav.Link href="#link">Liên hệ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* Section 1 */}
      <Container>
          <Row className='d-flex'>
              <div className='col-12 col-md-6 mt-3'>
                  <Row className='m-5'>
                      <h2>
                        GIẢI PHÁP CHUYỂN ĐỔI SỐ TRONG LĨNH VỰC MÔI GIỚI VÀ TƯ VẤN ĐẦU TƯ CK
                      </h2>
                  </Row>
                  <Row className='d-flex'>
                      <div className='col-4'>
                          Chuyên nghiệp <br />
                          <ThreeDRotation style={{fontSize: '90px' }}/>
                      </div>
                      <div className='col-4'>
                          Hiệu quả <br />
                          <AddTaskIcon style={{fontSize: '90px' }}/>
                      </div>
                      <div className='col-4'>
                          
                          Dễ dàng lấy data <br />
                          <BackupIcon  style={{fontSize: '90px' }}/>
                      </div>
                  </Row>

              </div>
              <div className='col-12 col-md-6 mt-3'>
                    <img src={chdoiso} alt='chuyen-doi-so' style={{width: '100%'}} ></img>
              </div>
          </Row>
          <hr />
      </Container>

      {/* Section 2 */}
      <Container>
        <Row>
          <div className='col-12 col-md-6'>
            <img src={xdnentang} alt='thiet-ke-xay-dung-nen-tang' className='mobile-hidden'></img>
          </div>
          <div className='col-12 col-md-6 ps-5 my-auto'>
            <h3 className='mt-4'>THIẾT KẾ VÀ XÂY DỰNG NỀN TẢNG</h3>
            <ul className='text-start m-5'>
                <li>Thu thập data khách hàng</li>
                <li>Quản lý data hiệu quả</li>
                <li>Hô trợ chăm sóc theo nhu cầu</li>
            </ul>
          </div>
        </Row>
        <hr />
      </Container>
        {/* Section3 */}
        <Container >
            <Row className='mt-5 mb-3'>
                <h3>DỰ ÁN ĐÃ THỰC HIỆN</h3>
            </Row>
            <Row className='d-flex flex-wrap'>
                <div className='col-12 col-md-3 p-3 demo'>
                    <img src={app1} alt='app1'></img>
                </div>
                <div className='col-12 col-md-3 p-3 demo'>
                    <img src={app2} alt='app2'></img>
                </div>
                <div className='col-12 col-md-3 p-3 demo'>
                    <img src={app3} alt='app3'></img>
                </div>
                <div className='col-12 col-md-3 p-3 demo'>
                    <img src={app4} alt='app4'></img>
                </div>
            </Row>
            <hr />
        </Container>

        
      {/* Section 4: Form */}
      <Container maxWidth="sm" className='section_form'>
          <div className='col-12 col-md-6 section_form-form'>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h3>ĐĂNG KÝ NGAY ĐỂ ĐƯỢC TƯ VẤN</h3>
                  <TextField
                    required
                    label="Họ và Tên"
                    fullWidth
                    // Add any additional TextField props here
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Số điện thoại"
                    fullWidth
                    // Add any additional TextField props here
                  />
                </Grid>
                <Grid item xs={12}>
                  <button type="submit"  className='form_button'>
                    Đăng ký
                  </button>
                </Grid>
              </Grid>
            </form>

          </div>
          < hr />
      </Container>
    
      <footer>
          <p className='text-start col-md-4 offset-md-2' >
            <b>Liên hệ với chúng tôi </b><br />
            Tầng 4, Toong Embassy Garden, đường Đỗ Nhuận, Bắc Từ Liêm, Hà Nội <br />
            Hotline: 094.630.0290 <br />
            Email: technofi@gmail.com
          </p>
      </footer>
    </div>
  );
}

export default App;
