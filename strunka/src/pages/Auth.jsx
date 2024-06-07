import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { NavLink, useLocation} from "react-router-dom";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

function Auth() {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

    return (
      <Container
        className="d-grid align-items-center justify-content-center" 
        style={{height: window.innerHeight - 54, maxWidth: '100%'}} //height: window.innerHeight - 54 
      > 
        {/* <Header 
          className="d-flex align-items-center"
          style={{}}  
        /> */}
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
          <Form className="d-flex flex-column">
            <Form.Control className="mt-3" placeholder="Введите ваш email..." />
            <Form.Control
              className="mt-3"
              placeholder="Введите ваш пароль..."
            />
            <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 align-self-center">
              {isLogin ? 
                <div className="mb-1">
                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{color: "black"}}>Зарегистрируйтесь!</NavLink>
                </div>
                :
                <div className="mb-1">
                    Есть аккаунт? <NavLink to={LOGIN_ROUTE} style={{color: "black"}}>Войдите!</NavLink>
                </div>
              }
                <Button
                variant={"outline-success"}
                >
                    {isLogin ? 'Войти'  : 'Регистрация'}

                </Button>
            </Row>
          </Form>
        </Card>
        {/* <Footer /> */}
      </Container>
    );
}

export default Auth;