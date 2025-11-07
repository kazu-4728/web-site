const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '/web-site';

export default {
  output: 'export',
  basePath: base,
  assetPrefix: base,
  images: { unoptimized: true },
};
