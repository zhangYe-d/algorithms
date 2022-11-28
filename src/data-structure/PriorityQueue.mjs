import MaxHeap from './heap/MaxHeap.mjs'

export default class PriorityQueue extends MaxHeap {
	max() {
		return this.array[0]
	}

	extractMax() {
		if (this.size < 1) {
			throw new Error('heap underflow')
		}

		const max = this.max()

		this.array[0] = this.array[this.size - 1]
		this.size -= 1

		this.maxHeapify(this.array, 0)
		return max
	}

	increaseKey(i, key) {
		const { array, parent } = this
		array[i] = key

		while (i > 0 && array[i] > array[parent(i)]) {
			;[array[i], array[parent(i)]] = [array[parent(i)], array[i]]
			i = parent(i)
		}
	}

	insert(key) {
		this.array[this.size + 1] = -Infinity
		this.size += 1

		this.increaseKey(this.size, key)
	}
}

// test

const a = [5, 6, 1, 3, 9, 10, 2, 4]

const qu = new PriorityQueue(a)

console.log('max: ', qu.max())
qu.insert(100)
console.log('max: ', qu.max())
