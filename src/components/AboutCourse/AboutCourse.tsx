import { useState } from 'react';
import classes from './AboutCourse.module.scss';
import Hr from '../Hr/Hr';
import Loader from 'react-loader-spinner';


import acroyoga from '../../assets/photo/acroyoga.jpg';
// import neurophysiology from '../../assets/photo/neurophysiology.jpg';


import {ICourses} from '../../interfaces'
type CoursesProps = {
 data : ICourses
}

type PhotosType ={
  [key: string]: string;
}

const AboutCourse: React.FC<CoursesProps>  = ({data}) => {
  //список фотографии. Название должно совпадать с data.photo
  const photos: PhotosType = { acroyoga };

  const [photoOnload, setPhotoOnload] = useState<boolean>(false);

  return (
    <section className={classes.AboutCourse}>
      {data.longDescr ? <p>{data.longDescr}</p> : null}

      {data.photo ? (
        <img
          src={photos[data.photo]}
          alt={data.courseName}
          onLoad={() => setPhotoOnload(true)}
        />
      ) : null}

      {!photoOnload && data.photo ? (
        <Loader type="BallTriangle" color="#6D2E5A" height={80} width={80} />
      ) : null}

      {data.date ? (
        <p>
          <strong>Когда?</strong>
          <br />
          {data.date}
        </p>
      ) : null}

      {data.place ? (
        <p>
          <strong>Где?</strong>
          <br />
          {data.place}
        </p>
      ) : null}
      {data.format ? (
        <p>
          <strong>В каком формате?</strong>
          <br />
          {data.format}
        </p>
      ) : null}

      {data.teachers ? (
        <p>
          <strong>Кто проводит?</strong>
          <br />
          {data.teachers}
        </p>
      ) : null}
      {data.methodology ? (
        <p className={classes['white-space']}>
          <strong>Методологии:</strong>
          <br />
          {data.methodology.replace(/\*/g, '-')}
        </p>
      ) : null}
      <Hr rotate={true} />
      {data.result ? (
        <p>
          <strong>Что в итоге?</strong>
          <br />
          {data.result}
        </p>
      ) : null}
      {data.cost ? (
        <p>
          <strong>Сколько стоит?</strong>
          <br />
          {data.cost}
        </p>
      ) : null}
    </section>
  );
};

export default AboutCourse;
