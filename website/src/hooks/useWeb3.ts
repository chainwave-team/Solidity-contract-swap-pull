import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
import { useCallback, useEffect, useState } from "react"
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
  const [mintedId, setMintedId] = useState("")
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

  const getContract = useCallback(async () => {
    const networkId = await web3.eth.net.getId();
    const networkData = (CryptoDicks.networks as Record<string, { address: string }>)[networkId];
    return new web3.eth.Contract(
      CryptoDicks.abi as AbiItem | AbiItem[],
      networkData.address
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  async function mint() {
    try {
      const contract = await getContract()
      await contract.methods.claim().send({
        from: account,
        value: web3.utils.toWei('0.001', 'ether')
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {
      if (active) {
        const contract = await getContract()
        const zeroAddress = "0x0000000000000000000000000000000000000000"
        const filter = { from: zeroAddress, to: account }
        contract.events.Transfer({ filter })
          .on("data", (tx: any) => {
            if (tx?.type === "mined") {
              setMintedId(tx?.returnValues.tokenId)
            }
          })
          .on("error", console.log)
      }
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return {
    ...web3React,
    connect,
    disconnect,
    mint,
    mintedId
  }
}

export default useWeb3
