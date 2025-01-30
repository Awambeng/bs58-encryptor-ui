import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const rollupConfig = {
  input: "node_modules/bs58/src/esm/index.js", // Entry file
  output: {
    file: "bs58.bundle.js", // Output file
    format: "umd", // UMD format (compatible with browsers)
    name: "bs58", // Global variable name for your library
  },
  plugins: [resolve(), commonjs()], // Resolve dependencies and convert CommonJS modules
};

export default rollupConfig;
