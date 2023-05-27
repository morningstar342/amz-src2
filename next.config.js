/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['links.papareact.com', 'fakestoreapi.com']
    },
    env: {
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY
    }
}

module.exports = nextConfig
