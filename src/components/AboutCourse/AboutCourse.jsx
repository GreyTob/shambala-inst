import classes from './AboutCourse.module.scss';
import Hr from '../Hr/Hr';

import acroyoga from '../../assets/photo/acroyoga.jpg';
// import neurophysiology from '../../assets/photo/neurophysiology.jpg';
// import three from '../../assets/photo/three.jpg';
// import four from '../../assets/photo/four.jpg';

const AboutCourse = ({ data }) => {
  //список фотографии. Название должно совпадать с data.photo
  const photos = { acroyoga };

  return (
    <section className={classes.AboutCourse}>
      {data.longDescr ? <p>{data.longDescr}</p> : null}

      {data.photo ? (
        <img src={photos[data.photo]} alt={data.courseName} />
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
