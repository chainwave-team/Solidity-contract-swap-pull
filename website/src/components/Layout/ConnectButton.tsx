import useWeb3 from "../../hooks/useWeb3"
import Button from "../Button"
import Modal, { useModal } from "../Modal"

const ConnectButton = () => {
  const { active, account, connect, disconnect } = useWeb3()
  const [open, { openModal, closeModal }] = useModal()

  const handleDisconnect = () => {
    closeModal()
    disconnect()
  }

  return !!account 
    ? (
      <>
        <a onClick={openModal}>
          {`${account.slice(0, 5)}...${account.slice(account.length - 4, account.length)}`}
        </a>

        <Modal
          open={open && active} 
          onClose={closeModal} 
          title="Account" 
          content={account} 
          footer={(
            <a role="button" className="text-sm" onClick={handleDisconnect}>Disconnect</a>
          )}
        />
      </>
    ) : <Button variant="primary" onClick={connect}>Connect</Button>
}

export default ConnectButton