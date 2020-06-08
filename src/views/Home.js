import React, { useEffect } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import InProgressIcon from '@material-ui/icons/Autorenew';
import PendingIcon from '@material-ui/icons/Assignment';
import { useDispatch } from 'react-redux';
import { setToolbarTitleAction } from '../actions/ToolbarAction';
import styled from 'styled-components';

const FEATURE_COMPLETION = [
  {
    id: 1,
    task: 'Set Project Architecture / Structure',
    status: <DoneIcon />
  },
  { id: 2, task: 'Hamburguer Navigation Menu', status: <DoneIcon /> },
  { id: 3, task: 'Add Redux', status: <DoneIcon /> },
  { id: 4, task: 'Mock API Calls', status: <DoneIcon /> },
  { id: 5, task: 'Connect to real API Open Dota API', status: <PendingIcon /> },
  { id: 6, task: 'UI : Main Heroes View', status: <DoneIcon /> },
  { id: 7, task: 'UI : Main Teams View', status: <InProgressIcon /> },
  { id: 8, task: 'UI : Main Home View', status: <DoneIcon /> },
  { id: 9, task: 'Add Unit Testing', status: <PendingIcon /> },
  { id: 10, task: 'Enhance Toolbar Navigation', status: <PendingIcon /> }
];

const Legend = styled.p`
  background: #d2d2d252;
  border: 1px solid #e9e9f7;
  text-align: center;
  padding: 1rem 0;
  label {
    margin: 0 0.5rem;
    vertical-align: super;
  }
`;
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToolbarTitleAction('Welcome'));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Project information</h1>
      <p>
        This is an standalone project using react hooks and redux as an state
        management i am doing this just for fun due i dont have any accessible
        public project because i always worked for big companies with software
        restricting policies{' '}
      </p>
      <h2>Stack</h2>
      <p>MERN STACK </p>
      <Legend>
        <PendingIcon />
        <label>:Pending</label>
        <InProgressIcon />
        <label>:In Progress</label>
        <DoneIcon /> <label>:Done</label>
      </Legend>
      <ul>
        {FEATURE_COMPLETION.map((feat) => 
          <li key={feat.id}>
            {feat.task} &nbsp; {feat.status}
          </li>
        )}
      </ul>

      <h5> Any suggestion just open a PR </h5>
    </>
  );
};


export default Home;
