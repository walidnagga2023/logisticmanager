"use client"
import { bookmarkReducer } from '@/utils/Bookmark'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore ({
    reducer:{
        Bookmark : bookmarkReducer
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;