/**
 * 给定一个带有开始时间和结束时间的活动数组，求最大时间兼容的活动集合
 * @param {object[]} activityArray 活动数组，已经按结束时间排序
 * @returns
 */
function activitySelect(activityArray) {
	const starts = activityArray.map(activity => activity.start)
	const ends = activityArray.map(activity => activity.end)

	const anwser = new Set()
	if (activityArray.length !== 0) {
		anwser.add(activityArray[0])
	}

	for (let i = 1, j = 0; i < activityArray.length; i++) {
		if (starts[i] > ends[j]) {
			anwser.add(activityArray[i])
			j = i
		}
	}

	return anwser
}

// test

console.log(
	activitySelect([
		{ start: 1, end: 4 },
		{ start: 3, end: 5 },
		{ start: 0, end: 6 },
		{ start: 5, end: 7 },
		{ start: 3, end: 9 },
		{ start: 5, end: 9 },
		{ start: 6, end: 10 },
		{ start: 8, end: 11 },
		{ start: 8, end: 12 },
		{ start: 2, end: 14 },
		{ start: 12, end: 16 },
	])
)
