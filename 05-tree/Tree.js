class BinaryTreeNode {
    constructor (value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(rootNode){
        this.rootNode = rootNode;
    }

    find(targetValue){
        return this.recursiveFind(this.rootNode, targetValue)
    }

    //pre order traversal example
    recursiveFind(rootNode, targetValue){
        if (!rootNode) {
            return false; //not found
        }
        if (targetValue == rootNode.value){
            return true; //found
        }
        if (targetValue < rootNode.value){
            return this.recursiveFind(rootNode.left, targetValue)
        } else if (targetValue > rootNode.value) {
            return this.recursiveFind(rootNode.right, targetValue)
        }
    }

    add(targetValue){
        if (!this.rootNode){
            this.rootNode = new BinaryTreeNode(targetValue);
        } else {
            this.recursiveAdd(this.rootNode, targetValue)
        }
    }

    recursiveAdd(rootNode, targetValue){
        if(!rootNode){
            return new BinaryTreeNode(targetValue)
        }

        if(targetValue < rootNode.value){
            rootNode.left = this.recursiveAdd(rootNode.left, targetValue)
        }
        if(targetValue > rootNode.value){
            rootNode.right = this.recursiveAdd(rootNode.right, targetValue)
        }

        return rootNode
    }

    sum(){
        return this.recursiveSum(this.rootNode);
    }

    recursiveSum(rootNode){
        if(rootNode == null){
            return 0
        }

        const leftSum = this.recursiveSum(rootNode.left);
        const rightSum = this.recursiveSum(rootNode.right);

        return rootNode.value + leftSum + rightSum
    }
}

module.exports = {BinaryTree, BinaryTreeNode}