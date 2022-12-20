import React from 'react';
import Button from '../components/Button';

/**
 * This page shows a list of students' information.
 * It has a search bar to search for students.
 * Also, it allows the user to add a new student.
 * @returns JSX.Element as a page
 */
export default function Home() {
  const onClickButton = () => {
    console.log('Button clicked');
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold">Requirement</h1>
        <Button
          nameBtn="Recept Student"
          className="bg-green-500 hover:bg-green-600"
          onClickButton={onClickButton}
        />
        <Button
          nameBtn="Make a class list"
          className="bg-green-500 hover:bg-green-600"
          onClickButton={onClickButton}
        />
        <Button
          nameBtn="Search Student"
          className="bg-green-500 hover:bg-green-600"
          onClickButton={onClickButton}
        />
        <Button
          nameBtn="Get a subject score sheet"
          className="bg-green-500 hover:bg-green-600"
          onClickButton={onClickButton}
        />
        <Button
          nameBtn="Make a summary report"
          className="bg-green-500 hover:bg-green-600"
          onClickButton={onClickButton}
        />
        <Button
          nameBtn="Change rules"
          className="bg-green-500 hover:bg-green-600"
          onClickButton={onClickButton}
        />
      </main>
    </div>
  );
}
