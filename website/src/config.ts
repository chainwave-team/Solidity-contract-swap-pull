const isDev = process.env.NODE_ENV === "development"

export const API_URL = isDev ? "http://localhost:3001" : "https://cryptodicks-api.herokuapp.com"
export const title = "CryptoDicks"
export const description = 'The world of art, the crypto world, a beer with friends, a misunderstanding, patriarchy, feminism, geeks and rainbows, you can buy a banana taped to a wall or a cock, because, why not? "The world is just a big esoteric imbroglio."'

export const features = [
    {
        title: "Full on-chain metadata",
        text: "Avoid power cheating, your can verify dicks attributes by yourself.",
        image: `${API_URL}/svg/1/1/3/0/0/0/0/0/0`
    },
    {
        title: "Decentralized storage",
        text: "Keep it immutable, immortal, unstoppable.",
        image: `${API_URL}/svg/2/2/7/0/0/0/0/0/0`
    },
    {
        title: "Rarity algorithm",
        text: "Each dick is unique and each attribute as an rarity level.",
        image: `${API_URL}/svg/3/13/11/0/0/0/0/0/0`
    },
    {
        title: "Vectorized images",
        text: "Ensure high quality in all sizes.",
        image: `${API_URL}/svg/4/11/1/0/0/0/0/0/0`
    }
]

// From tailwind defaults
export const mediaQueries = {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px",
}