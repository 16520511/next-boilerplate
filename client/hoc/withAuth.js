import _404 from "../components/404";

const { useRouter } = require("next/router");
const { useState, useEffect } = require("react");
const _ = require('lodash');

export default function withAuth(WrappedComponent, scopes = ['default']) {
  const Wrapper = (props) => {
    const [isReady, setIsReady] = useState(false);
    const router = useRouter();
  
    useEffect(() => {
      const { authInfo } = props;
      if (!authInfo) {
        router.push('/login');
      }
      else {
        const sharedScopes = _.intersection(_.get(authInfo, 'scopes', []), scopes);
        if (!_.isEmpty(sharedScopes));
          setIsReady(true);
      }
    }, [])
  
    return (
      <>
        {!isReady && <_404></_404>}
        {isReady && <WrappedComponent {...props} />}
      </>
    )
  };

  return Wrapper;
}
