
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage  from '../screens/out/login';
import CadastroPage  from '../screens/out/cadastro';
import HomePage  from '../screens/in/home';
import UsuarioPage  from '../screens/in/usuario';



const AuthRoutes = () => (
    <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/cadastro" component={CadastroPage} />
        <Route>
            <Redirect to="/login" />
        </Route>
    </Switch>
);

const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/usuario" component={UsuarioPage} />
        <Route>
            <Redirect to="/" />
        </Route>
    </Switch>
);

export const Router = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
            {/* <AuthRoutes /> */}
        </BrowserRouter>
    );
};