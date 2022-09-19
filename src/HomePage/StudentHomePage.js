import React from 'react';
import NavigationBar from './components/NavigationBar';
import SidebarStudent from './components/SidebarStudent';
import { Container } from './TeacherHomePage';
import Wallpaper from '../assets/wallpaper.jpg';
import Footer from './components/Footer';
function StudentHomePage() {
  return (
    <>
      <NavigationBar />
      <img
        src={Wallpaper}
        alt="teacher"
        style={{ width: '100%', height: '100%' }}
      />
      <Footer />
      <SidebarStudent />
    </>
  );
}
export default StudentHomePage;
