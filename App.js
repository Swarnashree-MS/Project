import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import Header from './components/Header';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import CourseDetail from './CourseDetail'; // Import CourseDetail component
import CoursePage from './CoursePage'; // Import CoursePage component

// Import images
import webDevImage from './images/web-development.png';
import digitalMarketingImage from './images/web-dev.png.png';
import dataScienceImage from './images/data-science.png';
import basicEnglish from './images/Basic English.png';
import basicNetworking from './images/Basic networking.png';
import beginnerUi from './images/Beginner ui.png';

const courses = [
  { title: 'Web Development Basics', hours: 45, videos: 20, students: 1900, image: webDevImage },
  { title: 'Digital Marketing 101', hours: 62, videos: 32, students: 930, image: digitalMarketingImage },
  { title: 'Data Science Fundamentals', hours: 8, videos: 46, students: 1043, image: dataScienceImage },
  { title: 'Basic English', hours: 45, videos: 20, students: 1900, image: basicEnglish },
  { title: 'Basic Networking', hours: 62, videos: 32, students: 930, image: basicNetworking },
  { title: 'Beginner UI/UX', hours: 8, videos: 46, students: 1043, image: beginnerUi },
  // Add more courses as needed
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter courses based on the search term
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            {/* Route for the home page (course list) */}
            <Route
              path="/"
              element={
                <>
                  <h1 className="text-3xl font-bold my-4">Search for Courses...</h1>
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCourses.map((course, index) => (
                      <CourseCard key={index} {...course} />
                    ))}
                  </div>
                </>
              }
            />

            {/* Route for the course detail page */}
            <Route path="/course/:courseTitle" element={<CourseDetail />} />

            {/* Route for the course page */}
            <Route path="/course-page" element={<CoursePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;