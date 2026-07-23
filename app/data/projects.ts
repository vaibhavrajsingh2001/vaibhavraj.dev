import type { Project } from '~/types/project'

export const projects = [
  {
    name: 'Web Quark',
    image: '/mern.svg',
    imageWidth: 130,
    imageHeight: 32,
    liveUrl: 'https://quark.vaibhavraj.dev/',
    codeUrl: 'https://github.com/vaibhavrajsingh2001/web-quark',
  },
  {
    name: 'Zemotacqy',
    image: '/zemotacqy.svg',
    imageWidth: 128,
    imageHeight: 32,
    liveUrl: 'https://youtu.be/MHbl3zyy5oE',
    codeUrl: 'https://github.com/vaibhavrajsingh2001/zemotacqy',
  },
  {
    name: 'WASM Tools',
    image: '/WASM-Tools.svg',
    imageWidth: 120,
    imageHeight: 31,
    liveUrl: 'https://wasm.vaibhavraj.dev/',
    codeUrl: 'https://github.com/vaibhavrajsingh2001/wasm-tools',
  },
  {
    name: 'Object Detector',
    image: '/tfjs.svg',
    imageWidth: 105,
    imageHeight: 33,
    liveUrl: 'https://vaibhavrajsingh2001.github.io/cocoSsd-object-detection/',
    codeUrl: 'https://github.com/vaibhavrajsingh2001/object-detection-using-cocoSsd',
  },
  {
    name: 'Arcade Game',
    image: '/arcade.svg',
    imageWidth: 86,
    imageHeight: 30,
    liveUrl: 'https://arcade.vaibhavraj.dev/',
    codeUrl: 'https://github.com/vaibhavrajsingh2001/vrs-arcade',
  },
  {
    name: 'Random Content Generator',
    image: '/puppeteer.svg',
    imageWidth: 136,
    imageHeight: 33,
    liveUrl: 'https://www.npmjs.com/package/random-confession-generator',
    codeUrl: 'https://github.com/vaibhavrajsingh2001/random-confession-generator',
  },
] as const satisfies readonly Project[]
