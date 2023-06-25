import { hololive } from './hololive';
import { holostars } from './holostars';

export const dictionary: LiverData[] = [
  {
    name: ['たにごう もとあき', '谷郷 元昭'],
    alias: [['やごー', 'YAGOO']],
    marks: [],
    tags: [],
    fans: [],
    twitter: ['@tanigox'],
    others: [['やごー', 'YAGOO']],
  },
  {
    name: ['ゆうじんえー', '友人A'],
    alias: [['えーちゃん', 'Aちゃん']],
    marks: ['👓'],
    tags: [
      ['#絵ーちゃん', 'ファンアート'],
      ['#よなよなえーぼいす', 'ボイスツイートリクエスト'],
    ],
    fans: [],
    twitter: ['@achan_UGA'],
  },
  {
    name: ['はるさき のどか', '春先 のどか'],
    alias: [],
    marks: ['📝'],
    tags: [['#のどかあーと', 'ファンアート'], '#春先のどかは研修中'],
    fans: [],
    twitter: ['@harusakinodoka'],
  },

  ...hololive,
  ...holostars,
];
