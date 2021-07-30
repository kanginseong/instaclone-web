import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../apollo";

const ME_QUERY = gql`
  query me {
    me {
      id
      username
      avatar
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data } = useQuery(ME_QUERY, {
    skip: !hasToken,
  });
  console.log(data);
  // 'useEffect' runs once a hook is mounted, every time the data changes.
  useEffect(() => {
    if (data?.me === null) {
      // there is a token on LocalStorge but the token did not work on the backend.
      logUserOut();
    }
  }, [data]);
  return { data };
}

export default useUser;
