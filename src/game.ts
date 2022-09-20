import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script2 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import Script3 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"
import Script4 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script5 from "../8bd080c9-9954-43b2-a6ac-0b0913d298c0/src/item"
import Script6 from "../8d62d5a3-411c-43f8-a438-574ccf3d0fbe/src/item"
import Script7 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script8 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script9 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"
import Script10 from "../49e34ab8-1f15-4f6d-b58a-dd95340c941e/src/item"
import Script11 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script12 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
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

// scene 3 is grass
const _scene3 = new Entity('_scene3')
engine.addEntity(_scene3)
const transform100 = new Transform({
  position: new Vector3(0, 0, -32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene3.addComponentOrReplace(transform100)

// scene 2 is orbs
const _scene2 = new Entity('_scene2')
engine.addEntity(_scene2)
const transform101 = new Transform({
  position: new Vector3(113.5, 0, 17),
  rotation: new Quaternion(0, 180, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene2.addComponentOrReplace(transform101)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

/* const channelIdradio = Math.random().toString(16).slice(2)
const channelBusRadio = new MessageBus()
const inventoryRadio = createInventory(UICanvas, UIContainerStack, UIImage)
const optionsRadio = { inventoryRadio } */

// video player
const screen2 = new Entity()
screen2.setParent(_scene)
screen2.addComponent(new PlaneShape())
screen2.addComponent(
  new Transform({
    position: new Vector3(21, 3.5, -29.5),
    scale: new Vector3(8, 4, 1)
  })
)

engine.addEntity(screen2)

const myVideoClip = new VideoClip(
  'https://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8'
)

const myVideoTexture = new VideoTexture(myVideoClip)
myVideoTexture.play()
myVideoTexture.loop = true
// myVideoTexture.volume = 0


const myVideoMaterial = new Material()
myVideoMaterial.albedoTexture = myVideoTexture
myVideoMaterial.roughness = 1
myVideoMaterial.specularIntensity = 0
myVideoMaterial.metallic = 0
myVideoMaterial.emissiveTexture = myVideoTexture
myVideoMaterial.emissiveColor = Color3.White()
myVideoMaterial.emissiveIntensity = 0.6
screen2.addComponentOrReplace(myVideoMaterial)
// end video stream player

// grass

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene3)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene3)
entity2.addComponentOrReplace(gltfShape)
const transform3333 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3333)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene3)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene3)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene3)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene3)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(88, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene3)
entity7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(104, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform8)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene3)
entity8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform9)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene3)
entity9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform10)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene3)
entity10.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform11)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene3)
entity11.addComponentOrReplace(gltfShape)
const transform12 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform12)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene3)
entity12.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(72, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform13)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene3)
entity13.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(88, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform14)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene3)
entity14.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(104, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform15)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene3)
entity15.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform16)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene3)
entity16.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform17)

const entity17 = new Entity('entity17')
engine.addEntity(entity17)
entity17.setParent(_scene3)
entity17.addComponentOrReplace(gltfShape)
const transform18 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity17.addComponentOrReplace(transform18)

const entity18 = new Entity('entity18')
engine.addEntity(entity18)
entity18.setParent(_scene3)
entity18.addComponentOrReplace(gltfShape)
const transform19 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity18.addComponentOrReplace(transform19)

const entity19 = new Entity('entity19')
engine.addEntity(entity19)
entity19.setParent(_scene3)
entity19.addComponentOrReplace(gltfShape)
const transform20 = new Transform({
  position: new Vector3(72, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity19.addComponentOrReplace(transform20)

const entity20 = new Entity('entity20')
engine.addEntity(entity20)
entity20.setParent(_scene3)
entity20.addComponentOrReplace(gltfShape)
const transform21 = new Transform({
  position: new Vector3(88, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity20.addComponentOrReplace(transform21)

const entity21 = new Entity('entity21')
engine.addEntity(entity21)
entity21.setParent(_scene3)
entity21.addComponentOrReplace(gltfShape)
const transform22 = new Transform({
  position: new Vector3(104, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity21.addComponentOrReplace(transform22)

const entity22 = new Entity('entity22')
engine.addEntity(entity22)
entity22.setParent(_scene3)
entity22.addComponentOrReplace(gltfShape)
const transform73 = new Transform({
  position: new Vector3(104, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity22.addComponentOrReplace(transform73)

const entity82 = new Entity('entity82')
engine.addEntity(entity82)
entity82.setParent(_scene3)
entity82.addComponentOrReplace(gltfShape)
const transform74 = new Transform({
  position: new Vector3(88, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity82.addComponentOrReplace(transform74)

const entity83 = new Entity('entity83')
engine.addEntity(entity83)
entity83.setParent(_scene3)
entity83.addComponentOrReplace(gltfShape)
const transform75 = new Transform({
  position: new Vector3(104, 0, -8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity83.addComponentOrReplace(transform75)

const entity84 = new Entity('entity84')
engine.addEntity(entity84)
entity84.setParent(_scene3)
entity84.addComponentOrReplace(gltfShape)
const transform76 = new Transform({
  position: new Vector3(88, 0, -8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity84.addComponentOrReplace(transform76)

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
const gltfShape2222 = new GLTFShape("c300373d-8c88-45cf-8576-ab57050998d6/testmodel30.glb")
gltfShape2222.withCollisions = true
gltfShape2222.isPointerBlocker = true
gltfShape2222.visible = true
testModel.addComponentOrReplace(gltfShape2222)  

// added scrips from builder

const triggerArea22 = new Entity('triggerArea22')
engine.addEntity(triggerArea22)
triggerArea22.setParent(_scene2)
const transform223 = new Transform({
  position: new Vector3(93.5, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(20.602359771728516, 6, 26.654775619506836)
})
triggerArea22.addComponentOrReplace(transform223)

const triggerArea222 = new Entity('triggerArea222')
engine.addEntity(triggerArea222)
triggerArea222.setParent(_scene2)
const transform224 = new Transform({
  position: new Vector3(70.7967300415039, 0, 17.5),
  rotation: new Quaternion(2.26632373595377e-16, -0.25418326258659363, 3.0301002595933824e-8, 0.9671561121940613),
  scale: new Vector3(16.440528869628906, 10.643045425415039, 25.258769989013672)
})
triggerArea222.addComponentOrReplace(transform224)

const triggerArea6 = new Entity('triggerArea6')
engine.addEntity(triggerArea6)
triggerArea6.setParent(_scene2)
const transform225 = new Transform({
  position: new Vector3(102, 0, 8),
  rotation: new Quaternion(0, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(12.082479476928711, 6, 5.310744285583496)
})
triggerArea6.addComponentOrReplace(transform225)

/* const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene2)
const transform26 = new Transform({
  position: new Vector3(98, 2.3211987018585205, 9.904582023620605),
  rotation: new Quaternion(2.1723472833404776e-15, 0.7071067094802856, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.9999991655349731, 1, 0.9999991655349731)
})
messageBubble.addComponentOrReplace(transform26)

const messageBubble2 = new Entity('messageBubble2')
engine.addEntity(messageBubble2)
messageBubble2.setParent(_scene2)
const transform277 = new Transform({
  position: new Vector3(87, 2.3211987018585205, 14.904582977294922),
  rotation: new Quaternion(2.1723472833404776e-15, 0.7071067094802856, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.9999986886978149, 1, 0.9999986886978149)
})
messageBubble2.addComponentOrReplace(transform277) */

/* const radio2 = new Entity('radio2')
engine.addEntity(radio2)
radio2.setParent(_scene2)
const transform28 = new Transform({
  position: new Vector3(71, 1.4783899784088135, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
radio2.addComponentOrReplace(transform28) */



const triggerArea7 = new Entity('triggerArea7')
engine.addEntity(triggerArea7)
triggerArea7.setParent(_scene2)
const transform30 = new Transform({
  position: new Vector3(37, 0, 23.5),
  rotation: new Quaternion(0, -0.0980171412229538, 1.1684551992630077e-8, 0.9951847195625305),
  scale: new Vector3(17.243812561035156, 12, 23.16359519958496)
})
triggerArea7.addComponentOrReplace(transform30)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene2)
const transform31 = new Transform({
  position: new Vector3(26.25884246826172, 3.1146841049194336, 13.395890235900879),
  rotation: new Quaternion(-3.564181657873377e-15, -0.7426485419273376, 8.85306050690815e-8, 0.6696814298629761),
  scale: new Vector3(8.888773918151855, 4, 1.058692455291748)
})
externalLink.addComponentOrReplace(transform31)

const externalLink222 = new Entity('externalLink2')
engine.addEntity(externalLink222)
externalLink222.setParent(_scene2)
const transform323 = new Transform({
  position: new Vector3(99.88101959228516, 2.0191407203674316, 37.46348190307617),
  rotation: new Quaternion(-4.196624075426941e-17, 0.06752290576696396, -8.049356736705704e-9, 0.9977177381515503),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
externalLink222.addComponentOrReplace(transform323)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene2)
const transform333 = new Transform({
  position: new Vector3(93.01616668701172, 2.0963408946990967, 43.45146942138672),
  rotation: new Quaternion(1.50047320569118e-17, -0.02036195993423462, 2.427333001264742e-9, 0.999792754650116),
  scale: new Vector3(2.736173629760742, 3.528029203414917, 1.002884030342102)
})
externalLink3.addComponentOrReplace(transform333)

const externalLink422 = new Entity('externalLink4')
engine.addEntity(externalLink422)
externalLink422.setParent(_scene2)
const transform34 = new Transform({
  position: new Vector3(85.87777709960938, 1.3986485004425049, 42.94599151611328),
  rotation: new Quaternion(1.50047320569118e-17, -0.02036195993423462, 2.427333001264742e-9, 0.999792754650116),
  scale: new Vector3(2.3766238689422607, 2.0811069011688232, 1.0022871494293213)
})
externalLink422.addComponentOrReplace(transform34)

const externalLink5 = new Entity('externalLink5')
engine.addEntity(externalLink5)
externalLink5.setParent(_scene2)
const transform35 = new Transform({
  position: new Vector3(56.86662292480469, 2.882139205932617, 38.49990463256836),
  rotation: new Quaternion(-1.3124197417718883e-15, 0.4811716377735138, -5.736012909096644e-8, 0.8766264915466309),
  scale: new Vector3(2.3766255378723145, 3.1216602325439453, 1.002287745475769)
})
externalLink5.addComponentOrReplace(transform35)

const externalLink6 = new Entity('externalLink6')
engine.addEntity(externalLink6)
externalLink6.setParent(_scene2)
const transform36 = new Transform({
  position: new Vector3(68.36662292480469, 2.882139205932617, 15.49990463256836),
  rotation: new Quaternion(7.978655645782089e-15, -0.994033694267273, 1.1849802916685803e-7, 0.1090741902589798),
  scale: new Vector3(2.3766274452209473, 2.0811069011688232, 1.002288579940796)
})
externalLink6.addComponentOrReplace(transform36)

const externalLink7 = new Entity('externalLink7')
engine.addEntity(externalLink7)
externalLink7.setParent(_scene2)
const transform373 = new Transform({
  position: new Vector3(78.08049774169922, 2.437185764312744, 18.503448486328125),
  rotation: new Quaternion(1.0567915933892922e-14, -0.9280766248703003, 1.1063534799404806e-7, -0.37238937616348267),
  scale: new Vector3(2.376636028289795, 2.0811069011688232, 1.0022926330566406)
})
externalLink7.addComponentOrReplace(transform373)

const externalLink8 = new Entity('externalLink8')
engine.addEntity(externalLink8)
externalLink8.setParent(_scene2)
const transform383 = new Transform({
  position: new Vector3(51.01470947265625, 3.77878999710083, 16.34027862548828),
  rotation: new Quaternion(7.978655645782089e-15, -0.994033694267273, 1.1849802916685803e-7, 0.1090741902589798),
  scale: new Vector3(2.376631498336792, 2.0811069011688232, 1.0022903680801392)
})
externalLink8.addComponentOrReplace(transform383)

const externalLink9 = new Entity('externalLink9')
engine.addEntity(externalLink9)
externalLink9.setParent(_scene2)
const transform39 = new Transform({
  position: new Vector3(46.01470947265625, 3.77878999710083, 10.340278625488281),
  rotation: new Quaternion(-1.2413854835844219e-14, 0.011116653680801392, -1.3252264841057126e-9, 0.9999382495880127),
  scale: new Vector3(2.3766367435455322, 2.0811069011688232, 1.0022926330566406)
})
externalLink9.addComponentOrReplace(transform39)

const externalLink10 = new Entity('externalLink10')
engine.addEntity(externalLink10)
externalLink10.setParent(_scene2)
const transform40 = new Transform({
  position: new Vector3(39.36662292480469, 2.882139205932617, 42.99990463256836),
  rotation: new Quaternion(-7.051196073153045e-15, 0.9999382495880127, -1.1920192122261142e-7, -0.011116623878479004),
  scale: new Vector3(2.376626491546631, 3.1216602325439453, 1.002288579940796)
})
externalLink10.addComponentOrReplace(transform40)

const externalLink112 = new Entity('externalLink11')
engine.addEntity(externalLink112)
externalLink112.setParent(_scene2)
const transform41 = new Transform({
  position: new Vector3(41.86662292480469, 3.594576835632324, 31.13233757019043),
  rotation: new Quaternion(-7.051196073153045e-15, 0.9999382495880127, -1.1920192122261142e-7, -0.011116623878479004),
  scale: new Vector3(2.0071349143981934, 1.7216640710830688, 1.0022135972976685)
})
externalLink112.addComponentOrReplace(transform41)

const externalLink12 = new Entity('externalLink12')
engine.addEntity(externalLink12)
externalLink12.setParent(_scene2)
const transform42 = new Transform({
  position: new Vector3(21.110441207885742, 5.696528434753418, 39.43128967285156),
  rotation: new Quaternion(3.392886354356729e-14, -0.7800149321556091, 9.298501879584364e-8, -0.6257609724998474),
  scale: new Vector3(2.0071394443511963, 1.7216640710830688, 1.0022143125534058)
})
externalLink12.addComponentOrReplace(transform42)

const externalLink13 = new Entity('externalLink13')
engine.addEntity(externalLink13)
externalLink13.setParent(_scene2)
const transform43 = new Transform({
  position: new Vector3(26.64969825744629, 4.102228164672852, 23.494462966918945),
  rotation: new Quaternion(3.335374511304057e-14, -0.6525951027870178, 7.779539856755946e-8, -0.757706880569458),
  scale: new Vector3(2.00714111328125, 1.7216640710830688, 1.0022162199020386)
})
externalLink13.addComponentOrReplace(transform43)

const triggerArea3 = new Entity('triggerArea3')
engine.addEntity(triggerArea3)
triggerArea3.setParent(_scene2)
const transform443 = new Transform({
  position: new Vector3(88.5, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 7, 8)
})
triggerArea3.addComponentOrReplace(transform443)


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


/* const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
externalLink4.addComponent(new PlaneShape())
const transform27 = new Transform({
  position: new Vector3(16,4,12),
  rotation: new Quaternion(180,0,180,1),
  scale: new Vector3(4,4,4)
})
externalLink4.addComponentOrReplace(transform27) */


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



/* //solar punk link
let externalLink111 = new solarPunkLink()
externalLink111.setParent(_scene)
externalLink111.hideLink()

const script7 = new Script7()
script7.spawn(externalLink111, { "url": "https://decentraland.org/", "name": "Thank you for collecting all the crystals! Claim your prize, scan the qr with your smartphone for best results!" }, createChannel(channelId, externalLink111, channelBus))


//Puzzle Reward Link
let puzzleRLink = new puzzleRewardLink()
puzzleRLink.setParent(_scene)
puzzleRLink.hideLink()

const sc = new Script8()
sc.spawn(puzzleRLink, { "url": "https://decentraland.org/", "name": "Thank you for collecting all the crystals! Claim your prize, scan the qr with your smartphone for best results!" }, createChannel(channelId, puzzleRLink, channelBus)) */



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
  new Vector3(60,10,-20), // treetop 1s
]  

// Contains the positions for each can
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
  
]   */


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

//let FarOutMural = new cMuralScene(puzzleRLink)


// radio

/* const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(17, 1.5, -23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
radio.addComponentOrReplace(transform3)  */

// Yuls additions

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script8 = new Script8()
const script12 = new Script12()
const script9 = new Script9()

script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
//script7.init(options)
script8.init(options)
script12.init(options)
// sc.init(options)
//script9.init(optionsRadio)

// radio script
/* script9.spawn(radio, {"startOn":true,"volume":.5,"onClickText":"Radio On/Off","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"customStation":" ","onActivate":[],"onDeactivate":[]}, createChannel(channelIdradio, radio, channelBusRadio)) */


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



// social media buttons 
script4.spawn(twitterButtonLink, {"url":"SONIC_BLOOM","bnw":false}, createChannel(channelId, twitterButtonLink, channelBus))
script5.spawn(discordButtonLink, {"url":"invite/ZprYm7eaC2","bnw":false}, createChannel(channelId, discordButtonLink, channelBus))



/* script1.spawn(triggerArea22, {"enabled":true,"onEnter":[{"entityName":"radio2","actionId":"activate","values":{}}],"onLeave":[{"entityName":"radio2","actionId":"deactivate","values":{}}]}, createChannel(channelId, triggerArea22, channelBus))
script1.spawn(triggerArea222, {"enabled":true,"onEnter":[{"entityName":"radio2","actionId":"activate","values":{}}],"onLeave":[{"entityName":"radio2","actionId":"deactivate","values":{}}]}, createChannel(channelId, triggerArea222, channelBus)) */
/* script1.spawn(triggerArea6, {"enabled":true,"onEnter":[{"entityName":"messageBubble","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea6, channelBus))
script2.spawn(messageBubble, {"text":"Welcome to the Unified Field!\nOur world is connecting in new \nways, and we are now testing \nthe transferance of energy \nthrough the digital world.\nExplore Sonic Bloom \nanywhere in the world.","fontSize":16.5}, createChannel(channelId, messageBubble, channelBus))
script2.spawn(messageBubble2, {"text":"Legend is theres a cave in the mountain! \nIts powered by a crystal energy source, \nand its told that if all the crystals are \ncollected, a gift will be given to the finder.","fontSize":16.5}, createChannel(channelId, messageBubble2, channelBus)) */
/* script3.spawn(radio2, {"startOn":false,"volume":1,"onClickText":"Hummingbird Stage","onClick":[],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3","customStation":"https://gateway.pinata.cloud/ipfs/QmZk1NfY4XTijKVSC6VChNxoPGLgnoykNordrSFmmmdMBk","onActivate":[]}, createChannel(channelId, radio2, channelBus))
script1.spawn(triggerArea7, {"enabled":true,"onEnter":[{"entityName":"radio2","actionId":"activate","values":{}}],"onLeave":[{"entityName":"radio2","actionId":"deactivate","values":{}}]}, createChannel(channelId, triggerArea7, channelBus)) */
script4.spawn(externalLink, {"url":"https://www.instagram.com/ajdavisart/","name":"Mural by @ajdavisart"}, createChannel(channelId, externalLink, channelBus))
script4.spawn(externalLink222, {"url":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-13.html ","name":"Sonic Bloom VR #13 featuring Random Rab at the Main Stage, 2017. "}, createChannel(channelId, externalLink222, channelBus))
script4.spawn(externalLink3, {"url":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-3.html ","name":"Sonic Bloom VR #3 featuring STS9 at the Main Stage, 2015.  "}, createChannel(channelId, externalLink3, channelBus))
script4.spawn(externalLink422, {"url":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-12.html ","name":"Sonic Bloom VR #12 featuring The Human Experience at the Main Stage, 2016. "}, createChannel(channelId, externalLink422, channelBus))
script4.spawn(externalLink5, {"url":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-4.html ","name":"Sonic Bloom VR #4 featuring Soulacybin at the Hummingbird Stage, 2015. "}, createChannel(channelId, externalLink5, channelBus))
script4.spawn(externalLink6, {"url":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-11.html ","name":"Sonic Bloom VR #11 featuring Clozee at the Hummingbird Stage, 2016. "}, createChannel(channelId, externalLink6, channelBus))
script4.spawn(externalLink7, {"url":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-8.html ","name":"Sonic Bloom VR #8 featuring KllSmith at the Hummingbird Stage, 2016. "}, createChannel(channelId, externalLink7, channelBus))
script4.spawn(externalLink8, {"url":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-10.html ","name":"Sonic Bloom VR #10 featuring mural by Pher01. "}, createChannel(channelId, externalLink8, channelBus))
script4.spawn(externalLink9, {"url":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-9.html ","name":"Sonic Bloom VR #9 featuring mural by Mpek. "}, createChannel(channelId, externalLink9, channelBus))
script4.spawn(externalLink10, {"url":"Sonic Bloom VR #6 featuring River camp site, 2015. ","name":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-6.html "}, createChannel(channelId, externalLink10, channelBus))
script4.spawn(externalLink112, {"url":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-5.html ","name":"Sonic Bloom VR #5 featuring HalfColor at the Meadow Stage, 2015. "}, createChannel(channelId, externalLink112, channelBus))
script4.spawn(externalLink12, {"url":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-7.html ","name":"Sonic Bloom VR #7 featuring the Meadow Stage during 2015 site walk pre-festival. "}, createChannel(channelId, externalLink12, channelBus))
script4.spawn(externalLink13, {"url":"https://www.peacefulplacesvr.com/VR-Library/sonic-bloom-vr-2.html ","name":"Sonic Bloom VR #2 featuring Kalya Scintilla at the Meadow Stage, 2015.  "}, createChannel(channelId, externalLink13, channelBus))
/* script1.spawn(triggerArea3, {"enabled":true,"onEnter":[{"entityName":"messageBubble2","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble2","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea3, channelBus)) */

const samDomes = new Entity('samDomes')
engine.addEntity(samDomes)
samDomes.setParent(_scene2)
const transform29 = new Transform({
  position: new Vector3(112, 0, 0),
  rotation: new Quaternion(8.38073456254718e-15, 1, -1.1920928244535389e-7, -2.2351741790771484e-8),
  scale: new Vector3(1, 1, 1)
})
samDomes.addComponentOrReplace(transform29)
const gltfShape2 = new GLTFShape("fff7abc0-d011-4437-9130-6b1ff588a651/sam_domes_3_for_stream.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
samDomes.addComponentOrReplace(gltfShape2)