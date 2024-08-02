import React from 'react'
import { RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense'
import Loader from './Loader'

const CollaborativeRoom = () => {
  return (
    <div>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<Loader />}>
          <div></div>
        </ClientSideSuspense>
      </RoomProvider>
    </div>
  )
}

export default CollaborativeRoom