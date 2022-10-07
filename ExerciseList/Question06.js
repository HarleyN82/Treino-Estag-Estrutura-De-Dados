// Javascript program to find inorder successor of a node
// A Binary Tree Node

class Node
{
	constructor(data)
	{
		this.data=data;
		this.left=this.right=null;
	}
}

// Temporary node for case 2
let temp = new Node();

// function to find left most node in a tree
function leftMostNode(node)
{
	while (node != null && node.left != null)
		node = node.left;
	return node;
}

// function to find right most node in a tree
function rightMostNode(node)
{
	while (node != null && node.right != null)
		node = node.right;
	return node;
}

// recursive function to find the Inorder Successor
// when the right child of node x is null
function findInorderRecursive(root,x)
{
	if (root==null)
		return null;

	if (root==x || (temp = findInorderRecursive(root.left,x))!=null ||
				(temp = findInorderRecursive(root.right,x))!=null)
	{
		if (temp!=null)
		{
			if (root.left == temp)
			{
				console.log( "Inorder Successor of "+x.data);
				console.log( " is "+ root.data + "<br>");
				return null;
			}
		}

		return root;
	}

	return null;
}

// function to find inorder successor of
// a node
function inorderSuccessor(root,x)
{
	// Case1: If right child is not null
	if (x.right != null)
	{
		let inorderSucc = leftMostNode(x.right);
		console.log("Inorder Successor of "+x.data+" is ");
		console.log(inorderSucc.data+"<br>");
	}

	// Case2: If right child is null
	if (x.right == null)
	{
		let f = 0;
		
		let rightMost = rightMostNode(root);

		// case3: If x is the right most node
		if (rightMost == x)
			console.log("No inorder successor! Right most node.\n");
		else
			findInorderRecursive(root, x);
	}
}


// Driver program to test above functions
// Let's construct the binary tree
// as shown in above diagram

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

// Case 1
inorderSuccessor(root, root.right);

// case 2
inorderSuccessor(root, root.left.left);

// case 3
inorderSuccessor(root, root.right.right);

