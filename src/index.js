import { render } from 'react-dom'
import React, { Component } from 'react';

import Home from './containers/Home.js'

const appContainer = document.getElementById('app')
render(<Home />, appContainer )