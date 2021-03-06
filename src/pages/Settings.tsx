import { IonAvatar, IonButtons, IonCheckbox, IonContent, IonHeader, IonItem, IonItemDivider, IonLabel, IonList, IonMenuButton, IonPage, IonRange, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Settings.css';


const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle><span style={{color: 'darkorange', fontFamily: 'Arial'}}>M</span><span style={{color: 'black', fontFamily: 'Arial'}}>ySettings</span></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"><span style={{color: 'darkorange', fontFamily: 'Arial'}}>M</span><span style={{color: 'black', fontFamily: 'Arial'}}>ySettings</span></IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="ion-padding user-card">
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt=""/>
          </IonAvatar>
          <IonLabel className="ion-padding-start">
            <h2>Migros-Chind</h2>
            <p>migros-chind@gmail.com</p>
          </IonLabel>
        </div>

        <h1 className="ion-padding-start">Allergien</h1>
        <IonList>
          <IonItem>
            <IonCheckbox checked={true}/>
            <IonLabel>Gluten</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox checked={true}/>
            <IonLabel>Laktose</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox/>
            <IonLabel>Nüsse</IonLabel>
          </IonItem>
        </IonList>

        <h1 className="ion-padding-start">Präferenzen</h1>
        <IonList>
          <IonItemDivider>Budget</IonItemDivider>
          <IonRange min={1} max={5} step={1} snaps={true} ticks={true} value={2}>
            <IonLabel slot="start">Klein</IonLabel>
            <IonLabel slot="end">Gross</IonLabel>
          </IonRange>
          <IonItemDivider>Nachhaltigkeit</IonItemDivider>
          <IonRange min={1} max={5} step={1} snaps={true} ticks={true} value={3}>
            <IonLabel slot="start">¯\_(ツ)_/¯</IonLabel>
            <IonLabel slot="end">Viel</IonLabel>
          </IonRange>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
