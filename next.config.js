/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bayut-production.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/image/145426814/33973352624c48628e41f2ec460faba4'
            },
            {
                protocol: 'https',
                hostname: 'bayut-production.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
            },
        ],
        domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
    }
}

module.exports = nextConfig