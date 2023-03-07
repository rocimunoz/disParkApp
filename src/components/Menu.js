import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
	mailOutline,
	warningOutline,
	warningSharp,
	carSharp,
	locateSharp,
} from "ionicons/icons";
import "./Menu.css";

const appPages = [
	{
		title: "Paradas",
		url: "/page/Inbox",
		iosIcon: mailOutline,
		mdIcon: carSharp,
	},

	{
		title: "Paradas cercanas",
		url: "/page/Spam",
		iosIcon: warningOutline,
		mdIcon: locateSharp,
	},
];

const Menu = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Cabecera 1</IonListHeader>
					<IonNote>testing@email.com</IonNote>
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									// className={
									// 	location.pathname === appPage.url
									// 		? "selected"
									// 		: ""
									// }
									routerLink={appPage.url}
									routerDirection="none"
									lines="none"
									detail={false}
								>
									<IonIcon
										aria-hidden="true"
										slot="start"
										ios={appPage.iosIcon}
										md={appPage.mdIcon}
									/>
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>

				{/* <IonList id="labels-list">
					<IonListHeader>Labels</IonListHeader>
					{labels.map((label, index) => (
						<IonItem lines="none" key={index}>
							<IonIcon
								aria-hidden="true"
								slot="start"
								icon={bookmarkOutline}
							/>
							<IonLabel>{label}</IonLabel>
						</IonItem>
					))}
				</IonList> */}
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
