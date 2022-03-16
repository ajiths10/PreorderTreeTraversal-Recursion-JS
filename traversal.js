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


      //Preorder Tree Traversal
       preOrder(roott){
           if(roott !==null){
               console.log(roott.value);
               this.preOrder(roott.left);
               this.preOrder(roott.right);
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
  a.insert(11);
  a.insert(15);
  console.log(a.insert(8));

  a.preOrder(a.root);

