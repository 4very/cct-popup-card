import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";

// eslint-disable-next-line no-undef
const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ["./dist"],
  host: "0.0.0.0",
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const plugins = [
  replace({
    preventAssignment: true,
    "process.env.NODE_ENV": dev,
  }),
  nodeResolve({}),
  commonjs(),
  copy({
    targets: [
      {
        src: "dist/cct-popup-card.js",
        dest: "/mnt/a/www/community/cct-popup-card",
      },
      {
        src: "src/index.html",
        dest: "dist/",
      },
    ],
  }),
  typescript(),
  json(),
  babel({
    exclude: ["node_modules/**", "src/index.html"],
  }),
  dev && serve(serveopts),
  dev && livereload("dist"),
  !dev && terser(),
];

export default [
  {
    input: ["src/cct-popup-card.ts"],
    output: {
      dir: "dist",
      format: "es",
    },
    plugins: [...plugins],
  },
];
