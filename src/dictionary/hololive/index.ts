import { hololiveEn } from './en';
import { hololiveId } from './id';
import { hololiveJp } from './jp';

export const hololive: LiverData[] = [
  {
    name: ['', ''],
    alias: [
      ['ほろらいぶ', 'Hololive'],
      ['ほろ', 'Hololive'],
    ],
    marks: ['▶'],
    tags: [],
    fans: ['ホロリス'],
    twitter: ['@hololivetv', '@hololive_En'],
    flags: {
      isGroupName: true,
    },
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

  ...hololiveJp,
  ...hololiveId,
  ...hololiveEn,
];
