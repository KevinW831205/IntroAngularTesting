import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-eventemitter',
  templateUrl: './vote-eventemitter.component.html',
  styleUrls: ['./vote-eventemitter.component.css']
})
export class VoteEventemitterComponent {
  totalVotes = 0;
  voteChanged = new EventEmitter();

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }

  downVote() {
    this.totalVotes--;
    this.voteChanged.emit(this.totalVotes);
  }

}
