{
  "reactStrictMode": true,
  "swcMinify": true,
  "distDir": "apps/frontend/.next",
  "webpack": (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'apps/frontend');
    return config;
  }
}