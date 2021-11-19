import React from 'react';
import Table from './Table';
import Sidebar from '../../HomePage/components/Sidebar';
import NavigationBar from '../../HomePage/components/NavigationBar';
import { Container } from '../../HomePage/TeacherHomePage';
import Footer from '../../HomePage/components/Footer';
const ListOfClasses = () => {
  return (
    <>
      <Container>
        <NavigationBar />
        <Table />
        <Sidebar />
        <Footer />
      </Container>
    </>
  );
};

export default ListOfClasses;
