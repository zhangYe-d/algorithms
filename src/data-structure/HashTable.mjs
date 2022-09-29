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
		const node = LinL.find(nodeValue => nodeValue.key === key)

		if (node) {
			node.value = { key, value }
		} else {
			LinL.insert({ key, value })
		}
	}

	get(key) {
		const node = this.buckets[this.hash(key)].find(
			nodeValue => nodeValue.key === key
		)

		return node ? node.value.value : null
	}

	delete(key) {
		const LinL = this.buckets[this.hash(key)]
		const node = LinL.find(nodeValue => nodeValue.key === key)

		if (node) {
			return LinL.delete(node.value)
		}
	}
}
