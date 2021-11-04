import classes from './Hr.module.scss';

const Hr = ({ rotate }) => {
  let cls = !rotate ? classes.Hr + ' ' + classes.HrReverse : classes.Hr;
  return (
    <div className={cls}>
      <hr />
    </div>
  );
};

export default Hr;
