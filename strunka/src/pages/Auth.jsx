import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { NavLink, useLocation} from "react-router-dom";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { REGISTRATION_ROUTE } from "../utils/consts";

function Auth() {
    const location = useLocation()


    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}
      >
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto">Авторизация</h2>
          <Form className="d-flex flex-column">
            <Form.Control className="mt-3" placeholder="Введите ваш email..." />
            <Form.Control
              className="mt-3"
              placeholder="Введите ваш пароль..."
            />
            <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 align-self-center">
                <div className="mb-1">
                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{color: "black"}}>Зарегистрироваться</NavLink>
                </div>
                <Button
                // style={{width: 300}}
                variant={"outline-success"}
                >
                    Войти
                </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    );
}

export default Auth;