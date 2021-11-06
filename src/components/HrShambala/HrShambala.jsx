import classes from './HrShambala.module.scss';

const HrShambala = ({ rotate }) => {
  let cls = [classes.HrShambala];

  if (rotate) cls.push(classes.reverse);

  return (
    <div className={cls.join(' ')}>
      <hr />
    </div>
  );
};

export default HrShambala;
