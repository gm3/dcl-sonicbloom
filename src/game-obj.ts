// spawn cube
import * as utils from '@dcl/ecs-scene-utils'
import { LoadingIcon } from '@dcl/ui-scene-utils'
import * as myUI from './ui'

export function createCube(pos: Vector3, label: string, sphere?: boolean) {
  const cube = new Entity()
  cube.addComponent(
    new Transform({
      position: pos
    })
  )
  if (sphere === true) {
    cube.addComponent(new SphereShape())
    cube.getComponent(Transform).scale.setAll(0.5)
  } else {
    cube.addComponent(new BoxShape())
  }

  engine.addEntity(cube)
  addLabel(label, cube)

  return cube
}

export const textOffset = new Transform({
  position: new Vector3(0.12, 0.2, 0.16)
})

function spawnCube(x: number, y: number, z: number) {
  // create the entity
  const cube = new Entity()

  // set a transform to the entity
  cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

  // set a shape to the entity
  cube.addComponent(new BoxShape())

  // add the entity to the engine
  engine.addEntity(cube)

  return cube
}



// add label to cube

export function addLabel(text: string, parent: IEntity) {
  const label = new Entity()
  label.setParent(parent)
  label.addComponent(new Billboard())
  label.addComponent(textOffset)
  label.addComponent(new TextShape(text))
  label.getComponent(TextShape).fontSize = 1
  label.getComponent(TextShape).color = Color3.Black()

  engine.addEntity(label)
}

export class solarPunkLink extends Entity {

  winTexture1 = new Texture("https://gm3.github.io/imgs/img/win.png")
  winTexture2 = new Texture("https://gm3.github.io/imgs/img/win.png")
  
  constructor() {
    super() 
    // create a material
    const winMaterial = new Material()
    winMaterial.albedoTexture = this.winTexture1
    this.addComponent(winMaterial)
    this.addComponent(new PlaneShape())
    
    engine.addEntity(this);
  }
  hideLink() {
    const transformHide = new Transform({
      position: new Vector3(1,1,1),
      rotation: new Quaternion(270, 0, 0, 1),
      scale: new Vector3(0,0,0)

    })
    this.addComponentOrReplace(transformHide)
  }
  showLink() {
    const transformShow = new Transform({
      position: new Vector3(1,1,1),
      rotation: new Quaternion(270, 0, 0, 1),
      scale: new Vector3(1.8, 2.5, -1)

    })
    this.addComponentOrReplace(transformShow)

  }
}


export class puzzleRewardLink extends Entity {

  constructor() {
    super() 
    this.addComponent(new Material)
    this.addComponent(new PlaneShape())

    engine.addEntity(this); // test
  }
  hideLink() {
    const transformHide = new Transform({
      
      scale: new Vector3(0, 0, 0)

    })
    this.addComponentOrReplace(transformHide)
  }
  showLink() {
    const transformShow = new Transform({
      position: new Vector3(1, 1, 1),
      rotation: new Quaternion(270, 0, 270, 1),
      scale: new Vector3(5, 5, 1)

    })
    this.addComponentOrReplace(transformShow)
  }
}



export class cMuralScene {
  completionTarget: number = 6
  completed: number = 0
  rewardURL = "https://docs.decentraland.org"
  puzzleRLink: puzzleRewardLink
  constructor(puzzleRLink){
    this.puzzleRLink = puzzleRLink
  }

  addCompleted() {
    this.completed++

    myUI.puzzleCompletion.increase(0.166);
    if (this.completionTarget == this.completed) {

      myUI.rewardMessage()
      this.puzzleRLink.showLink()   
      //openExternalURL(this.rewardURL)
      
    }
  }
}



export class cPuzzlee extends Entity {

  // startPointX = 5;
  // startPointZ = 5;
  tiles = []
  //tilesTarget = []
  tileObjects = []
  rows = 4
  cols = 4
  w
  h
  distance = 0.78
  plate
  rotation
  startPos
  showPos
  folder
  show: Boolean = false
  platePos: Vector3
  plateScale: Vector3
  countMove: Boolean = false
  puzzleComplete: Boolean
  parent: cMuralScene

  constructor(r, c, p, ro, s, folder, pPos, pScale, parent: cMuralScene, pDistance?: number) {
    super()
    this.rows = r
    this.cols = c
    this.startPos = p
    this.showPos = new Vector3(p.x + 1, p.y, p.z)
    this.folder = folder
    this.platePos = pPos
    this.plateScale = pScale
    this.parent = parent
    if (typeof pDistance !== 'undefined') {
      this.distance = pDistance
    }


    this.addComponentOrReplace(
      new Transform({
        position: p,
        rotation: ro,
        scale: s,
      })
    )


    //this.addComponentOrReplace(new GLTFShape('models/' + folder + '/BGplate.glb'));
    engine.addEntity(this);


  }

  setup() {

    let counter = 0


    for (let indexX = 0; indexX < this.rows; indexX++) {

      for (let indexY = 0; indexY < this.cols; indexY++) {

        if (counter < (this.rows * this.cols) - 1) {

          if (typeof this.tiles[indexX] == 'undefined') {
            this.tiles[indexX] = []
          }

          this.tiles[indexX][indexY] = counter

          let tile1 = new tile(
            indexX,
            indexY,
            counter,
            this
          )
          this.tileObjects.push(tile1)
          counter++
        }
      }
    }
    this.tiles[this.rows - 1][this.cols - 1] = null

    log(this.tiles);

    this.shufflePuzzle();
    this.countMove = true

    this.addPlate();
  }

  showPuzzle() {
    this.addComponentOrReplace(
      new utils.MoveTransformComponent(
        this.startPos,
        this.showPos,
        0.5
      )
    );
  }

  hidePuzzle() {
    this.addComponentOrReplace(
      new utils.MoveTransformComponent(
        this.showPos,
        this.startPos,
        0.5
      )
    );
  }

  toggle() {
    if (this.show) {
      this.hidePuzzle()
    } else {
      this.showPuzzle()
    }

    this.show = !this.show
  }

  shufflePuzzle() {
    for (let i = 0; i < 8; i++) {
      this.shuffle(this.tileObjects)
      this.tileObjects.forEach(e => {
        e.tryMove()
      });
    }


  }

  isCompleted() {
    let counter = 0
    let match = 0
    let target = this.rows * this.cols



    for (let indexX = 0; indexX < this.rows; indexX++) {

      for (let indexY = 0; indexY < this.cols; indexY++) {

        log('tile:' + this.tiles[indexX][indexY])
        log('counter:' + counter)

        if (this.tiles[indexX][indexY] == counter) {
          match++;
        }

        if (counter < (this.rows * this.cols) - 2 && counter != null) {
          counter++
        } else {
          counter = null
        }
      }
    }
    log('target: ' + target)
    log('match: ' + match)
    return target == match
  }

  checkComplete() {
    //countMove flag to determine if the move should check for completion or not
    if (!this.countMove || this.puzzleComplete) {
      return false;
    }
    log("isCompleted:" + this.isCompleted())
    if (this.isCompleted()) {

      this.puzzleComplete = true
      this.parent.addCompleted()
    }
  }

  shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  addPlate() {
    // this.plate = new Entity();

    // this.plate.setParent(this)
    // let box = new BoxShape()

    // this.plate.addComponent(box)
    // this.plate.addComponentOrReplace(new Transform({
    //   position: this.platePos,
    //   scale: this.plateScale,
    //   rotation: Quaternion.Euler(0, 0, 90)
    // }))
    // engine.addEntity(this.plate);



    // this.plate = new Entity();
    // //this.plate.setParent = this;
    // engine.addEntity(this.plate);
    // this.plate.addComponent(new GLTFShape('models/plane1.glb'));
    // this.plate.addComponent(
    //   new Transform({
    //     position: new Vector3(1, 0, 1),
    //     scale: new Vector3(1, 1, 1),
    //     rotation: Quaternion.Euler(0, 90, 0)
    //   })
    // )
  }

}

export class tile extends Entity {
  x
  y
  name
  parent
  pos
  constructor(x: number, y: number, label: number, parent: cPuzzlee) {
    super()
    this.x = x
    this.y = y
    this.parent = parent

    this.name = label
    //this.pos = new Vector3(parent.startPointX + (x * parent.distance), 0, parent.startPointZ + (y * parent.distance))
    this.pos = this.vectorPos(x, y)

    this.setParent(parent)

    this.addComponent(
      new Transform({
        position: this.pos,
        //scale: new Vector3(0, 0.7, 1),
        rotation: Quaternion.Euler(0, 0, 0)
      })
    )



    //this.addComponent(new GLTFShape('models/'+this.parent.folder+'/' + (label + 1).toString() + '.glb'));
    //this.addComponent(new GLTFShape('models/' + this.parent.folder + '/zpuzzle_blank_glb.glb'));
    //this.addComponent(new GLTFShape('models/tiles.glb'));
    this.addComponent(new GLTFShape('models/' + this.parent.folder + '/' + (label + 1).toString() + '.gltf'));

    //this.addComponent(new GLTFShape('models/test/zpuzzle/' + (label + 1).toString() + '.gltf'));



    // const myTexture = new Texture("models/textures/512x512 Mural AJxAmanda.jpg")
    // const myTexture2 = new Texture("models/textures/512x512 Mural koco collab.jpg")
    // //Create a material
    // const myMaterial = new Material()
    // myMaterial.albedoTexture = myTexture

    // //Assign the material to the entity
    // this.addComponentOrReplace(myMaterial)


    engine.addEntity(this);
    addLabel(label.toString(), this);

    this.addComponent(
      new OnPointerDown((_e) => {

        this.tryMove()

      },
        {
          // button: ActionButton.PRIMARY,
          hoverText: "Slide",
        })
    )

  }

  tryMove() {
    let res = this.isMovable()
    if (res.movable) {
      this.move(res.x, res.y)

      //update parent tile matrix to remove current in the old position
      this.parent.tiles[this.x][this.y] = null;

      //update parent tile matrix to current tile position
      this.parent.tiles[res.x][res.y] = this.name;

      this.x = res.x
      this.y = res.y

      this.parent.checkComplete()

    }
  }

  move(x, y) {

    this.addComponentOrReplace(
      new utils.MoveTransformComponent(
        this.getComponent(Transform).position,
        this.vectorPos(x, y),
        0.5
      )
    );
    //update tiles
  }

  isMovable() {
    let movable = false
    let response = {
      movable: false,
      x: 0,
      y: 0
    }

    check(this.parent, this.x, this.y - 1);
    check(this.parent, this.x, this.y + 1);
    check(this.parent, this.x + 1, this.y);
    check(this.parent, this.x - 1, this.y);

    function check(p, tx, ty) {
      if (typeof p.tiles[tx] != "undefined") {
        if (typeof p.tiles[tx][ty] != "undefined") {
          if (p.tiles[tx][ty] == null) {
            response.movable = true
            response.x = tx;
            response.y = ty;
          }
        }
      }
    }

    log(this.parent.tiles)
    log(this.x)
    log(this.y)
    log(response.movable)

    return response
  }



  vectorPos(cx, cz) {

    //let pos = new Vector3(this.parent.startPointX + (cx * this.parent.distance), 0, this.parent.startPointZ + (cy * this.parent.distance))

    var pos = new Vector3(
      this.parent.rows - (cz * this.parent.distance) - 1.86,
      -.04,
      (cx * this.parent.distance) - 2.15)




    return pos
  }
}

export function createButton(pos, scale, puzzle: cPuzzlee) {


  let button1 = new Entity()
  button1.addComponent(new GLTFShape('models/button.glb'));
  button1.addComponent(
    new Transform({
      position: pos,
      scale: scale
    })
  )

  // pointer down event
  button1.addComponent(
    new OnPointerDown((_e) => {
      puzzle.toggle();
      //puzzle3.toggle();   
      //puzzle4.toggle(); 
    },
      {
        // button: ActionButton.PRIMARY,
        hoverText: "Click to show/hide puzzle",
      })

  )
  engine.addEntity(button1)

  return button1
}

// link.addComponent(
//   new OnPointerDown(
//     async function () {
//       openExternalURL(url)
//     },
//     {
//       button: ActionButton.PRIMARY,
//       hoverText: locationString,
//     }
//   )
// )




