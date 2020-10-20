import React from 'react';
import styles from './Contato.module.css';
import photo from '../img/contato.png';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Site | Contato" description="Entre em contato" />
      <img
        height="240"
        width="240"
        src={photo}
        alt="Máquina de escrever | Contato "
      />

      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>v.junior@aluno.ifsp.edu.br</li>
          <li>1399721-9515</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
