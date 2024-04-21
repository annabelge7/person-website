'use client'
import { Button, Label, Input } from '../atoms'
import Modal from '../atoms/modal'
import { useState } from 'react'

export default function ContactButton() {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [messageSent, setMessageSent] = useState(false)

  const handleSend = (event) => {
    event.preventDefault() //prevent page from reloading wehn you hit send
    setMessageSent(true)
  }

  return (
    <div>
      <Button
        onClick={() => {
          setShowModal(true)
          setMessage('') //clear message
          setEmail('')
          setName('') //clear name when reopen
          setMessageSent(false)
        }}
        text="Contact"
      ></Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {messageSent ? (
            <div>
              <Label text={'Message Sent!'} />
              <br />
              <Button text="Close" onClick={() => setShowModal(false)} />
            </div>
          ) : (
            <form onSubmit={handleSend}>
              <Label text={'Name:'} />
              <Input
                type="text"
                value={name}
                handleChange={(e) => setName(e.target.value)}
              />
              <br />
              <Label text={'Email:'} />
              <Input
                type="text"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <Label text={'Message:'} />
              <Input
                type="textarea"
                value={message}
                handleChange={(e) => setMessage(e.target.value)}
              />
              <br />
              <Button type="submit" text="Send" />
            </form>
          )}
        </Modal>
      )}
    </div>
  )
}
