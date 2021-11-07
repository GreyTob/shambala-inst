import classes from './Layout.module.scss';

const Layout: React.FC = ({ children }) => (
  <div className={classes.Layout}>
    <main>{children}</main>
  </div>
);

export default Layout;
