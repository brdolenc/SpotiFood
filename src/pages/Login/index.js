import React, { useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import { MdExitToApp } from "react-icons/md";

import { Container, Grid, Button } from "@material-ui/core";

import Logo from "../../components/Logo";

const Login = () => {
  const getHashParams = () => {
    const hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);

    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    return hashParams;
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

    window.open(
      `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=user-read-private%20user-read-email`,
      "_self"
    );
  };

  const handleLogin = (token, type, expiresIn) => {
    localStorage.setItem("@SpotiFood:token", token);
    localStorage.setItem("@SpotiFood:type", type);
    localStorage.setItem("@SpotiFood:expires_in", expiresIn);

    window.history.pushState({ urlPath: "/auth" }, "", "/auth");
    window.location.reload();

    return (
      <Switch>
        <Redirect path="/auth" to="/home" />
      </Switch>
    );
  };

  useEffect(() => {
    const {
      access_token: accessToken,
      token_type: tokenType,
      expires_in: expiresIn,
    } = getHashParams();

    if (accessToken) {
      handleLogin(accessToken, tokenType, expiresIn);
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        alignItems="center"
        alignContent="center"
        justify="center"
        style={{ minHeight: "95vh" }}
      >
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<MdExitToApp />}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
