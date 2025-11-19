import { useState } from 'react';
import { IonContent, IonHeader, IonBadge, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonList, IonSelect, IonSelectOption, IonCard, IonCardContent, IonCardTitle, IonCardHeader } from '@ionic/react';
import { IonSelectCustomEvent, SelectChangeEventDetail } from "@ionic/core"
import './Home.css';
import { CONSTANTS, GameChoices, setupGame, generateChoices, GameOption } from '../service/lotto';

const Home: React.FC = () => {

  const [lotteryChoices, setLotterChoices] = useState<GameChoices>({ maxNum: 0, choices: [] })
  const [selectedGame, setSelectedGame] = useState<string>("")

  const handleSelection = (e: IonSelectCustomEvent<SelectChangeEventDetail>) => {
    handleGeneration(e.detail.value)
    setSelectedGame(e.detail.value)
  }

  const handleGeneration = (gameChoice: GameOption) => {
    let game = setupGame(gameChoice)
    let gameChoices = generateChoices(game)
    gameChoices.choices.sort((a, b) => a - b)
    setLotterChoices(gameChoices)
  }

  const reset = () => {
    setLotterChoices({ maxNum: 0, choices: [] })
  }

  const mapChoices = () => {
    if (lotteryChoices.choices.length > 0) {
      return lotteryChoices.choices.map((v, i) => {
        return (
          <IonBadge className='lotto-number-choice'>{v}</IonBadge>
        )
      })
    }
  }

  const regenerate = () => {
    handleGeneration(selectedGame)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lotto picker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding' fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lotto picker</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className='lotto-content-area'>
          <div className='lotto-selector-container'>
            <IonSelect onIonChange={handleSelection} label="Game" placeholder="Pick game">
              <IonSelectOption value={CONSTANTS.ALLORNOTHING}>All Or Nothing</IonSelectOption>
              <IonSelectOption value={CONSTANTS.POWERBALL}>Powerball</IonSelectOption>
            </IonSelect>

            <IonButton disabled={selectedGame.length == 0} onClick={reset}>Reset</IonButton>
            <IonButton disabled={selectedGame.length == 0} onClick={regenerate}>Regenerate</IonButton>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{selectedGame}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div>
                  {mapChoices()}
                </div>
                <IonButton disabled shape='round'>{lotteryChoices.maxNum}</IonButton>
              </IonCardContent>
            </IonCard>

          </div>


        </div>


      </IonContent>
    </IonPage>
  );
};

export default Home;
