import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
import { useEffectOnce } from "usehooks-ts"
import { AbiItem } from "web3-utils"

import CryptoDicks from '../contracts/CryptoDicks.json'

export const injected = new InjectedConnector({
  supportedChainIds: [
    1, // Ethereum
    3, // Eth testnet: Ropsten
    4, // Eth testnet: Rinkeby
    5, // Eth testnet: Gorli
    42, // Eth testnet: Kovan
    // 137, // Polygon 
    1337, // Localhost ganache 
    // 80001 // Polygon testnet: Mumbai
  ],
})

function useWeb3() {
  const web3React = useWeb3React()
  const { active, account, library: web3, connector, activate, deactivate } = web3React

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  // Auto connect the wallet is it was accepted previously
  useEffectOnce(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized && !active) {
        activate(injected);
      }
    })
  })

  async function mint() {
    try {
      // Instantiate the contract
      const networkId = await web3.eth.net.getId();
      const networkData = (CryptoDicks.networks as Record<string, { address: string }>)[networkId];
      const contract = new web3.eth.Contract(
        CryptoDicks.abi as AbiItem | AbiItem[],
        networkData.address
      )

      // Claim NFT
      let tx = await contract.methods.claim().send({
        from: account,
        value: web3.utils.toWei('0.001', 'ether')
      })

      console.log("New NFT minted!", { tx });
    } catch (error) {
      console.log(error)
    }
  }

  return {
    ...web3React,
    connect,
    disconnect,
    mint,
  }
}

export default useWeb3
