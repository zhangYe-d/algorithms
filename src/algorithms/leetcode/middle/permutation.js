/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
	if (s.length === 1) {
		return [s]
	}

	const arr = Array.from(s)
	const ans = []
	const perm = []
	const vis = []

	function backTrack(i) {
		if (i === arr.length) {
			ans.push(perm.join(''))
		}

		for (let j = 0; j < arr.length; j++) {
			if (vis[j]) {
				continue
			}

			perm.push(arr[j])
			vis[j] = true

			backTrack(i + 1)

			perm.pop()
			vis[j] = false
		}
	}

	backTrack(0)

	return [...new Set(ans)]
}
