import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
    ],
    plugins: [
        external(),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
        }),
        commonjs(),
        postcss({
            modules: true,
            // Or with custom options for `postcss-modules`
            modules: {},
        }),
    ],
}
