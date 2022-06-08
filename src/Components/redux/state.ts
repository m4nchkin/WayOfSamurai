export type PostType = {
    id: number,
    message: string,
    likes: number
}

export type DialogType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number,
    text: string
}

type SideBarType = {
    id: number
    img: string
    name: string
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessage: string
}

type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sideBar: Array<SideBarType>
}

export type ActionsTypes = AddPostActionType | ChangeNewPostTextActionType
    | AddMessageActionType | AddMessageTextActionType

export const addPostActionCreator = (): AddPostActionType => {
    return {type: 'ADD-POST'}
}
export const updateTextActionCreator = (postText: string): ChangeNewPostTextActionType => {
    return {type: 'ADD-NEW-POST-TEXT', newPostText: postText}
}
export const addMessageActionCreator = (): AddMessageActionType => {
    return {type: 'ADD-MESSAGE'}
}
export const addMessageTextActionCreator = (Message: string): AddMessageTextActionType => {
    return {type: 'ADD-MESSAGE-TEXT', newMessage: Message}
}

type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}

type AddMessageTextActionType = {
    type: 'ADD-MESSAGE-TEXT',
    newMessage: string
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type ChangeNewPostTextActionType = {
    type: 'ADD-NEW-POST-TEXT'
    newPostText: string
}

export type storeType = {
    _state: RootStateType
    _renderChange: () => void
    // addPost: () => void
    // addNewPostText: (newPostText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export const store: storeType = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi, how are you?', likes: 10},
                {id: 2, message: 'I started learning React', likes: 15},
            ],
            newPostText: ''
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
            ],
            newMessage: ''
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
    },
    _renderChange() {
        debugger
        console.log('state was changed')
    },
    subscribe(observer) {
        this._renderChange = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let obj: PostType = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(obj)
            this._state.profilePage.newPostText = ''
            this._renderChange()
        } else if (action.type === 'ADD-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText
            this._renderChange()
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                text: this._state.dialogsPage.newMessage
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._renderChange()
        }else if (action.type === 'ADD-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessage = action.newMessage
            this._renderChange()
        }
    }
}
