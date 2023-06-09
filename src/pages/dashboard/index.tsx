import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "~/components/molecules/Header";
import Menu from "~/components/molecules/Menu";
import DefaultTemplate from "~/components/templates/DefaultTemplate";


const DashboardPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultTemplate>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Header />
          <Menu />
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
        
        </div>
      </DefaultTemplate>
    </>
  );
};

export default DashboardPage;
