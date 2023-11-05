import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';
import BackGroundIng from './assets/Group 5.svg';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('First Name cannot be empty'),
  lastName: Yup.string().required('Last Name cannot be empty'),
  email: Yup.string().email('Invalid email').required('Looks like this is not an email'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password cannot be empty'),
});

const MyForm: React.FC = () => 
  {
  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  
  return (
    <Container>
      <Img src={BackGroundIng} alt="bacG" />
      <TextContent>
        <h1>Learn to code by watching others</h1>
        <span>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </span>
      </TextContent>
      <Formik
        className="formik"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="FormBox">
          <InputBox>
            <div className="InputBox">
              <Field id="firstName" className="Input" placeholder="Name" type="text" name="name" />
              <ErrorMessage className="Errormessage" name="name" component="div" />
            </div>
            <div className="InputBox">
              <Field className="Input" placeholder="lastName" type="text" name="lastName" />
              <ErrorMessage className="Errormessage" name="lastName" component="div" />
            </div>
            <div className="InputBox">
              <Field className="Input" placeholder="Email" type="text" name="email" />
              <ErrorMessage className="Errormessage" name="email" component="div" />
            </div>
            <div className="InputBox">
              <Field className="Input" placeholder="Password" type="password" name="password" />
              <ErrorMessage className="Errormessage" name="password" component="div" />
            </div>
            <div>
              <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
            </div>
          </InputBox>
        </Form>
      </Formik>
    </Container>
  );
};

export default MyForm;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 35px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 100px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding-top: 100px;
    gap: 10px;
  }
`;

const TextContent = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  z-index: 5;
  gap: 20px;
  width: 33%;
  @media screen and (max-width: 900px) {  
    width: 80%;
    font-weight: 600;
    font-family: 'Courier New', Courier, monospace;
    top: 0;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 4000px;
    height: 900px;
    top: 0;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #38CC8B;
  border: none;
  margin-top: 15px;
  border-radius: 5px;
  cursor: pointer;
  height: 56px;
  color: white;
  &&:hover {
    opacity: 0.9;
  }
`;

