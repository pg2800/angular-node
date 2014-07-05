describe("Breadth First Algorithm", function() {
	beforeEach(module('breadthFirst'));

	describe("Functionality", function() {
		it("should traverse it in order", inject(function (trees){
			expect(trees.breadthFirst(trees.treeExample)).toEqual([1,2,3,4,5]);
		}));
	});
	
});