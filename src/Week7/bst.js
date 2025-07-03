"use strict";
class BSTNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
class BST {
    constructor(root = null) {
        this.root = root;
    }
    addNode(val) {
        let head = this.root;
        const bnode = new BSTNode(val);
        if (head === null) {
            head = node;
            return;
        }
        while (head) {
            if (val < head.val) {
            }
        }
    }
    search(val) {
        let head = this.root;
        if (head === null)
            return null;
        while (head) {
            if (head.val > val) {
                head = head.right;
            }
        }
    }
}
