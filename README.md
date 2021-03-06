[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c2a5d15cebcd4513af38b94baa63f1f8)](https://app.codacy.com/gh/daniel4ntunes/SpotiFood?utm_source=github.com&utm_medium=referral&utm_content=daniel4ntunes/SpotiFood&utm_campaign=Badge_Grade)
[![Netlify Status](https://api.netlify.com/api/v1/badges/76cdedac-a8db-46cf-945c-af88116a5a62/deploy-status)](https://app.netlify.com/sites/spotifood-daniel4ntunes/deploys)

# REACT CHALLENGE

Create a web application called Spotifood used to display the preferred playlists from iFood's customers. The web application has only one page:

- A page that lists the featured playlists at Spotify according to some criteria.

We're providing you the initial setup and dependencies, but if you need, feel free to add further dependencies while keeping the core untouched (React 16, React Router 5.x, SuperAgent or similar XHR lib).

To run the project, you need to have Node (and npm or yarn) installed:

```console
foo@bar:~$ yarn
```

```console
foo@bar:~$ yarn start
```

## Live Demo

[SpotiFood - React Challenge - Daniel Antunes](https://spotifood-daniel4ntunes.netlify.app/)

## Business rules

- The page is composed of two components:

  - One list of featured playlists
  - One filter component with API filter fields and one local search text input to filter the playlists by "name".

- The filter component should be used to filter the elements displayed by the list of featured playlists.
- The API filter fields and their possible values/type should be mounted by consuming this API **[1. Playlists Filters]**(https://www.mocky.io/v2/5a25fade2e0000213aa90776)
- The featured playlists to be displayed should be consumed from this API **[2. See the documentation from Spotify]**(https://developer.spotify.com/web-api/get-list-featured-playlists/)
- Every time the user change any information on the filter component, the list should be refresh accordingly. In case of API filter field change you should recall the playlists API with the filter parameters every time.
- Considering that we live in a chaotic and fast-changing world, the page should refresh its content every 30 seconds, to see if any information from the Spotify APIs had been changed.

## Hints or Constraints

We will use one API from Spotify Web API. You should follow the Spotify guide in order to create a token needed to access Spotify's API.
To mount the API filter fields on the filter component, you **must** consume the API that provides the metadata about the fields (Link 1).
You could use Material UI, Bootstrap or any other toolkit to accelerate your resolution. We will not provide any UI prototype or design.

## Non functional requirements

As this application will be a worldwide success, it must be prepared to be accessible, responsive, fault tolerant and resilient.
We **strongly recommend** using React to build the application.
Also, briefly elaborate on your solution architecture details, choice of patterns and frameworks.
Fork this repository and submit your code.
