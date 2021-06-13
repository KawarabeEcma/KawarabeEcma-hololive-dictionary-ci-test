import fs from 'fs';
import path from 'path';

const dictionary = path.join(__dirname, '..', '..', 'dictionary');

/**
 * CSV、TSV形式、GoogleIME向けのテキストファイルを書き出す
 * @param wordSet - 辞書データ
 * @param fileName - 書き出しファイル名
 */
export const dist = (wordSet: WordSet[], fileName: string) => {
  const CSV = wordSet.map(item => item.join(',')).join('\n');
  const TSV = wordSet.map(item => item.join('\t')).join('\n');
  const googleIME = (() => {
    /**
    * String.prototype.replaceの第２引数用
    * @param ｓ - ひらがな１文字
    * @returns - カタカナ１文字
    */
    const replacer = (s: string) => String.fromCharCode(s.charCodeAt(0) + 0x60);

    // GoogleIME用に読み仮名（`item[0]`）をカタカナに変換する
    return wordSet.map(item => {
      item[0] = item[0].replace(/[ぁ-ん]/g, replacer);

      return item.join('\t');
    }).join('\n');
  })();

  // Mac向け辞書データの書き出し
  fs.writeFileSync(
    path.join(dictionary, 'mac', `mac-ime-dict--${fileName}.txt`),
    CSV.replace(/,名詞$/gm, ',普通名詞'),
  );

  // Win標準向け辞書データの書き出し
  fs.writeFileSync(
    path.join(dictionary, 'win', `ms-ime-dict--${fileName}.txt`),
    TSV.replace(/\n/g, '\n\r'),
    {
      encoding: 'utf16le',
    },
  );

  // GoogleIME向け辞書データの書き出し
  fs.writeFileSync(
    path.join(dictionary, 'win', `google-ime-dict--${fileName}.txt`),
    googleIME.replace(/\n/g, '\n\r'),
  );
};