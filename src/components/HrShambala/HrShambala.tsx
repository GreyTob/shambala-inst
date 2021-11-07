import classes from './HrShambala.module.scss';

type rotate = {
  rotate: boolean
}

const HrShambala:React.FC<rotate> = ({ rotate }) => {
  let cls = [classes.HrShambala];

  if (rotate) cls.push(classes.reverse);

  return (
    <div className={cls.join(' ')}>
      <hr />
    </div>
  );
};

export default HrShambala;
