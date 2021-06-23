import taplytics from 'taplytics';

const projects = {
  '5fda25b259fc33000e629c03': 'XXX'
};

const TAPLYTICS_SDK_KEY = 'XXX';

export async function get({ params: { project, featureFlag } }) {
  const userid = 1;

  const sdkKey = projects[project];
  const api = taplytics(sdkKey);
  const status = await api.isFeatureFlagEnabled(userid, featureFlag);

  const length = featureFlag.length;

  const urlWidth = 35;
  const flagTextLength = ((length * 10) + 12) * 10;
  // const rectWidth = Math.max(96, (flagTextLength / 10) + urlWidth);// 128; //96;
  const rectWidth = (flagTextLength / 10) + urlWidth;// 128; //96;

  const urlX = rectWidth - urlWidth; // 61
  const flagTextX = flagTextLength / 2 + 12; // 315; // Midpoint!


  // statusTextX = flagTextX + flagTextLength - 50; // 775;
  const statusTextX = (rectWidth * 10) - (urlWidth * 10) + 165;
  const statusTextLength = 250;

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${rectWidth}" height="20" role="img" aria-label="${featureFlag}: ${status}">
  <title>${featureFlag}: ${status}</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="${rectWidth}" height="20" rx="3" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="${urlX}" height="20" fill="#555"/>
    <rect x="${urlX}" width="${urlWidth}" height="20" fill="#a4a61d"/>
    <rect width="${rectWidth}" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
    <text aria-hidden="true" x="${flagTextX}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${flagTextLength}">${featureFlag}</text>
    <text x="${flagTextX}" y="140" transform="scale(.1)" fill="#fff" textLength="${flagTextLength}">${featureFlag}</text>
    <text aria-hidden="true" x="${statusTextX}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${statusTextLength}">${status}</text>
    <text x="${statusTextX}" y="140" transform="scale(.1)" fill="#fff" textLength="${statusTextLength}">${status}</text>
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
