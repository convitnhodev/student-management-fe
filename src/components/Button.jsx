import * as React from 'react';

function Button({ children, className, onClickButton }) {
	return (
		<button
			type="button"
			onClick={onClickButton}
			className={`mt-6 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${className}`}
		>
			{children}
		</button>
	);
}

export default Button;
