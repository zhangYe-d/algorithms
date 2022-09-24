import LinkedList from './LinkedList.mjs'

const defaultSize = 31

export default class HashTable {
	constructor(size = defaultSize) {
		this.buckets = Array(size)
			.fill(null)
			.map(() => new LinkedList())
	}

	hash(key) {
		const hash = Array.from(key).reduce(
			(codeSum, char) => codeSum + char.charCodeAt(0),
			0
		)
		return hash % this.buckets.length
	}

	set(key, value) {
		const index = this.hash(key)
		const LinL = this.buckets[index]
		const node = LinL.find(value)

		if (node) {
			node.value = value
		} else {
			LinL.insert(value)
		}
	}

	get(key) {}
}
