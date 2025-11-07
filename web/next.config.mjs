const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '/web-site';

export default {
  output: 'export',
  basePath: base,
  assetPrefix: base ? `${base}/` : '',
  images: { unoptimized: true },
};
