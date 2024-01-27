class NumArray:

    def __init__(self, nums):
        self.cumulative_sum = [0]
        for num in nums:
            self.cumulative_sum.append(self.cumulative_sum[-1] + num)

    def sumRange(self, left, right):
        return self.cumulative_sum[right + 1] - self.cumulative_sum[left]
    


numArray = NumArray([1, 2, 3, 4])
print(numArray.sumRange(0, 2))  # Output: 6
print(numArray.sumRange(1, 3))  # Output: 9
