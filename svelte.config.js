import adapterNode from '@sveltejs/adapter-node';
import adapterStatic from '@sveltejs/adapter-static';
import adapterVercel from '@sveltejs/adapter-vercel';
import adapterNetlify from '@sveltejs/adapter-netlify';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: getAdapter(),
    csp: { mode: 'auto' },
    alias: {
      $QWER: './QWER',
      $lib: './src/lib',
      $generated: './src/generated',
      $stores: './src/lib/stores',
      $config: './user/config',
      $assets: './user/assets',
      $custom: './user/custom',
      $static: './static',
      $i18n: './src/i18n',
    },
    prerender: {
      entries: [
        ...getBlogs(),
        '/versions.json',
      ],
    },
  },
};

/** @returns {any} */
function getBlogs() {
  return fs.readdirSync("user/blogs", { withFileTypes: true })
    .filter(item => item.isDirectory())
    .map(dir => `/${dir.name}`);
}

function getAdapter() {
  if (Object.keys(process.env).some((key) => key.includes('VERCEL'))) {
    return adapterVercel();
  } else if (Object.keys(process.env).some((key) => key.includes('NETLIFY'))) {
    return adapterNetlify();
  } else if (Object.keys(process.env).some((key) => key.includes('CF_PAGES'))) {
    return adapterCloudflare();
  } else {
    return process.env.ADAPTER === 'node'
      ? adapterNode({ out: 'build' })
      : adapterStatic({
        pages: 'build',
        assets: 'build',
        fallback: undefined,
      });
  }
}

export default config;
