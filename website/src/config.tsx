const isDev = process.env.NODE_ENV === "development"

export const contractAddress = "0x12ecD47A9D8d36F9CaCdc192FD5FaF557C258538"

export const API_URL = isDev ? "http://localhost:3001" : "https://cryptodicks-api.herokuapp.com"
export const title = "CryptoDicks"
export const description = '10,000 unique NTFs with proof of ownership living on the Polygon blockchain and following the ERC-721 standard, but yeah, these are DICKs.'

// From tailwind defaults
export const mediaQueries = {
  "sm": "640px",
  "md": "768px",
  "lg": "1024px",
  "xl": "1280px",
  "2xl": "1536px",
}

export const openSeaCollectionUrl = "https://testnets.opensea.io/collection/cryptodicks-zfaxbhfvgc"
