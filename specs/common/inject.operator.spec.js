describe("My own 'with' operator called 'inject'", function() {
	beforeEach(module("Extensions"))
	var context;
	beforeEach(function (){
		function secondLevel (){
			this.secondLevelProp = 2;
			this.secondLevelFunc = function (){
				return 2;
			};
		}
		function firstLevel (){
			this.firstLevelProp = 1;
			this.firstLevelFunc = function (){
				return 1;
			};
		}
		firstLevel.prototype = new secondLevel();
		function self() {
			this.ownProp = true;
			this.ownFunc = function (){
				return true;
			};
		}
		self.prototype = new firstLevel();
		context = new self();
	});
	describe("initial settings", function() {
		it("has own properties", function() {
			expect(context.ownProp).toBeTruthy();
			expect(context.ownFunc()).toBeTruthy();
		});
		it("finds inheritance correctly", function() {
			expect(context.firstLevelProp).toBe(1);
			expect(context.firstLevelFunc).toBeDefined();
			expect(context.firstLevelFunc()).toBe(1);
			expect(context.secondLevelProp).toBe(2);
			expect(context.secondLevelFunc).toBeDefined();
			expect(context.secondLevelFunc()).toBe(2);
		});
	});
	describe("Functionality", function() {
		it("should add own properties", function() {
			var prop, func;
			context.inject(['ownProp', 'ownFunc', function (ownProp, ownFunc){
				prop = ownProp;
				func = ownFunc();
			}]);
			expect(prop).toBeTruthy();
			expect(func).toBeTruthy();
		});
		it("finds first level properties", function() {
			var prop, func;
			context.inject(['firstLevelProp', 'firstLevelFunc', function (firstLevelProp, firstLevelFunc){
				prop = firstLevelProp;
				func = firstLevelFunc();
			}]);
			expect(prop).toBe(1);
			expect(func).toBe(1);
		});
		it("finds second level properties", function() {
			var prop, func;
			context.inject(['secondLevelProp', 'secondLevelFunc', function (secondLevelProp, secondLevelFunc){
				prop = secondLevelProp;
				func = secondLevelFunc();
			}]);
			expect(prop).toBe(1);
			expect(func).toBe(1);
		});
	});
	describe("Syntax", function() {
		it("should respect diferent syntax", function() {
			var prop, func;
			context.inject(function (ownProp){
				prop = ownProp;
			});
			expect(prop).toBeTruthy();
		});
	});
	describe("Performance", function() {
		it("should be faster than the original with operator");
	});
});