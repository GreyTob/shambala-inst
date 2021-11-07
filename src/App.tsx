import { useState, useEffect, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loader from './containers/Loader/Loader';
import Main from './containers/Main/Main';
import Course from './containers/Course/Course';

import Layout from './hoc/layout/Layout';

import { Context } from './Context';

const App: React.FC = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const loading = 1600;

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, loading);
  }, [isLoad]);

  const data = useContext(Context);
  

  return (
    <>
      {!isLoad ? (
        <Loader />
      ) : (
        <Layout>
          <Switch>
            <Route path="/" exact component={Main} />

            {data!.courses.map((course) => (
              <Route path={course.to} component={Course} key={course.to} />
            ))}

            <Redirect to="/"/>

          </Switch>
        </Layout>
      )}
    </>
  );
};

export default App;
