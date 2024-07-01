import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AgendaList } from "./agenda/AgendaList";
import { AgendaCreate } from "./agenda/AgendaCreate";
import { AgendaEdit } from "./agenda/AgendaEdit";
import { AgendaShow } from "./agenda/AgendaShow";
import { RekomendasiList } from "./rekomendasi/RekomendasiList";
import { RekomendasiCreate } from "./rekomendasi/RekomendasiCreate";
import { RekomendasiEdit } from "./rekomendasi/RekomendasiEdit";
import { RekomendasiShow } from "./rekomendasi/RekomendasiShow";
import { TemuanList } from "./temuan/TemuanList";
import { TemuanCreate } from "./temuan/TemuanCreate";
import { TemuanEdit } from "./temuan/TemuanEdit";
import { TemuanShow } from "./temuan/TemuanShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AuditManagementSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Agenda"
          list={AgendaList}
          edit={AgendaEdit}
          create={AgendaCreate}
          show={AgendaShow}
        />
        <Resource
          name="Rekomendasi"
          list={RekomendasiList}
          edit={RekomendasiEdit}
          create={RekomendasiCreate}
          show={RekomendasiShow}
        />
        <Resource
          name="Temuan"
          list={TemuanList}
          edit={TemuanEdit}
          create={TemuanCreate}
          show={TemuanShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
