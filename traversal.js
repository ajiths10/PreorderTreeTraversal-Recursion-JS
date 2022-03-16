class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
  }
  
  class BinarySeachTree {
        constructor(){
          this.root = null
        }


    //function for insertion operation
    insert(value){
          var newNode = new Node(value);
          if(this.root === null){
              this.root = newNode;
              return this;
          }
          //console.log(this.root)
          let currentNode = this.root;
          while(currentNode){
              if(value < currentNode.value){
                  if(currentNode.left === null){
                      currentNode.left = newNode;
                      return this;
                  }
                  currentNode = currentNode.left;
              } else {
                  if(currentNode.right === null){
                      currentNode.right = newNode;
                      return this;
                  } 
                  currentNode = currentNode.right;
              }
          }
      }


      //PreOrder Tree Traversal
       preOrder(currNode){
           if(currNode !==null){
               console.log(currNode.value);
               //console.log(currNode)
               this.preOrder(currNode.left);
               this.preOrder(currNode.right);
           }else{
               return ;
           }
           
    }
  }
  

  let a = new BinarySeachTree();
  a.insert(9);
  a.insert(7);
  a.insert(13);
  a.insert(6);
  a.insert(4);
  a.insert(10);
  a.insert(12);
  a.insert(1)
  a.insert(11);
  a.insert(15);
  console.log(a.insert(8));

  a.preOrder(a.root);

//structure

    //             9
    //         /      \
    //        7       13
    //      /  \      /   \
    //     6     8    10   15
    //    /             \
    //   4              12
    //  /              /
    // 1             11


    //output
    // 9 7 6 4 1 8 13 10 12 11 15