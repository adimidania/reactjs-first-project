import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../../images/to-do-list.png'
              text='  A simple To-do-list  '
              label='Jul 27'
              path='/todolist'
            />
            <CardItem
              src='../../images/netflix.png'
              text='My favorite shows on Netflix'
              label='Jul 27'
              path='/reviews'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../../images/birthday.png'
              text='A daily birthday reminder   '
              label='Jul 29'
              path='/birthday-reminder'
            />
            <CardItem
              src='../../images/tours.png'
              text='Tours website'
              label='Jul 29'
              path='/tours'
            />
            <CardItem
              src='../../images/ultralearning.png'
              text='Ultralearning principles'
              label='Jul 29'
              path='/questions'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../../images/songs.png'
              text='My Favorite Songs'
              label='Jul 30'
              path='/fav-songs'
            />
            <CardItem
              src='../../images/paragraphs.png'
              text='Paragraphs generator'
              label='Jul 30'
              path='/paragraphs'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../../images/color-picker.png'
              text='Colors generator'
              label='Aug 01'
              path='/colors'
            />
            <CardItem
              src='../../images/todo-list-1.png'
              text='Updated to-do-list'
              label='Aug 01'
              path="/todolist-update" 
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;