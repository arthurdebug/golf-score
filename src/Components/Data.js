import React, { Component } from 'react'
import { IoChatboxEllipsesSharp } from 'react-icons/io5';

const Drive = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' }
]

const Patt = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 1, label: '1a' },
  { value: 1, label: '1b' },
  { value: 1, label: '1c' },
  { value: 1, label: '1d' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' }
]

let totalSwing = [
  {player:["player1"],swing:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],scoreTotal:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {player:["player2"],swing:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],scoreTotal:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {player:["player3"],swing:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],scoreTotal:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  {player:["player4"],swing:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],scoreTotal:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
]


export {Drive,Patt,totalSwing} ;

