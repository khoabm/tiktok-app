import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import { publicRoutes } from '~/routes'
import { DefaultLayout } from "~/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            //const Layout = route.defaultLayout === null ? Fragment : DefaultLayout
            const Page = route.component
            let Layout = DefaultLayout
            if (route.defaultLayout) {
              Layout = route.defaultLayout
            } else if (route.defaultLayout === null) {
              Layout = Fragment
            }
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
