import React, { Component } from 'react';

import NotFound from '../../generic_components/views/NotFound';
import { projects_items } from '../assets/projects_preview';
import Home from './projects/chat/Home';
import Game from './projects/tic-tac-toe/Game';

class ProjectsAPI extends Component {
	state = {  }

	constructor(props) {
		super(props);

		this.verifyLink = this.verifyLink.bind(this);
		this.isEmpty = this.isEmpty.bind(this);
	}

	isEmpty(data) {
		return (data === null || data === undefined || data === "");
	}

	verifyLink() {
		var path = this.props.match.params.path.toLowerCase();

		if(!this.isEmpty(projects_items[path])) {
			if (path === 'tic-tac-toe') {
				return <Game />
			}
			else if (path === 'chat') {
				return <Home />
			}
			else {
				return <NotFound />
			}
		} 
		else {
			return <NotFound />
		}
	}

	render() { 
		return (  
			<div>
				{ this.verifyLink() }
			</div>
		);
	}
}
 
export default ProjectsAPI;