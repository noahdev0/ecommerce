import dotenv from "dotenv";
import { init } from "next/dist/compiled/webpack/webpack";
import path from "path";
import payload from "payload";
import type { InitOptions } from "payload/config";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

let cashed = (global as any).payload;

if (!cashed) {
  cashed = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("PAYLOAD_SECRET is not defined");
  }
  if (cashed.client) {
    return cashed.client;
  }
  if (!cashed.promise) {
    cashed.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }
  try {
    cashed.client = await cashed.promise;
  } catch (error: unknown) {
    cashed.promise = null;
    throw error;
  }
  return cashed.client;
};
