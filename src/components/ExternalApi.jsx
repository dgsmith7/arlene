import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";
import { getConfig } from "../config";

export const ExternalApiComponent = () => {
  const {
    apiOrigin = "https://auth3-backend-e28n6.ondigitalocean.app",
    audience,
  } = getConfig();

  const [state, setState] = useState({
    showResult: false,
    apiMessage: "",
    error: null,
  });

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(`${apiOrigin}/external`);
      const response = await fetch(`${apiOrigin}/external`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      setState({
        ...state,
        showResult: true,
        apiMessage: responseData,
      });
      console.log(responseData);
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }
  };

  // const handle = (e, fn) => {
  //   e.preventDefault();
  //   fn();
  // };

  return (
    <>
      <div className="mb-5">
        <h1>External API</h1>
        <p className="lead">
          Ping an external API by clicking the button below.
        </p>

        <button
          color="primary"
          className="mt-5"
          onClick={callApi}
          disabled={!audience}
        >
          Ping API
        </button>
      </div>

      <div className="result-block-container">
        {state.showResult && (
          <div className="result-block" data-testid="api-result">
            <h6 className="muted">Result</h6>
            <span>{JSON.stringify(state.apiMessage, null, 2)}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default withAuthenticationRequired(ExternalApiComponent, {
  onRedirecting: () => <Loading />,
});
