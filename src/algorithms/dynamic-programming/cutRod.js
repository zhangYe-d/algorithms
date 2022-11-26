/**
 * 给定钢管长度，以及各长度的价格，求最大收益
 * @param {number[]} prices 钢管价格，索引代表长度
 * @param {number} length 给定的一根钢管
 * @param {number} cutcost 切割成本
 * @returns
 */
function cutRod(prices, length, cutcost) {
	let rewards = [0]
	let subrods = [0]

	for (let i = 1; i <= length; i++) {
		let reward = -Infinity

		for (let j = 1; j <= i; j++) {
			// 收益减成本，但是只有在需要切割的时候才会有成本
			let cutReward = prices[j] + rewards[i - j] - (i === j ? 0 : cutcost)
			if (reward < cutReward) {
				reward = cutReward
				subrods[i] = j
			}
		}
		rewards[i] = reward
	}

	return { reward: rewards[length], subrods }
}

function logCutRodSolution(prices, length, cutcost) {
	const { subrods } = cutRod(prices, length, cutcost)

	console.log('subrods', subrods)
	while (length > 0) {
		console.log(subrods[length])
		length -= subrods[length]
	}
}

// test

const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]

logCutRodSolution(prices, 7, 0)
