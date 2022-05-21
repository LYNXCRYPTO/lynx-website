export default `<strong>FIGURE 1. </strong>A simplified overview of a Modified Merkle Patricia Trie. Starting from the bottom, pairs of buckets containing information are concatenated together and hashed. This process is repeated until only one hash exists. This hash at the top of the trie represents the root hash. If any information is modified within the original trie (left), it is easy to detect this change as there will be an inconsistency existing somewhere up the chain in the modified trie (right).`