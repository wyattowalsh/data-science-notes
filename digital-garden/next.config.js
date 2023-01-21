const repo = 'data-science-notes'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

module.exports = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    swcMinify: true,
        webpack: (config) => {
            config.resolve.fallback = {
                fs: false,
                buffer: false
            };
            return config;
        },
}