# Ethereum gas checker exercise

## TL;DR

Create a frontend webapp that displays the latest Ethereum gas prices.

## The long version

### What's the purpose of this exercise?

This exercise is meant as a fun way for you to demonstrate your frontend skills and apply core Crypto concepts. Perhaps the above TL;DR didn't mean much to you? That's OK! Or you may already be quite familiar with the Web3 world? Regardless, Google is your friend. If you have no experience with blockchain or Ethereum all the better! Always good to learn something new, eh?

### What is Ethereum?

Ethereum is a globally shared cloud service where anyone can deploy code (these pieces of code are called _smart contracts_) and anyone can call the methods of this code (calling a method that writes data to persistent state is called _executing a transaction_). One of the popular applications of this technology is to write code that deals with decentralized money - money that is fully democratic and transparent and isn't being controlled by a small minority.

A popular web-based explorer that lets you query the Ethereum network, the smart contracts on it and their state is [etherscan.io](https://etherscan.io). Don't be afraid to Google to learn more, but be careful not to drown yourself in information.

### And what is gas?

Remember us mentioning that writing data to persistent state in a smart contract is called _executing a transaction_? Well, the Ethereum network requires gas to execute these transactions. When you send [ERC20 tokens](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/), interact with a contract, send ETH or do anything else on the blockchain, you must pay for that computation. That payment is calculated in gas, and gas is always paid in ETH. The more complicated the transaction, the more units of gas you'll have to pay for.

### Does the price of gas rise and fall?

Yep, the price of gas is dynamic and is essentially a product of demand: the more people that are trying to get their transactions processed by the network, the higher it will be. You do have the option of paying an additional fee to get your transaction processed more quickly, but it can get costly quickly.

So now you understand why everyone working with the Ethererum blockchain watches the price of gas so closely - it underpins everything that happens on the network!

### How can I query the current gas prices?

We have provided an endpoint that lists the current gas prices for standard and priority transaction processing. Check it out here - https://api.ethgasstation.info/api/fee-estimate.

You may want to read up on [the different denominations of Ether](https://ethereum.org/en/developers/docs/intro-to-ether/#denominations) as these prices are in _gwei_.

### Cool, so what exactly do I need to build?

We mentioned earlier [Etherscan](https://etherscan.io) - probably the most popular Ethereum blockchain explorer. Etherscan has [a nifty gas tracker page](https://etherscan.io/gastracker). **We'd like you to build your own gas tracker app**.

We're not expecting you to spend more than a few hours on this project, so we're not wanting perfection or for your app to be particularly fully featured. We also want you to have some fun doing this, so feel free to apply your own take on Etherscan's implementation, or go off on a tangent if inspiration strikes!

At Orbs, you can expect to be very involved in product decisions as well as technical, so we like people that can think independently and way up the tradeoffs of an implentation accordingly!

There are some things we'd definitely like to see:

- **The latest gas prices for low, standard and high-priority processing**, with the price displayed in gwei and dollars ($).
- **A modern frontend UI framework (React, Vue, Svelte, etc) and TypeScript are a must. Everything else is up to you!** We believe in using the right tool for the job!
- **An attractive UI and good UX**.
- **Mobile-first design**: it should work for mobile devices, desktops and in-between.
- **Frequent commits**: we like to see how you think and the approach you took to arrive at a solution.

### I have questions!

We hope that _everything is unclear_ and you have a million questions. Google is your friend, good luck!
