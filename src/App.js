import { useState, useEffect, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loader from './containers/Loader/Loader';
import Main from './containers/Main/Main';
import Course from './containers/Course/Course';

import Layout from './hoc/layout/Layout';

import { Context } from './Context';

const App = () => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 1500);
  }, [setIsLoad]);

  const { data } = useContext(Context);
  console.log(data);

  return (
    <Layout>
      {!isLoad ? (
        <Loader />
      ) : (
        <Switch>
          <Route path="/" exact component={Main} />

          {data.courses.map((course) => {
            return <Route path={course.to} component={Course} />;
          })}

          <Redirect to="/" component={Main} />
          <Main />
        </Switch>
      )}
    </Layout>
  );
};

export default App;
