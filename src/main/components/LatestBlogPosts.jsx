import React, { Component } from 'react';
import FetchAPI from './FetchAPI';
import BlogView from '../views/BlogView';
import Card from '../../generic_components//components/Card';
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';

class LatestBlogPosts extends Component {
	state = {  }

	render() { 
		return (  
			<Card>
				<h2 className="center_text">Latest Blog Posts</h2>
				
				<FetchAPI
					endpoint={'/api/blog'}
					render={data => 
					<BlogView 
						data={data}
						limit={3}
					/>} 
				/>
				
				<div className="center_text">
					<NavLink to="/blog">
						<Button label="View more" className="p-button-raised p-button-rounded" />
					</NavLink>
				</div>
			</Card>
			
		);
	}
}
 
export default LatestBlogPosts;