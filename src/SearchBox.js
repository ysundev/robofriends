import React from 'react';

const SearchBox = ({seaarchfield, searchChange}) =>       {
	return (
		<div className='pa2 '>
		<input
			className='pa3 ba ba b-green bf-lightest-blue'
			type='search' 
			placeholder='serach robots'
			onChange={searchChange}
		/>
		</div>
	);
}

export default SearchBox;
