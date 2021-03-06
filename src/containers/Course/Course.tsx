import Label from '../../components/Label/Label';
import HrShambala from '../../components/HrShambala/HrShambala';
import Button from '../../components/Button/Button';
import AboutCours from '../../components/AboutCourse/AboutCourse';
import Contacts from '../../components/Contacts/Contacts';

import { useContext } from 'react';
import { Context } from '../../Context';

import {ICourses} from '../../interfaces'

const Course:React.FC = () => {
  const  data  = useContext(Context);

  let course:ICourses;
  data!.courses.forEach((i) => {   
    if (document.location.pathname === i.to) 
      course = i;
  });

  return (
    <>
      <Label name={course!.courseName} descr={course!.descr} />
      
      <HrShambala rotate={false}/>

      <AboutCours data={course!} />\

      <footer>
        <Contacts label="Для записи" descr="пиши сюда:" />

        <Button value="НАЗАД" to="/" />
      </footer>
    </>
  );
};

export default Course;
