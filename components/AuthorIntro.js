import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () =>
  <Row>
    <Col md="8">
      {/* AUTHOR INTRO STARTS */}
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://avatars.githubusercontent.com/u/73723028?v=4"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Bem vindo,</h5>
          <p className="welcome-text">
          Meu nome é Pedro Martins Pereira. Sou programador freelancer e filósofo profissional. Este é um site onde compartilho projetos e estudos.
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>

export default AuthorIntro;