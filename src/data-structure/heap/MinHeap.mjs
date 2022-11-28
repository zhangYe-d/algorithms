export default class MaxHeap {
	constructor(sourceArray = []) {
		this.array = sourceArray
		this.buildMinHeap(sourceArray)
	}

	parent(i) {
		return (i - 1) >> 1
	}

	left(i) {
		return 2 * i + 1
	}

	right(i) {
		return 2 * i + 2
	}

	minHeapify(array, i) {
		const left = this.left(i)
		const right = this.right(i)
		let min = i

		if (left < this.size && array[i] > array[left]) {
			min = left
		}

		if (right < this.size && array[min] > array[right]) {
			min = right
		}

		if (min !== i) {
			;[array[i], array[min]] = [array[min], array[i]]
			this.minHeapify(array, min)
		}
	}

	buildMinHeap(array) {
		this.size = array.length

		for (let i = this.size >> 1; i > 0; i--) {
			this.minHeapify(array, i - 1)
		}
	}
}

// test
const a = [13, 4, 11111, 2, 4, 577, 22, 1, 76, 34, 35, 112]

const heap = new MaxHeap(a)

console.log(heap.array)

for (let i = 0; i < a.length; i++) {
	const left = heap.array[heap.left(i)] ?? Infinity
	const right = heap.array[heap.right(i)] ?? Infinity

	if (heap.array[i] !== Math.min(heap.array[i], left, right)) {
		console.log('不是最小堆')
		break
	}
}
