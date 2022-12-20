import React from 'react';

/**
 * This page shows the marks of all students with a specific subject.
 * It also allows the user to update the marks of a student
 * @returns JSX.Element as a page
 */
export default function MakeClass() {
  const [name, setName] = React.useState('');
  const [numOfStudents, setNumOfStudents] = React.useState(0);
  const [students, setStudents] = React.useState([]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      Make Class
    </div>
  );
}
