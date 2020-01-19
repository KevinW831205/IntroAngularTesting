import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  it('should increment the total votes, when upvoted', () => {
    //given
    let component = new VoteComponent();
    const expected = 1;

    // when
    component.upVote();
    const actual = component.totalVotes;

    //then 
    expect(actual).toEqual(expected);
  })

  it('should decrement the total votes, when downvoted', () => {
    //given
    let component = new VoteComponent();
    const expected = -1;

    // when
    component.downVote();
    const actual = component.totalVotes;

    //then 
    expect(actual).toEqual(expected);
  })
});
