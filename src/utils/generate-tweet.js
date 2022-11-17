import { greetingsTemplate, messagesTemplate } from '../base/template'

const generateTweet = ({ address, amount, productOrCoverKey, link }) => {
  const greeting = greetingsTemplate[Math.floor(Math.random() * greetingsTemplate.length)]
  const message = messagesTemplate[Math.floor(Math.random() * messagesTemplate.length)]

  return message({ greeting, address, amount, productOrCoverKey, link })
}

export { generateTweet }
