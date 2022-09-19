import * as ui from '@dcl/ui-scene-utils'
 


export let puzzleCompletion : ui.UIBar
export let canPuzzleCompletion : ui.UIBar
//export let canRewardURL: string = 'https://docs.decentraland.org';

export function buildUI() {

  //let healthLabel = new ui.CornerLabel('Progress:', -180, 495)
  // puzzleCompletion = new ui.UIBar(0, -30, 500, Color4.Green(), ui.BarStyles.ROUNDSILVER, 1)
 

  let cansProgress = new ui.CornerLabel('Crystals:', -160, 580)
  canPuzzleCompletion = new ui.UIBar(0, -30, 590, Color4.Teal(), ui.BarStyles.ROUNDSILVER, 1)



}


export function welcomeMessage(){
  let prompt = new ui.OkPrompt(
    'Hello collect all the crystals  to win a prize.',
    () => {
      log(`accepted`)
    },
    'Ok',
    true
  )
}



export function rewardMessage( ){
  let prompt = new ui.OkPrompt(
    'You collected all the crystals! Claim your prize in the cave, scan the qr with your smartphone!',
    () => {      
      log(`accepted`)
    },
    'Ok',
    true
  )
}



export function canPuzzleRewardMessage( ){
  let prompt = new ui.OkPrompt(
    'You collected all the crystals! Claim your prize! Scan the QR with your smartphone!',
    () => {      
      log(`accepted`)

    },
    'Ok',
    true
    const canvas = new UICanvas()
    const clickableImage = new UIImage(canvas, new Texture("https://gm3.github.io/imgs/img/win2.png"))
    
    
    clickableImage.name = "clickable-image"
    clickableImage.width = "300px"
    clickableImage.hAlign = "left"
    clickableImage.height = "300px"
    clickableImage.sourceWidth = 300
    clickableImage.sourceHeight = 300
    clickableImage.isPointerBlocker = true
    clickableImage.onClick = new OnClick(() => {
      // DO SOMETHING
  
})