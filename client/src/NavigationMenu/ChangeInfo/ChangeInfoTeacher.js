import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router';
import NavigationBar from '../../HomePage/components/NavigationBar';
import Sidebar from '../../HomePage/components/Sidebar';
import validator from 'validator';

const Username = '19021363';
const Name = 'Nguyễn Văn Quang';
const Email = 'nguyenvanquang@gmail.com';
const PhoneNumber = '0123456789';
const DateOfBirth = '2001-01-01';
const FieldOfStudy = 'Công nghệ thông tin';
const Introduction = 'Yêu màu hồng và ghét sự giả dối';
function ChangeInfoTeacher() {
  const [name, setName] = useState(Name);
  const [email, setEmail] = useState(Email);
  const [phone, setPhone] = useState(PhoneNumber);
  const [dateOfBirth, setDateOfBirth] = useState(DateOfBirth);
  const [fieldOfStudy, setFieldOfStudy] = useState(FieldOfStudy);
  const [introduction, setIntroduction] = useState(Introduction);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
  };
  const handleFieldOfStudy = (e) => {
    setFieldOfStudy(e.target.value);
  };
  const handleIntroduction = (e) => {
    setIntroduction(e.target.value);
  };
  const ref = useRef();
  const history = useHistory();
  const handleSubmit = (e) => {
    if (validator.isEmail(email) && validator.isMobilePhone(phone, 'vi-VN')) {
      alert('Thay đổi thông tin thành công');
      // axios
      //   .post('http://localhost:5000/users/update', {
      //     username: Username,
      //     email: email,
      //     name: name,
      //     phoneNumber: phone,
      //     dateOfBirth: dateOfBirth,
      //     fieldOfStudy: fieldOfStudy,
      //     introduction: introduction,
      //   })
      //   .then((res) => {
      //     console.log(res.data.status);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
    if (!validator.isEmail(email)) {
      alert('Email không hợp lệ');
    }
    if (!validator.isMobilePhone(phone, 'vi-VN')) {
      alert('Số điện thoại không hợp lệ');
    }
    e.preventDefault();
  };
  return (
    <Wrapper>
      <NavigationBar />
      <Container>
        <h1> Cập nhật thông tin </h1>
        <div className="line">
          <div className="FullName">
            <p className="FieldToChange">
              Họ và tên: <Red>*</Red>
            </p>
            <div className="Field2">
              <Input
                name="FullName"
                id="FullName"
                style={{ width: '400px', height: '55px;' }}
                value={name}
                type="text"
                onChange={handleName}
              />
            </div>
          </div>
          <div className="DateOfBirth">
            <p className="FieldToChange">
              Ngày sinh: <Red>*</Red>
            </p>
            <div className="Field2">
              {/* <Input
                name="Day"
                id="Day"
                style={{ width: '100px', height: '55px' }}
                placeholder="01"
              />
              <p className="Slash">/</p>
              <Input
                name="Month"
                id="Month"
                style={{ width: '100px', height: '55px' }}
                placeholder="01"
              />
              <p className="Slash">/</p>
              <Input
                name="Year"
                id="Year"
                style={{ width: '100px', height: '55px' }}
                placeholder="2000"
              /> */}
              <Input
                name="FullName"
                id="FullName"
                style={{ width: '400px', height: '55px;' }}
                type="text"
                value={dateOfBirth}
                ref={ref}
                onFocus={() => (ref.current.type = 'date')}
                onBlur={() => {
                  ref.current.type = 'text';
                  ref.current.value = dateOfBirth;
                }}
                onChange={handleDateOfBirth}
              />
            </div>
          </div>
        </div>

        <div className="line">
          <div className="Email">
            <p className="FieldToChange">
              Email: <Red>*</Red>
            </p>
            <div className="Field2">
              <Input
                name="Email"
                id="Email"
                style={{ width: '400px', height: '55px;' }}
                value={email}
                type="email"
                onChange={handleEmail}
              />
            </div>
          </div>
          <div className="Identifier">
            <p className="FieldToChange">Mã số giảng viên/sinh viên: </p>
            <div className="Field2">
              <Input
                name="ConstID"
                id="ConstID"
                type="text"
                value="GV21082102"
                disabled
                style={{
                  width: '400px',
                  height: '55px',
                  backgroundColor: '#404E68',
                  color: 'white',
                }}
              />
            </div>
          </div>
        </div>

        <div className="line">
          <div className="Major">
            <p className="FieldToChange">Chuyên ngành: </p>
            <div className="Field2">
              <Input
                name="Major"
                id="Major"
                type="text"
                style={{ width: '400px', height: '55px;' }}
                value={fieldOfStudy}
                onChange={handleFieldOfStudy}
              />
            </div>
          </div>
          <div className="Phone">
            <p className="FieldToChange">Số điện thoại: </p>
            <div className="Field2">
              <Input
                name="Phone"
                id="Phone"
                type="tel"
                style={{ width: '400px', height: '55px;' }}
                value={phone}
                onChange={handlePhone}
              />
            </div>
          </div>
        </div>

        <div className="desc">
          <div className="Description">
            <p className="FieldToChange">Giới thiệu: </p>
            <div className="Field1">
              <Textarea
                type="textarea"
                name="Description"
                id="Description"
                style={{ width: '900px', height: '140px' }}
                value={introduction}
                onChange={handleIntroduction}
              ></Textarea>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <Button id="submit" onClick={handleSubmit}>
            <p className="Submit">Cập nhật</p>
          </Button>
          <Button
            id="cancel"
            onClick={(e) => {
              e.preventDefault();
              history.push('/teacherHomepage');
            }}
          >
            <p className="Cancel">Hủy</p>
          </Button>
        </div>
      </Container>
      <Sidebar />
    </Wrapper>
  );
}
const Textarea = styled.textarea`
  border: 1px solid #cddedf;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 20px;
  transition-timing-function: ease-in-out;
  padding: 10px 10px;
  margin: 0px 0px;
  &:active {
    border: 1px solid #0ba1f5;
  }
`;
const Red = styled.span`
  color: red;
  margin-left: 0px;
`;
const Wrapper = styled.div`
  background-color: #f4f5fa;
`;
const Container = styled.div`
  width: 1100px;
  margin: auto;
  margin-top: 50px;
  h1 {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 0.3px;
    text-align: center;
    margin: 0px 0px 0px 0px;
  }
  div {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: left;
    letter-spacing: 0.3px;
  }
  div > div {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0px 50px;
  }
  div > div > div {
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 0px 0px;
  }
  div > div > .FieldToChange {
    position: left;
    line-height: 28px;
    width: 300px;
  }

  .line,
  .desc {
    margin: 50px 0px 50px 0px;
  }
  .wrapper {
    width: 100%;
    margin: 10px 0px 10px 0px;
    display: flex;
    justify-content: flex-end;
  }
  .Field {
    background: #ffffff;
    border: 1px solid #cddedf;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .Field1 {
    width: 900px;
    height: 140px;
  }
  .Field2 {
    width: 400px;
    height: 55px;
  }

  .Submit {
    margin: 0px 0px;
    width: 180px;
    height: 50px;
    border-radius: 8px;
    line-height: 50px;
    background: #30c563;
    &:hover {
      color: rgb(51, 255, 119);
    }
  }
  .Cancel {
    margin: 0px 0px;
    width: 180px;
    height: 50px;
    border-radius: 8px;
    line-height: 50px;
    background: #e85656;
    &:hover {
      color: rgb(255, 127, 127);
    }
  }
  #Day,
  #Month,
  #Year,
  .Slash {
    margin: 0px 16px 0px 0px;
  }
  .Slash {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 55px;
  }
`;

const Input = styled.input`
  border: 1px solid #cddedf;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 20px;
  transition-timing-function: ease-in-out;
  padding: 10px 10px;
  margin: 0px 0px;
  &:active {
    border: 1px solid #0ba1f5;
  }
`;

const Button = styled.button`
  margin-right: 40px;
  width: 184px;
  height: 54px;
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  border-radius: 10px;
  border-style: none;
  color: #ffffff;
`;

export default ChangeInfoTeacher;
