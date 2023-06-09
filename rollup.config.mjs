import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import css from "rollup-plugin-import-css";
import copy from "rollup-plugin-copy-assets";

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      vue(), peerDepsExternal(), css(),
      copy({
        assets: [
          "./icons",
          "./icons.css"
        ]
      })
    ]
  }
]