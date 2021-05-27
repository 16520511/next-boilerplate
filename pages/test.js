import Layout from '../client/components/MainLayout'
import withAuth from '../client/hoc/withAuth'
import withAuthServerside from '../client/hoc/withAuthServerside'

function Test(props) {
  return (
    <Layout>
      <p>Có quyền truy cập trang</p>
    </Layout>
  )
}
export const getServerSideProps = withAuthServerside;
export default withAuth(Test, ['default', 'admin']);