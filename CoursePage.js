import React from 'react';

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Web Development Basics</h1>
            <p className="text-gray-600">Intro</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">HJ, Dimos</p>
            <p className="text-gray-600">Frontend Developer</p>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
        </div>
        <p className="text-gray-600 mt-2">20% Completed</p>
      </div>

      {/* Modules Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Modules</h2>
        <ul className="space-y-2">
          <li className="text-gray-600">Module 1: Introduction</li>
          <li className="text-gray-600">Module 2: Front-End Development</li>
          <li className="text-gray-600">Module 3: Back-End Development</li>
          <li className="text-gray-600">Module 4: Overview</li>
        </ul>
      </div>

      {/* Assignments Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Assignments</h2>
        <ul className="space-y-2">
          <li className="text-gray-600">Assignment 1</li>
          <li className="text-gray-600">Assignment 2</li>
          <li className="text-gray-600">Assignment 3</li>
        </ul>
      </div>

      {/* Quizzes Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Quizzes</h2>
        <ul className="space-y-2">
          <li className="text-gray-600">Quiz 1</li>
          <li className="text-gray-600">Quiz 2</li>
        </ul>
      </div>

      {/* Certification Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Certification</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Start</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Stop</button>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;