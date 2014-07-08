angular.module('Extensions', [])
.run(function (){
	Object.defineProperties(Object.prototype, {
		'inject': {
			value: function (options){
				var self = this;
				if(!options) throw "inject receives a function or an array with a function as the last index as parameters";
				if(options instanceof Array){
					var func = options[options.length-1];
					if(func && typeof func === "function") {
						var props = [];
						for(var index = 0; index < options.length-2; index++){
							var prop = self[options[index]]; // throws error if not posible
							if(!prop) continue;
							if(typeof prop === "function"){
								props[index] = function (){
									return prop.apply(self, arguments);
								};
							}
							else props[index] = prop;
						}
						func.apply(self, props);
					}
					else throw "inject needs a function as the last index of the array";
				}
				else {
					if(typeof options === "function"){
						throw "feature not available yet";
					}
					else throw "inject receives a function or an array with a function as the last index as parameters";
				}
				return self;
			}
		}
		,'config': {
			value: function (options){
				var self = this;
				// extend
				return self;
			}
		}
	});
});

(function(window){
	bla = "bla";
	console.log(bla);
	console.log(window.bla);
})({});
	