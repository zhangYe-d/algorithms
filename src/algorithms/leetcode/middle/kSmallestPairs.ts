function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  const arr: Sum[] = [];
  let count: number = 0;
  const set: Set<string> = new Set();
  const heap: Heap<{ level: number; value: Sum; key: string }> = new Heap();
  heap.add({
    level: nums1[0] + nums2[0],
    value: [nums1[0], nums2[0]],
    key: "0-0",
  });
  set.add("0-0");
  do {
    const { key = "0-0", value } = heap.extract() || {};
    arr.push(value as Sum);
    const index1 = parseInt(key.split("-")[0]);
    const index2 = parseInt(key.split("-")[1]);
    let nextKey1, nextKey2;
    if (
      index1 + 1 < nums1.length &&
      !set.has((nextKey1 = `${index1 + 1}-${index2}`))
    ) {
      heap.add({
        key: nextKey1,
        value: [nums1[index1 + 1], nums2[index2]],
        level: nums1[index1 + 1] + nums2[index2],
      });
      set.add(nextKey1);
    }

    if (
      index2 + 1 < nums2.length &&
      !set.has((nextKey2 = `${index1}-${index2 + 1}`))
    ) {
      heap.add({
        key: nextKey2,
        value: [nums1[index1], nums2[index2 + 1]],
        level: nums1[index1] + nums2[index2 + 1],
      });
      set.add(nextKey2);
    }
    count++;
  } while (count < k);
  return arr;
}

type Sum = [number, number];

interface HeapItem {
  level: number;
}
class Heap<T extends HeapItem> {
  private array: T[];
  constructor() {
    this.array = [];
  }

  add(item: T) {
    this.array.push(item);
    this.heapfyUp(item, this.array.length - 1);
  }

  heapfyUp(item, index) {
    if (index !== 0) {
      const parentIndex = ((index + 1) >> 1) - 1;
      const parent = this.array[parentIndex];
      if (parent.level > item.level) {
        [this.array[parentIndex], this.array[index]] = [
          this.array[index],
          this.array[parentIndex],
        ];
        this.heapfyUp(item, parentIndex);
      }
    }
  }

  heapfyDown(item, index) {
    if (((index + 1) << 1) - 1 < this.array.length) {
      const leftIndex = ((index + 1) << 1) - 1,
        rightIndex = (index + 1) << 1,
        left = this.array[leftIndex],
        right = this.array[rightIndex] || { level: Infinity };

      if (item.level < left.level && item.level < right.level) {
        return;
      } else if (left.level > right.level) {
        [this.array[rightIndex], this.array[index]] = [
          this.array[index],
          this.array[rightIndex],
        ];
        this.heapfyDown(item, rightIndex);
      } else {
        [this.array[leftIndex], this.array[index]] = [
          this.array[index],
          this.array[leftIndex],
        ];
        this.heapfyDown(item, leftIndex);
      }
    }
  }

  extract(): T | undefined {
    if (this.array.length === 0) return;
    [this.array[0], this.array[this.array.length - 1]] = [
      this.array[this.array.length - 1],
      this.array[0],
    ];
    const item = this.array.pop();
    if (this.array.length) this.heapfyDown(this.array[0], 0);
    return item;
  }
}
