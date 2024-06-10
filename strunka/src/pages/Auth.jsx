// import Footer from "../components/Footer/Footer";
// import { NavLink, useLocation} from "react-router-dom";
// import { Card, Container, Form, Button, Row } from "react-bootstrap";
// import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

// function Auth() {
//     const location = useLocation()
//     const isLogin = location.pathname === LOGIN_ROUTE
//     console.log(location)

//     return (
//       <Container
//         className="d-grid align-items-center justify-content-center" 
//         style={{height: window.innerHeight - 54, maxWidth: '100%'}} //height: window.innerHeight - 54 
//       > 
//         {/* <Header 
//           className="d-flex align-items-center"
//           style={{}}  
//         /> */}
//         <Card style={{ width: 600 }} className="p-5">
//           <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
//           <Form className="d-flex flex-column">
//             <Form.Control className="mt-3" placeholder="Введите ваш email..." />
//             <Form.Control

//               placeholder="Введите ваш пароль..."
//             />
//             <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 align-self-center">
//               {isLogin ? 
//                 <div className="mb-1">
//                     Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{color: "black"}}>Зарегистрируйтесь!</NavLink>
//                 </div>
//                 :
//                 <div className="mb-1">
//                     Есть аккаунт? <NavLink to={LOGIN_ROUTE} style={{color: "black"}}>Войдите!</NavLink>
//                 </div>
//               }
//                 <Button

//                 variant={"outline-success"}
//                 >
//                     {isLogin ? 'Войти'  : 'Регистрация'}

//                 </Button>
//             </Row>
//           </Form>
//         </Card>
//         {/* <Footer /> */}
//       </Container>
//     );
// }

// export default Auth;
import React, { useState, useContext } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Card, Container, Form, Button, Row, Alert } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { Context } from '../main';
import './Themes/LightTheme.css';
import './Themes/DarkTheme.css';
import "../components/Header/header.css";

function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { user } = useContext(Context);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^_#~()\[\]:;'\"|\\/<>,.?`\-+=])[A-Za-z\d@$!%*?&^_#~()\[\]:;'\"|\\/<>,.?`\-+=]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Введите корректный email.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Пароль должен содержать минимум 8 символов, включая цифры, строчные и заглавные буквы, специальные символы.');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError('Пароли не совпадают.');
      return;
    }

    setError('');

    const newUser = { email };

    if (isLogin) {
      // Логика авторизации
      user.login(newUser);
      console.log("Авторизация", { email, password });
    } else {
      // Логика регистрации
      user.login(newUser);
      console.log("Регистрация", { email, password });
    }

    navigate('/');
  };

  return (
    <Container className={`d-flex align-items-center justify-content-center ${darkMode ? 'dark-mode' : ''}`}
               style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto mb-4">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            type="password"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <Form.Control
              className="mt-3"
              type="password"
              placeholder="Подтвердите ваш пароль..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 align-self-center">
            {isLogin ?
              <div className="mb-1">
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{ color: "blue", textDecoration: "underline" }}>Зарегистрируйтесь!</NavLink>
              </div>
              :
              <div className="mb-1">
                Есть аккаунт? <NavLink to={LOGIN_ROUTE} style={{ color: "blue", textDecoration: "underline" }}>Войдите!</NavLink>
              </div>
            }
            <Button
              type="submit"
              variant="primary"
              className="mt-3"
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
            <Button onClick={toggleDarkMode} className="mt-3">
              {darkMode ? 'Светлая тема' : 'Темная тема'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}
export default Auth;