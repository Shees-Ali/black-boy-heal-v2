import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFriendPageRoutingModule } from './add-friend-routing.module';

import { AddFriendPage } from './add-friend.page';
import { FriendsComponent } from './friends/friends.component';
import { MyFriendComponent } from './my-friends/my-friends.component';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFriendPageRoutingModule,

  ],
  declarations: [AddFriendPage,FriendsComponent,MyFriendComponent,FriendRequestsComponent]
})
export class AddFriendPageModule {}
