import Image from 'next/image'
import { Container} from "react-bootstrap";
import Layout from './MainLayout';

export default function _404() {
  return (
      <Layout>
        <Container className="text-center">
          <Image src="https://sbx-business-v2.payme.vn/images/error.png" width={500} height={384} layout="fixed"></Image>
          <h5>404</h5>
        </Container>
      </Layout>
  )
}