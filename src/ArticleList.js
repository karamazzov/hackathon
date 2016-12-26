import React from 'react';

const ArticleList = props => {

	if(!props.articles){

		return(

			<div className="article-preview"> Still loading... </div>
		);

	};

	if (props.articles.length === 0){

		return(

		<div className="article-preview"> No articles yet </div>

		);

	};

	return (

		<div>
			
		{ props.articles.map(article => { return( <p>article.title</p> ); } ) };

		</div>
		

	);

};

export default ArticleList;