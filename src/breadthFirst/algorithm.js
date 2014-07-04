angular.module('breadthFirst')
.factory('trees', function (){
	// basic structure of the tree:
	// Array : [node, [first child, [.. ]], [..] ]
	// i.e.: [1,[2,[4],[5]],[3]]
	function Node(index, children){
		this.index = index;
		this.children = children;
	}

	function breadthFirst(root){
		var queue = [], ret = [], node;
		queue.push(root);
		while((node = queue.shift()) != undefined){
			ret.push(node.index);
			if(node.children) node.children.forEach(function (v){
				queue.push(v);
			});
		}
		return ret;
	}
	return { 
		breadthFirst: breadthFirst
		,treeExample: new Node(1, [new Node(2, [new Node(4), new Node(5)]), new Node(3)])
	};

});