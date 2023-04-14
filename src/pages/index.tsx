import { type NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import Header from "~/components/molecules/Header";
import DashboardTemplate from "~/components/templates/DashboardTemplate";

import { api } from "~/utils/api";
/**
TODO:
  * Cadastro de Usuário, usando JWT para autenticação *OK*
  * Cadastrar cliente. 
  * Cadastrar Produtos/Serviços
  * Cadastrar Proposta para o cliente, selecionando pelo menos 2 produtos/serviços cadastrados.
  * Enviar essa proposta para o e-mail do cliente.
*/

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardTemplate>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Header />
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/clientes"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Cadastro de clientes →</h3>
              <p className="text-lg">
                Cadastro de clientes, usando JWT para autenticação
              </p>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/produtos"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Cadastro de Produtos →</h3>
              <p className="text-lg">
                Cadastro de Produtos/Serviços
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
          </div>
        </div>
      </DashboardTemplate>
    </>
  );
};

export default Home;

