export default [`Consensus between two parties is an essential task when transferring information. Given the fact that peer-to-peer networks are exactly that, a trustless platform for rapid exchanges of information, network participants must always have protocols in place for keeping information consistent while acting independently from the rest of the network. Traditional methods for consensus involve selecting a single node or block leader to propose a collection of transactions to be added to a network’s blockchain. Although it is assumed that almost all nodes connected to a network have the technological ability to validate and secure a block, almost all modern blockchain protocols favor designating this power to a single node. Centralizing the act of block validation undermines a network’s efficiency immensely. However, given the synchronous nature of blockchain, this the most practical method for keeping information consistent in a decentralized manner. Sacrificing efficiency for consensus in blockchain applications is the root problem of all issues related to scalability. As such, creating a new protocol in which all network participants are able to contribute to the processing of a transaction, will be necessary for exponentially increasing the throughput of a network.\n\nLynx’s proof-of-consensus algorithm provides an asynchronous method for maintaining network consistency while distributing the processing power for securing transactions. The steps involved for processing a transaction are as follows:`, `A transaction is created, signed, and broadcasted to the rest of the network.`, `Nodes across the network receive the transaction and attempt to validate it. If the transaction is deemed well-formed and valid, approve the transaction by signing its data package. If not, ignore it and restart from step #1.`, `Broadcast and receive signatures of approval to the rest of the network.`, `Sign incoming signatures of approval and check if the 512-bit output begins with a  sequence of consecutive zeros longer than any already existing bit string provided by the network.`, `If the bit string output does in fact begin with a sequence of consecutive zeros longer than any already existing, broadcast that information to the rest of the network as proof of collecting consensus.`, `By providing a bit string output as proof for participating in the processing of a transaction, it can be assumed that a node in possession of an output with the largest quantity of leading consecutive zeros, has gathered more signatures of approval for that particular transaction than anyone else on the network. To put it simply, more agreement or consensus surrounding a transaction produces a higher probability of confidence when determining the most current state of an account. This is an extremely secure method of processing transactions because with every added zero to the proof of consensus, it becomes exponentially more difficult to compute a bit string with more zeros given that there are only a limited number of active accounts participating on the network.\n\nThe processing of transactions or mining on the Lynx Network would not exist if there weren’t incentives. Unlike traditional blockchain applications where block rewards are only allocated to a singular node, multiple nodes will be able to receive rewards directly corresponding to the amount of consensus they receive from the rest of the network. To derive how much reward a node will receive for providing a proof of consensus is as follows:`, "`R = (t + f) * (2^(c/512) - 1)`", `Let <strong>R</strong> represent the reward received for providing a proof of consensus,`, `Let <strong>t</strong> represent the amount to be sent in the transaction,`, `Let <strong>f</strong> represent the transaction fee provided by the sender,`, `Let <strong>c</strong> represent the number of consecutive zeros included in the proof of consensus.`]