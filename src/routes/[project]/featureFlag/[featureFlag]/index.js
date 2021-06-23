import taplytics from 'taplytics';

const projects = {
  '5fda25b259fc33000e629c03': 'c6ebc194de60e44c6148bbc3316b681ee2e88f32'
};

const TAPLYTICS_SDK_KEY = 'c6ebc194de60e44c6148bbc3316b681ee2e88f32';

export async function get({ params: { project, featureFlag } }) {
  const userid = 1;

  const api = taplytics(TAPLYTICS_SDK_KEY);
  const status = await api.isFeatureFlagEnabled(userid, featureFlag);

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="20" role="img" aria-label="${featureFlag}: ${status}">
  <title>${featureFlag}: ${status}</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="96" height="20" rx="3" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="61" height="20" fill="#555"/>
    <rect x="61" width="35" height="20" fill="#a4a61d"/>
    <rect width="96" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
    <text aria-hidden="true" x="315" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="510">${featureFlag}</text>
    <text x="315" y="140" transform="scale(.1)" fill="#fff" textLength="510">${featureFlag}</text>
    <text aria-hidden="true" x="775" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="250">${status}</text>
    <text x="775" y="140" transform="scale(.1)" fill="#fff" textLength="250">${status}</text>
  </g>
</svg>
`;

  return {
    headers: {
      'Content-Type': 'image/svg+xml'
    },
    body: svg
  }
}
