'use client';

import { useRouter } from 'next/navigation';
import { Button, Form, Input, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { LoginRequest } from '@/app/api/contracts/auth';
import { useState } from 'react';
import styled from 'styled-components';

type LoginFormValue = {
  id: string;
  password: string;
};

const Login = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const submit = (command: LoginRequest) => {
    console.log('command', command);
    router.push('/calendar');
  };

  return (
    <StyledSection>
      <StyledCard>
        <StyledLogo>
          <StyledTitle>SNIP</StyledTitle>
          <StyledLoginText>로그인</StyledLoginText>
        </StyledLogo>

        {isLoading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} />} />
        ) : (
          <StyledForm layout="vertical" autoComplete="off" onFinish={submit}>
            <StyledFormItem name="id" rules={[{ required: true, message: '이이디를 입력해주세요.' }]}>
              <Input size="large" placeholder="아이디" />
            </StyledFormItem>
            <StyledFormItem name="password" rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}>
              <Input.Password size="large" placeholder="비밀번호" />
            </StyledFormItem>
            <StyledFormItem>
              <Button type="primary" size="large" block htmlType="submit">
                로그인
              </Button>
            </StyledFormItem>
          </StyledForm>
        )}
      </StyledCard>
    </StyledSection>
  );
};

export default Login;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(79.4% 100% at 25.1% 100%, #d261ff 0%, rgba(210, 97, 255, 0) 100%),
    radial-gradient(57.3% 100% at 76.2% 100%, #00a6ff 0%, rgba(0, 187, 255, 0) 100%);
`;
const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  width: 400px;
  padding: 40px 30px 30px;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 15%), 0 8px 16px rgb(0 0 0 / 2%);
  box-sizing: border-box;
`;
const StyledLogo = styled.div`
  margin-bottom: 50px;
`;
const StyledTitle = styled.h1`
  font-family: PyeongChangPeace-Bold;
  font-size: 60px;
  margin: 0 0 60px 0;
`;
const StyledLoginText = styled.p`
  color: #4263eb;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  margin-top: 10px;
`;
const StyledForm = styled(Form<LoginFormValue>)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const StyledFormItem = styled(Form.Item<LoginFormValue>)`
  margin: 0;
`;
