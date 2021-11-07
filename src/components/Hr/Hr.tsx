import classes from './Hr.module.scss';

type rotate = {
  rotate: boolean
}

const Hr:React.FC<rotate> = ( {rotate} ) => {
  
  let cls = !rotate ? classes.Hr + ' ' + classes.HrReverse : classes.Hr;
  return (
    <div className={cls}>
      <hr />
    </div>
  );
};

export default Hr;
