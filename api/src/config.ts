require('dotenv').config()

// SVG gen. config
export const buildSize = 96;
export const displaySize = 600;

// API config
export const port = process.env.PORT || 3000;
export const api_base_url = process.env.BASE_URI || "http://localhost:3000";

// Web3 config
export const networkUrl = "http://localhost:8545";
export const contractAddress = process.env.CONTRACT_ADDRESS || ""