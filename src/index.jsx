import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { parseJWT, usuarioAutenticado } from './services/auth';
import './index.css';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro'
import NotFound from './pages/NotFound/NotFound';
import Servicos from './pages/Servicos/Servicos';
import Usuarios from './pages/ListagemUsuarios/ListagemUsuarios';
import EdicaoDadosUsuarioAdm from './pages/EdicaoDadosUsuario/EdicaoDadosUsuarioAdm'
import EdicaoDadosUsuarioCli from './pages/EdicaoDadosUsuario/EdicaoDadosUsuarioCli'
import DadosUsuarioAdm from './pages/DadosUsuario/DadosUsuarioAdm'
import DadosUsuarioCli from './pages/DadosUsuario/DadosUsuarioCli'
import DadosMaqVirAdm from './pages/DadosServico/DadosServicoAdm/DadosMaqVirAdm'
import DadosRedeVirtualAdm from './pages/DadosServico/DadosServicoAdm/DadosRedeVirtualAdm'
import DadosSerApliAdm from './pages/DadosServico/DadosServicoAdm/DadosSerApliAdm'

import DadosMaqVirFun from './pages/DadosServico/DadosServicoFun/DadosMaqVirFun'
import DadosRedeVirtualFun from './pages/DadosServico/DadosServicoFun/DadosRedeVirtualFun'
import DadosSerApliFun from './pages/DadosServico/DadosServicoFun/DadosSerApliFun'

import ContatosAdm from './pages/ContatosLattineGroup/ContatosAdm'
import ContatosFun from './pages/ContatosLattineGroup/ContatosFun'
import ContatosCli from './pages/ContatosLattineGroup/ContatosCli'
import EdicaoContatosAdm from './pages/EdicaoContatos/EdicaoContatosAdm'
import EdicaoContatosFun from './pages/EdicaoContatos/EdicaoContatosFun'
import EscolherServicoAdm from './pages/EscolherServico/EscolherServicoAdm'
import EscolherServicoFun from './pages/EscolherServico/EscolherServicoFun'
import EscolherServicoCli from './pages/EscolherServico/EscolherServicoCli'
import MaquinasVirtuaisAdm from './pages/ListagemServicos/MaquinasVirtuais/MaquinasVirtuaisAdm'
import RedesVirtuaisAdm from './pages/ListagemServicos/RedesVirtuais/RedesVirtuaisAdm'
import SerApliAdm from './pages/ListagemServicos/ServicosAplicacionais/ServicosAplicacionaisAdm'
import MaquinasVirtuaisFun from './pages/ListagemServicos/MaquinasVirtuais/MaquinasVirtuaisFun'
import RedesVirtuaisFun from './pages/ListagemServicos/RedesVirtuais/RedesVirtuaisFun'
import SerApliFun from './pages/ListagemServicos/ServicosAplicacionais/ServicosAplicacionaisFun'

import EdicaoMaqVirFun from './pages/EdicaoServicos/MaquinasVirtuais/EdicaoMaqVirFun'
import EdicaoRedesVirtuaisFun from './pages/EdicaoServicos/RedesVirtuais/EdicaoRedesVirtuaisFun'
import EdicaoSerApliFun from './pages/EdicaoServicos/ServicosAplicacionais/EdicaoSerApliFun'
import EdicaoMaqVirCli from './pages/EdicaoServicos/MaquinasVirtuais/EdicaoMaqVirCli'
import EdicaoRedesVirtuaisCli from './pages/EdicaoServicos/RedesVirtuais/EdicaoRedesVirtuaisCli'
import EdicaoSerApliCli from './pages/EdicaoServicos/ServicosAplicacionais/EdicaoSerApliCli'
import CriacaoMaqVirCli from './pages/CriacaoServico/MaquinasVirtuais/CriacaoMaqVirCli'
import CriacaoRedesVirtuaisCli from './pages/CriacaoServico/RedesVirtuais/CriacaoRedesVirtuaisCli'
import CriacaoSerApliCli from './pages/CriacaoServico/ServicosAplicacionais/CriacaoSerApliCli'
import CriacaoMaqVirFun from './pages/CriacaoServico/MaquinasVirtuais/CriacaoMaqVirFun'
import CriacaoRedesVirtuaisFun from './pages/CriacaoServico/RedesVirtuais/CriacaoRedesVirtuaisFun'
import CriacaoSerApliFun from './pages/CriacaoServico/ServicosAplicacionais/CriacaoSerApliFun'

import MaquinasVirtuaisDoUsuarioFun from './pages/ListagemServicosDoUsuario/MaquinasVirtuais/MaquinasVirtuaisDoUsuarioFun'
import RedesVirtuaisDoUsuarioFun from './pages/ListagemServicosDoUsuario/RedesVirtuais/RedesVirtuaisDoUsuarioFun'
import SerApliDoUsuarioFun from './pages/ListagemServicosDoUsuario/ServicosAplicacionais/ServicosAplicacionaisDoUsuarioFun'
import MaquinasVirtuaisDoUsuarioCli from './pages/ListagemServicosDoUsuario/MaquinasVirtuais/MaquinasVirtuaisDoUsuarioCli'
import RedesVirtuaisDoUsuarioCli from './pages/ListagemServicosDoUsuario/RedesVirtuais/RedesVirtuaisDoUsuarioCli'
import SerApliDoUsuarioCli from './pages/ListagemServicosDoUsuario/ServicosAplicacionais/ServicosAplicacionaisDoUsuarioCli'

import {
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';
import { Switch } from 'react-router-dom';

const PermissaoAdm = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJWT().role === '1' ? (
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const PermissaoCli = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJWT().role === '2' ? (
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const PermissaoFun = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJWT().role === '3' ? (
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={props => <Login {...props} />} />
        <Route path="/cadastro" component={Cadastro} />

        <Route path="/usuarios" component={Usuarios} />
        <PermissaoAdm path="/edicaodadosusuarioadm" component={EdicaoDadosUsuarioAdm} />
        <PermissaoAdm path="/dadosusuarioadm" component={DadosUsuarioAdm} />
        <PermissaoAdm path="/dadosmaqviradm" component={DadosMaqVirAdm} />
        <PermissaoAdm path="/dadosredevirtualadm" component={DadosRedeVirtualAdm} />
        <PermissaoAdm path="/dadosserapliadm" component={DadosSerApliAdm} />
        <PermissaoAdm path="/maquinasvirtuaisadm" component={MaquinasVirtuaisAdm} />
        <PermissaoAdm path="/redesvirtuaisadm" component={RedesVirtuaisAdm} />
        <PermissaoAdm path="/serapliadm" componennpmt={SerApliAdm} />
        <Route exact path="/" component={Home} />

        <PermissaoAdm path="/contatosadm" component={ContatosAdm} />
        <PermissaoAdm path="/edicaocontatosadm" component={EdicaoContatosAdm} />
        <PermissaoAdm path="/escolherservicoadm" component={EscolherServicoAdm} />

        <PermissaoFun path="/escolherservicofun" component={EscolherServicoFun} />
        <PermissaoFun path="/contatosfun" component={ContatosFun} />
        <PermissaoFun path="/edicaocontatosfun" component={EdicaoContatosFun} />
        <PermissaoFun path="/maqvirusuariofun" component={MaquinasVirtuaisDoUsuarioFun} />
        <PermissaoFun path="/redesvirtuaisusuarifun" component={RedesVirtuaisDoUsuarioFun} />
        <PermissaoFun path="/serapliusuariofun" component={SerApliDoUsuarioFun} />
        <PermissaoFun path="/dadosmaqvirfun" component={DadosMaqVirFun} />
        <PermissaoFun path="/dadosredevirtualfun" component={DadosRedeVirtualFun} />
        <PermissaoFun path="/dadosseraplifun" component={DadosSerApliFun} />
        <PermissaoFun path="/maquinasvirtuaisfun" component={MaquinasVirtuaisFun} />
        <PermissaoFun path="/redesvirtuaisfun" component={RedesVirtuaisFun} />
        <PermissaoFun path="/seraplifun" component={SerApliFun} />

        <PermissaoFun path="/edicaomaqvirfun" component={EdicaoMaqVirFun} />
        <PermissaoFun path="/edicaoredesvirtuaisfun" component={EdicaoRedesVirtuaisFun} />
        <PermissaoFun path="/edicaoseraplifun" component={EdicaoSerApliFun} />
        <PermissaoFun path="/criacaomaqvirfun" component={CriacaoMaqVirFun} />
        <PermissaoFun path="/criacaoredesvirtuaisfun" component={CriacaoRedesVirtuaisFun} />
        <PermissaoFun path="/criacaoseraplifun" component={CriacaoSerApliFun} />

        <PermissaoCli path="/escolherservicocli" component={EscolherServicoCli} />
        <PermissaoCli path="/contatoscli" component={ContatosCli} />
        <PermissaoCli path="/edicaomaqvircli" component={EdicaoMaqVirCli} />
        <PermissaoCli path="/edicaoredesvirtuaiscli" component={EdicaoRedesVirtuaisCli} />
        <PermissaoCli path="/edicaoseraplicli" component={EdicaoSerApliCli} />
        <PermissaoCli path="/criacaomaqvircli" component={CriacaoMaqVirCli} />
        <PermissaoCli path="/criacaoredesvirtuaiscli" component={CriacaoRedesVirtuaisCli} />
        <PermissaoCli path="/criacaoseraplicli" component={CriacaoSerApliCli} />
        <PermissaoCli path="/maqvirusuariocli" component={MaquinasVirtuaisDoUsuarioCli} />
        <PermissaoCli path="/redesvirtuaisusuariocli" component={RedesVirtuaisDoUsuarioCli} />
        <PermissaoCli path="/serapliusuariocli" component={SerApliDoUsuarioCli} />
        <PermissaoCli path="/dadosusuariocli" component={DadosUsuarioCli} />
        <PermissaoCli path="/edicaodadosusuariocli" component={EdicaoDadosUsuarioCli} />

        <Route path="/login" component={props => <Login {...props} />} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/usuarios" component={Usuarios} />
        <Route path="/cadastro" component={Cadastro} />

        <Route path="*" component={props => <NotFound {...props} />} />

      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

reportWebVitals();
