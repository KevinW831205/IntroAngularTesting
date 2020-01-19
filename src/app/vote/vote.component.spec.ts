import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  // setup
  beforeEach(() => {
    //before each test
    component = new VoteComponent();
  })

  beforeAll(() => {

  })

  //teardown
  afterEach(() => {
    //after each clean up
  })


  afterAll(() => {

  })

  it('should increment the total votes, when upvoted', () => {
    //given
    const expected = 1;

    // when
    component.upVote();
    const actual = component.totalVotes;

    //then 
    expect(actual).toEqual(expected);
  })

  it('should decrement the total votes, when downvoted', () => {
    //given
    const expected = -1;

    // when
    component.downVote();
    const actual = component.totalVotes;

    //then 
    expect(actual).toEqual(expected);
  })
});
