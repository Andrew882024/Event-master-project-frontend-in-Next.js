const userInfor:object ={
    userName: "John Doe",
    email: "",
    password: "",
    isLoggedIn: false,
    fullName:"",
    cart: [],
    history: [],
}

const eventInfor:object ={
    eventName: "",
    eventDate: "",
    eventType: "",
    eventImage: [],
    provider: "",
    location: "",
    ticketNumber: 0,
    ticketPrice: 0,
    audience: [],
}



const allEvent:object[] = [];

export {userInfor, eventInfor, allEvent};
