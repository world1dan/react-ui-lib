module.exports = {
    stories: ['../src/**/*.stories.tsx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

    framework: '@storybook/react',
    addons: ['storybook-css-modules-preset'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        })
        return config
    },
}
