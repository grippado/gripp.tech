
const instaURL = 'https://www.instagram.com/ads.advogados/?__a=1';

const listInsta = [];

fetch(instaURL)
  .then(response => response.json())
  .then((r) => {
    r.graphql.user.edge_owner_to_timeline_media.edges.slice(0,4).map((x) => {
      document.querySelector('#instagram .inner .flex').innerHTML += `
        <li>
          <a href="https://www.instagram.com/p/${x.node.shortcode}">
            <img src="${x.node.display_url}">
          </a>
        </li>`;
    })
  });

  