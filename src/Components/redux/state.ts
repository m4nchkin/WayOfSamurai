export type PostsType = {
    id: number,
    message: string,
    likes: number
}

export type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    text: string
}

export type SideBarType = {
    id: number
    img: string
    name: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sideBar: Array<SideBarType>
}

export let state: RootStateType = {
    profilePage: {
        posts: [{id: 1, message: 'Hi, how are you?', likes: 10},
            {id: 2, message: 'I started learning React', likes: 15},
        ]
    },
    dialogsPage: {
        dialogs: [{id: 1, name: 'Oleg'},
            {id: 2, name: 'Daniil'},
            {id: 3, name: 'Yanis'},
            {id: 4, name: 'Viktor'},
            {id: 5, name: 'Zakhar'},
            {id: 6, name: 'Maxim'}],
        messages: [
            {id: 1, text: 'Hi'},
            {id: 2, text: 'How are you?'},
            {id: 3, text: 'Fuck'},
            {id: 4, text: 'Fucking fuck'},
            {id: 5, text: 'Fucking fuck fuck'},
            {id: 6, text: 'Fucking fuck fuck fuck'}
        ]
    },
    sideBar: [
        {
            id: 1,
            img: 'https://sun3-11.userapi.com/s/v1/ig2/b_W9l-O52gJWSRm1r5AIauyav-jJ4pyYVcJulOJMtpMGSQGl6YXlaleg9SgnH2uIy1QTOH4CYMD04ktLEYtA3Qj2.jpg?size=200x200&quality=96&crop=71,97,543,543&ava=1',
            name: 'Oleg'
        },
        {
            id: 2,
            img: 'https://sun9-18.userapi.com/s/v1/if1/g7p-DOPnVaghrLxBkckejg4uFQv_1XRsx0P4FWvv1_Yi_gCDmj-dmB8qs9EQWaOCzu0BdSOY.jpg?size=568x1080&quality=96&type=album',
            name: 'Daniil'
        },
        {
            id: 3,
            img: 'https://sun3-17.userapi.com/s/v1/ig2/hwoaIexm5xOWVMSy4_x3FBQdK-igC9L7y8MAwyx52VbcEUa9kWo7X46wE6Q8QWKW9j8QNc3JLPT5Ax1gFOoRJeYG.jpg?size=200x200&quality=95&crop=1,180,783,783&ava=1',
            name: 'Yanis'
        }]
}




