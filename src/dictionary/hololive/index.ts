import { hololiveEn } from "./en";
import { hololiveId } from "./id";
import { hololiveJp } from "./jp";

export const hololive: LiverData[] = [
  ...hololiveJp,
  ...hololiveId,
  ...hololiveEn,
];
