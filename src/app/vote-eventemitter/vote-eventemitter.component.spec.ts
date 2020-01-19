import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteEventemitterComponent } from './vote-eventemitter.component';

describe('VoteEventemitterComponent', () => {
  let component: VoteEventemitterComponent;

  beforeEach(() => {
    component = new VoteEventemitterComponent();
  })

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes = null;
    const expected = 1;
    component.voteChanged.subscribe(tv => {
      totalVotes = tv;
    });

    component.upVote();

    expect(totalVotes).not.toBeNull();
    expect(totalVotes).toEqual(expected);

    component.downVote();
    expect(totalVotes).toEqual(0);

  })

});
