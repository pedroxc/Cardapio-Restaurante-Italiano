import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/casa.png';
import massa1 from 'assets/massa1.png';
import massa2 from 'assets/massa2.png';

export default function Sobre() {
  const imagens = [massa1, massa2];
  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Sobre
      </h3>
      <div className={styles.sobreNos}>
        <img alt="Casa Aluroni" src={casa} />
        <div className={styles.sobreNos__texto}>
          <p>
          Pagina web criada durante os cursos:REACT: LIDANDO COM ARQUIVOS ESTÁTICOS da alura e React: conhecendo a biblioteca React Router 
          </p>
          <p>
            Feito por:<a href={'https://pedrocoelhoportfolio.netlify.app/'}> Pedro Xavier Coelho</a>
          </p>
          
          <p><a href={'https://cursos.alura.com.br/certificate/pedroxaviercoelho/react-biblioteca-react-router'}>
          Certificado
          </a></p>
          
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}