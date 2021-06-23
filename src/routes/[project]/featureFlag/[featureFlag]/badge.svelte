<script context="module">
  export async function load({ page: { params }, fetch, session, context }) {
    const { project, featureFlag } = params;
    const response = await fetch(`/${project}/featureFlag/${featureFlag}`);

    return {
      props: await response.json()
    }
  }
</script>

<script>
  export let featureFlag;
  export let status;

  // let flagWidth = 128;
  // let statusWidth = flagWidth - 25;
</script>


<p>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="20" role="img" aria-label="{featureFlag}: {status}">
  <title>{featureFlag}: {status}</title>
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
    <text aria-hidden="true" x="315" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="510">{featureFlag}</text>
    <text x="315" y="140" transform="scale(.1)" fill="#fff" textLength="510">{featureFlag}</text>
    <text aria-hidden="true" x="775" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="250">{status}</text>
    <text x="775" y="140" transform="scale(.1)" fill="#fff" textLength="250">{status}</text>
  </g>
</svg>
</p>
