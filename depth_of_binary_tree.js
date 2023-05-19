// Find the depth of a binary tree

const tree = {
    value: 3,
    left: {
      value: 9,
      left: null,
      right: null,
    },
    right: {
      value: 20,
      left: {
        value: 15,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
  };
  

function findTreeDepth(root){
    if(root === null){
        return 0;
    }

    const leftDepth = findTreeDepth(root.left);
    const rightDepth = findTreeDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1
};


console.log(findTreeDepth(tree));
