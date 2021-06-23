import taplytics from 'taplytics';

const projects = {
  '5fda25b259fc33000e629c03': 'c6ebc194de60e44c6148bbc3316b681ee2e88f32'
};

const TAPLYTICS_SDK_KEY = 'c6ebc194de60e44c6148bbc3316b681ee2e88f32';

export async function get({ params }) {
  const userid = 1;

  const api = taplytics(TAPLYTICS_SDK_KEY);
  const status = await api.isFeatureFlagEnabled(userid, params.featureFlag);

  return {
    body: {
      featureFlag: params.featureFlag,
      status: status
    }
  }
}
