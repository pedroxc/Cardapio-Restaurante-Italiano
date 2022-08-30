import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div> <p>
            Desenvolvido por:<a href={'https://pedrocoelhoportfolio.netlify.app/'}> Pedro Xavier Coelho</a>
      </p>
      <p><a href={'https://cursos.alura.com.br/certificate/pedroxaviercoelho/react-biblioteca-react-router'}>
      Certificado
      </a>
      </p></div>
      <Logo />
    </footer>
  );
}