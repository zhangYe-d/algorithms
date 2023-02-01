/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
	function verifySearchTree(arr, i, j) {
		if (i >= j) {
			return true
		}

		const root = arr[j]
		let rightIndex = j

		for (let k = i; k < j; k++) {
			if (arr[k] > root) {
				rightIndex = k
				break
			}
		}

		for (let k = rightIndex + 1; k < j; k++) {
			if (arr[k] < root) {
				return false
			}
		}

		return (
			verifySearchTree(arr, i, rightIndex - 1) &&
			verifySearchTree(arr, rightIndex, j - 1)
		)
	}

	return verifySearchTree(postorder, 0, postorder.length - 1)
}
