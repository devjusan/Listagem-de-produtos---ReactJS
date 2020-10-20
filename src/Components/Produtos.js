import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Produtos.module.css';
import Head from './Head';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [erro, setErro] = React.useState(null);

  React.useEffect(() => {
    async function getProduto(url) {
      try {
        const dados = await fetch(url);
        const response = await dados.json();
        setProdutos(response);
      } catch (error) {
        setErro('Ocorreu um erro.');
      }
    }

    getProduto('https://ranekapi.origamid.dev/json/api/produto');
  }, []);

  if (erro) return <p>{erro}</p>;
  if (produtos === null) return null;
  return (
    <section className={styles.produtos + ' animeLeft'}>
      <Head title="Site" description="Conheça a nossa variedade" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}></img>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
