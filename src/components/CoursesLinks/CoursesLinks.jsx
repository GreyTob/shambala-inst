import classes from './CoursesLinks.module.scss';
import Button from '../Button/Button';

import { useContext } from 'react';
import { Context } from '../../Context';

const CoursesLinks = () => {
  const { data } = useContext(Context);

  return (
    <section className={classes.CoursesLinks}>
      <p>Доступные курсы:</p>
      {data.courses.map((course) => {
        return (
          <Button
            value={course.courseName}
            descr={course.descr}
            key={course.courseName}
            to={course.to}
          />
        );
      })}
    </section>
  );
};

export default CoursesLinks;
