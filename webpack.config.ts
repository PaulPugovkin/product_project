import path from 'path'
import webpack from 'webpack'
import {buildWebpackConfig} from './config/build/buildWebpackConfig'
import {BuildEnv, BuildPaths} from './config/build/types/config'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'


export default (env: BuildEnv) => {

    const {mode, port} = env

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const isDev = env.mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    })

    if (isDev) {
        config.plugins.push(new ReactRefreshWebpackPlugin())
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return config
}