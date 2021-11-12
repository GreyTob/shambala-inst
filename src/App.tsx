import { useState, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './containers/Loader/Loader';
import Main from './containers/Main/Main';
import Course from './containers/Course/Course';

import Layout from './hoc/layout/Layout';

import { Context } from './Context';


const App: React.FC = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  setTimeout(() => {
    setIsLoad(true);
    sessionStorage.setItem('isFirstLoad', 'true');
  }, 1600);

  const data = useContext(Context);
  
  return (
    <>
      {!isLoad && !sessionStorage.getItem('isFirstLoad') ? (
        <Loader />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />

            {data!.courses.map((course) => (
              <Route path={course.to} element={<Course />} key={course.to} />
            ))}

          </Routes>
        </Layout>
      )}
    </>
  );
};

export default App;
