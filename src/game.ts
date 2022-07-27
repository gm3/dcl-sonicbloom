import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script2 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import Script3 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script4 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script5 from "../8bd080c9-9954-43b2-a6ac-0b0913d298c0/src/item"
import Script6 from "../8d62d5a3-411c-43f8-a438-574ccf3d0fbe/src/item"
import Script7 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script8 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script9 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"
import * as utils from '@dcl/ecs-scene-utils'
import { createCoin } from './coin'
import { cPuzzlee, createButton, cMuralScene, solarPunkLink, puzzleRewardLink } from './game-obj'
import * as myUI from './ui'
import { getUserData } from "@decentraland/Identity"


const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)




// actual 3d model of the thing


const testModel = new Entity('testModel')
engine.addEntity(testModel)
testModel.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(2, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
testModel.addComponentOrReplace(transform23)
const gltfShape2 = new GLTFShape("c300373d-8c88-45cf-8576-ab57050998d6/testmodel27.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
testModel.addComponentOrReplace(gltfShape2)  



// added elements

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(0,0,0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.029557704925537, 3.2022972106933594, 3.202298402786255)
})
triggerArea.addComponentOrReplace(transform24)

const triggerArea2 = new Entity('triggerArea2')
engine.addEntity(triggerArea2)
triggerArea2.setParent(_scene)

const transform25 = new Transform({
  position: new Vector3(0,0,0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.674324989318848, 3.2022972106933594, 3.2022976875305176)
})
triggerArea2.addComponentOrReplace(transform25)


const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
externalLink4.addComponent(new PlaneShape())
const transform27 = new Transform({
  position: new Vector3(16,4,12),
  rotation: new Quaternion(180,0,180,1),
  scale: new Vector3(4,4,4)
})
externalLink4.addComponentOrReplace(transform27)


const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(12,2.5,7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
twitterButtonLink.addComponentOrReplace(transform32)

const discordButtonLink = new Entity('discordButtonLink')
engine.addEntity(discordButtonLink)
discordButtonLink.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(12,2.5,12 ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
discordButtonLink.addComponentOrReplace(transform33)

const externalLink11 = new Entity('externalLink11')
engine.addEntity(externalLink11)
externalLink11.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(15.210407257080078, 9.837600708007812, 8.156913757324219),
  rotation: new Quaternion(4.3216108012859075e-15, -0.005133539438247681, 6.119735274090488e-10, 0.9999868869781494),
  scale: new Vector3(2.5718507766723633, 1.7536817789077759, 0.19042472541332245)
})
externalLink11.addComponentOrReplace(transform37)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(13.5, 26.837600708007812, 5),
  rotation: new Quaternion(0.29307377338409424, 0.07449822127819061, -0.02020230144262314, 0.952968955039978),
  scale: new Vector3(18.329816818237305, 6.535341262817383, 0.7668797373771667)
})
externalLink2.addComponentOrReplace(transform38)



const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }


// add flying tent
const flyingtent = new Entity('flyingtent')
engine.addEntity(flyingtent)
flyingtent.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
flyingtent.addComponentOrReplace(transform44)
const gltfShape3 = new GLTFShape("models/flyingtent.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
flyingtent.addComponentOrReplace(gltfShape3)  

// add stacypants
const stacypants = new Entity('stacypants')
engine.addEntity(stacypants)
stacypants.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(2, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stacypants.addComponentOrReplace(transform45)
const gltfShape4 = new GLTFShape("models/stacypants.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
stacypants.addComponentOrReplace(gltfShape4)  

// add lighttower
const lighttower = new Entity('lighttower')
engine.addEntity(lighttower)
lighttower.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(2, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lighttower.addComponentOrReplace(transform46)
const gltfShape5 = new GLTFShape("models/lighttower.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
lighttower.addComponentOrReplace(gltfShape5)  

// add mainstage aniamted 1
const mainstageanimated1 = new Entity('mainstageanimated1')
engine.addEntity(mainstageanimated1)
mainstageanimated1.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(2, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mainstageanimated1.addComponentOrReplace(transform47)
const gltfShape6 = new GLTFShape("models/main_stage_animated_1.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
mainstageanimated1.addComponentOrReplace(gltfShape6)  

// add mainstage aniamted 2
const mainstageanimated2 = new Entity('mainstageanimated2')
engine.addEntity(mainstageanimated2)
mainstageanimated2.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(2, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mainstageanimated2.addComponentOrReplace(transform48)
const gltfShape7 = new GLTFShape("models/main_stage_animated_2.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
mainstageanimated2.addComponentOrReplace(gltfShape7)  

// add humming aniamted 1
const hummingstageanimated1 = new Entity('hummingstageanimated1')
engine.addEntity(hummingstageanimated1)
hummingstageanimated1.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(2, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hummingstageanimated1.addComponentOrReplace(transform49)
const gltfShape8 = new GLTFShape("models/humming_stage_animated_1.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
hummingstageanimated1.addComponentOrReplace(gltfShape8)  

// add humming aniamted 2
const hummingstageanimated2 = new Entity('hummingstageanimated2')
engine.addEntity(hummingstageanimated2)
hummingstageanimated2.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(2, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hummingstageanimated2.addComponentOrReplace(transform50)
const gltfShape9 = new GLTFShape("models/humming_stage_animated_2.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
hummingstageanimated2.addComponentOrReplace(gltfShape9)  

// add meadow animation
const meadowstageanimation = new Entity('meadowstageanimation')
engine.addEntity(meadowstageanimation)
meadowstageanimation.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(2, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
meadowstageanimation.addComponentOrReplace(transform51)
const gltfShape10 = new GLTFShape("models/meadow_stage_animated.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
meadowstageanimation.addComponentOrReplace(gltfShape10)  



//solar punk link
let externalLink = new solarPunkLink()
externalLink.setParent(_scene)
externalLink.hideLink()

const script7 = new Script7()
script7.spawn(externalLink, { "url": "https://decentraland.org/", "name": "Thank you for collecting all the crystals! Claim your prize, scan the qr with your smartphone for best results!" }, createChannel(channelId, externalLink, channelBus))


//Puzzle Reward Link
let puzzleRLink = new puzzleRewardLink()
puzzleRLink.setParent(_scene)
puzzleRLink.hideLink()

const sc = new Script8()
sc.spawn(puzzleRLink, { "url": "https://decentraland.org/", "name": "Thank you for collecting all the crystals! Claim your prize, scan the qr with your smartphone for best results!" }, createChannel(channelId, puzzleRLink, channelBus))



// adding crystal game logic below
const coinShape = new GLTFShape('models/CRYSTAL.glb') // Include the spinning animation


// Contains the positions for each can
const coinPositions = [
  new Vector3(12,2,1), // front outside
  new Vector3(20,2,-20 ), // front outside 2 
  new Vector3(39,2,2), // 
  new Vector3(50,2,-20), // 
  new Vector3(60,2,1), // 
  new Vector3(55,2,3), // 
  new Vector3(70,3,4), // 
  new Vector3(80,2,-13), // 
  new Vector3(80,2,-27), // 
  new Vector3(58,2,-18), // 
  new Vector3(63,9,-1), // top floor before globe
  new Vector3(50,9,-1), // top floor before globe
  new Vector3(40,9,-4), // top floor before globe
  new Vector3(97,19,-20), // treetop 1
  new Vector3(60,10,-20), // treetop 1
  
]  

/* const coinPositions = [
  new Vector3(1,1,1), // front outside
  new Vector3(1,1,2), // front outside 2 
  new Vector3(1,1,3), // 
  new Vector3(1,1,4), // 
  new Vector3(1,1,5), // 
  new Vector3(1,1,6), // 
  new Vector3(1,1,7), // 
  new Vector3(1,1,8), // 
  new Vector3(1,1,9), // 
  new Vector3(1,1,10), // 
  new Vector3(1,1,11), // top floor before globe
  new Vector3(1,1,12), // top floor before globe
  new Vector3(1,1,13), // top floor before globe
  new Vector3(1,1,14), // treetop 1
  new Vector3(1,1,15), // treetop 1
  
]  */



const triggerBoxShape = new utils.TriggerBoxShape(
  new Vector3(1.5, 3, 1.5),
  new Vector3(0, 1, 0)
) // Trigger shape for coin

// Setup the file game
for (const coinPosition of coinPositions) {
  createCoin(
    coinShape,
    new Transform({ position: coinPosition }),
    triggerBoxShape,
    externalLink
  )
}

myUI.buildUI()

let FarOutMural = new cMuralScene(puzzleRLink)


// radio

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(17, 1.5, -23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
radio.addComponentOrReplace(transform3)

const channelIdradio = Math.random().toString(16).slice(2)
const channelBusRadio = new MessageBus()
const inventoryRadio = createInventory(UICanvas, UIContainerStack, UIImage)
const optionsRadio = { inventoryRadio }

const script9 = new Script9()
script9.init(optionsRadio)
script9.spawn(radio, {"startOn":true,"volume":.5,"onClickText":"Radio On/Off","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"customStation":"https://gm3.github.io/beats/mp3/GodfreyMeyerTheDripInstrumental.mp3","onActivate":[],"onDeactivate":[]}, createChannel(channelIdradio, radio, channelBusRadio))


// player enters and exits scene
executeTask(async () => {
  //myUI.welcomeMessage();
  let myPlayer = await getUserData()

  onEnterSceneObservable.add((player) => {
    //myUI.welcomeMessage()
  })

  onLeaveSceneObservable.add((player) => {
    // log("player left scene: ", player.userId)
    // if (player.userId === myPlayer?.userId) {
    //   log("I left the scene!")
    // }
  })
})


const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
sc.init(options)


script1.spawn(triggerArea2, {"enabled":true,"onEnter":[{"entityName":"externalLink11","actionId":"activate","values":{}}],"onLeave":[{"entityName":"externalLink11","actionId":"activate","values":{}}]}, createChannel(channelId, triggerArea2, channelBus))


script3.spawn(externalLink2, {"url":"https://decentraland.org/","name":"Link Title"}, createChannel(channelId, externalLink2, channelBus))
script3.spawn(externalLink4, {"url":"https://decentraland.org/","name":"Link Title"}, createChannel(channelId, externalLink4, channelBus))



// social media buttons 
script4.spawn(twitterButtonLink, {"url":"SONIC_BLOOM","bnw":false}, createChannel(channelId, twitterButtonLink, channelBus))
script5.spawn(discordButtonLink, {"url":"invite/ZprYm7eaC2","bnw":false}, createChannel(channelId, discordButtonLink, channelBus))

// message bubbles
script1.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"messageBubble","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea, channelBus))
script2.spawn(messageBubble, {"text":"Here at Filecoin, we organize \n millions of data points daily. Our \n mission at Filecoin is to preserve \n humanity’s most valuable \ninformation and we need your help! \n\nCollect files around the space and \nadd them to the Filecoin network \non the top floor to redeem \nyour NFT wearable!","fontSize":11}, createChannel(channelId, messageBubble, channelBus))


// welcoem text 
script1.spawn(triggerArea6, {"enabled":true,"onEnter":[{"entityName":"messageBubble2","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble2","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea6, channelBus))
script2.spawn(messageBubble2, {"text":"Welcome To SonicBloom \nMusic Fesitval","fontSize":18}, createChannel(channelId, messageBubble2, channelBus))
