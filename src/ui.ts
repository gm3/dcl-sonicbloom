import * as ui from '@dcl/ui-scene-utils'
 


export let puzzleCompletion : ui.UIBar
export let canPuzzleCompletion : ui.UIBar
//export let canRewardURL: string = 'https://docs.decentraland.org';

export function buildUI() {

  //let healthLabel = new ui.CornerLabel('Progress:', -180, 495)
  // puzzleCompletion = new ui.UIBar(0, -30, 500, Color4.Green(), ui.BarStyles.ROUNDSILVER, 1)
 

  let cansProgress = new ui.CornerLabel('Files:', -150, 580)
  canPuzzleCompletion = new ui.UIBar(0, -30, 590, Color4.Teal(), ui.BarStyles.ROUNDSILVER, 1)



}


export function welcomeMessage(){
  let prompt = new ui.OkPrompt(
    'Hello and welcome to FarOut Mural!\n We\'ve created several Mural Puzzles for you to solve in order to win a prize.',
    () => {
      log(`accepted`)
    },
    'Ok',
    true
  )
}



export function rewardMessage( ){
  let prompt = new ui.OkPrompt(
    'Thank you for collecting all the files! Claim your prize in the globe!',
    () => {      
      log(`accepted`)
    },
    'Ok',
    true
  )
}

export function canPuzzleRewardMessage( ){
  let prompt = new ui.OkPrompt(
    'Thank you for collecting all the files! Claim your prize in the globe!',
    () => {      
      log(`accepted`)

    },
    'Ok',
    true
  )
  // openExternalURL(this.canRewardURL)
}