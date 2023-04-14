import { type NextPage } from "next";
import Link from "next/link";
import DefaultTemplate from "~/components/templates/DefaultTemplate";
 
const Home: NextPage = () => {
  /**
    * Cadastro de Usuário, usando JWT para autenticação *OK*
    * Cadastrar cliente. 
    * Cadastrar Produtos/Serviços
    * Cadastrar Proposta para o cliente, selecionando pelo menos 2 produtos/serviços cadastrados.
    * Enviar essa proposta para o e-mail do cliente.
  */

  
  return (
    <DefaultTemplate>
      <div className="flex flex-col items-center justify-center min-h-content bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Features:</h1>
      <ul className="list-disc pl-6">
        <li className="mb-2">
          Cadastro de Usuário, usando JWT para autenticação
          <Link className="ml-2 text-blue-500" href="/signup">
            Cadastrar-se
          </Link>
        </li>
        <li className="mb-2">
          Cadastrar cliente.
          <Link className="ml-2 text-blue-500" href="/create-client">
            Cadastrar cliente
          </Link>
        </li>
        <li className="mb-2">
          Cadastrar Produtos/Serviços
          <Link className="ml-2 text-blue-500" href="/create-product">
            Cadastrar produto/serviço
          </Link>
        </li>
        <li className="mb-2">
          Cadastrar Proposta para o cliente, selecionando pelo menos 2 produtos/serviços cadastrados.
          <Link className="ml-2 text-blue-500" href="/create-proposal">
            Cadastrar proposta
          </Link>
        </li>
        <li>
          Enviar essa proposta para o e-mail do cliente.
        </li>
      </ul>
    </div>
    </DefaultTemplate>
  );
};

export default Home;

